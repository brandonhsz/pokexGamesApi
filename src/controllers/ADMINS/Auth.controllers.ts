import e from "express";
import jwt from "jsonwebtoken"

import Admin from "../../models/adminUsers";
import { Encrypt } from '../../helpers/Encrypt';

export class AuthController {
  static async signup(req: e.Request, res: e.Response) {

    const { email, password, username } = req.body;

    const hashPassword = await Encrypt.encrypt(password);


    const admin = new Admin({
      email,
      password: hashPassword,
      username
    });

    const newUser = await admin.save();

    const token = jwt.sign({ id: newUser._id }, 'brandon', { expiresIn: "24h" });

    res.status(200).json({
      message: "Admin created successfully",
      token
    })

  }

  static async signin(req: e.Request, res: e.Response) {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });

    if (!user) return res.status(401).json({ message: "User Not Found" })

    const isMatch = await Encrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ message: "Invalid Password" })

    const token = jwt.sign({ id: user._id }, 'brandon', { expiresIn: "24h" });

    res.status(200).json({
      message: "Admin signed in successfully",
      token
    });

  }
}