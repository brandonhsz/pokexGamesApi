import e from "express"
import jwt from "jsonwebtoken"
import Admin from "../models/adminUsers";
const isAuthorized = async (req: e.Request, res: e.Response, next: e.NextFunction) => {
  try {


    const token = req.headers['x-access-token'] as string;

    if (!token) return res.status(401).json({ message: "Invalid Token" })


    const decode = jwt.verify(token, "brandon")

    const admin = await Admin.findById(decode.id)

    if (!admin) return res.status(401).json({ message: "Invalid Token" })
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" })
  }
  next()

}

export default isAuthorized