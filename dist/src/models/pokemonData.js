"use strict";
const pokesarray = [
    ///////// INICIO generation 1
    {
        name: "Bulbasaur", number: 1, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Ivysaur", evo2: "Venusaur", npreEvo2: "no", npreEvo1: "no", nevo1: "2", nevo2: "3",
        maps: '"top":27,"left":43,"text":"Jungle Island - (VIP)";"top":31,"left":73,"text":"Lost Island - (VIP)";"top":84,"left":35,"text":"Mandarin - Próximo ao deserto (FREE)"',
        vip: "no",
        moves: "Tackle-20,Razor leaf-20,Vine whip-20,Headbutt-20,Leech seed-20,Solar beam-26,Sleep powder-28,Stun spore-26,Poison powder-24,", loots: "(1-1)//bulb--RARO,(1-5)//seed--80.0%,(1-5)//bottle of poison--80.0%,(1-1)//leaves--26.0%,(1-1)//bag of pollem--6.0%,", evoStone: "Leaf stone", boost: "10", booStone: "Leaf stone", skills: "Cut, Headbutt"
    },
    {
        name: "Ivysaur", number: 2, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Bulbasaur", evo1: "Venusaur", evo2: "no", npreEvo2: "no", npreEvo1: "1", nevo1: "3", nevo2: "no",
        maps: '"top":27,"left":43,"text":"Jungle Island - (VIP)";"top":15,"left":40,"text":"Green Island - (VIP)";"top":31,"left":73,"text":"Lost Island - (VIP)";"top":84,"left":35,"text":"Mandarin - Próximo ao deserto (FREE)"',
        vip: "no",
        moves: "Tackle-40,Razor leaf-40,Vine whip-40,Headbutt-40,Leech seed-40,Bullet seed-45,Solar beam-48,Giga drain-45,Sleep powder-44,Poison powder-40,", loots: "(1-1)//bulb--2.0%,(1-10)//seed--80.0%,(1-10)//bottle of poison--80.0%,(1-1)//Leaf stone--Raro,(1-1)//Venom stone--Raro,(1-1)//leaves--32.0%,(1-1)//bag of pollem--12.0%,", evoStone: "Leaf stone (x2)", boost: "7", booStone: "Leaf stone", skills: "Cut, Headbutt"
    },
    {
        name: "Venusaur", number: 3, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000", shiny: "yes", fast: "no", heavy: "yes", preEvo2: "Bulbasaur", preEvo1: "Ivysaur", evo1: "no", evo2: "no", npreEvo2: "1", npreEvo1: "2", nevo1: "no", nevo2: "no",
        maps: '"top":27,"left":43,"text":"Jungle Island - (VIP)";"top":15,"left":40,"text":"Green Island - (VIP)";"top":31,"left":73,"text":"Lost Island - (VIP)";"top":84,"left":35,"text":"Mandarin - Próximo ao deserto (FREE)";"top":3,"left":11,"text":"Outland north - saída da direita (VIP)"',
        vip: "no",
        moves: "Tackle-80,Razor leaf-80,Vine whip-80,Headbutt-80,Leech seed-80,Bullet seed-80,Solar beam-80,Giga drain-85,Sleep powder-80,Poison powder-80,Leaf storm-90,Thick fat-Passiva,", loots: "(1-1)//bulb--4.3% (38.3%),(1-21)//seed--80.0%,(1-21)//bottle of poison--80.0%,(1-1)//leaves--45.5% (91.0%),(1-1)//bag of pollem--25.5% (51.0%),(1-1)//Leaf stone--Raro,(1-1)//Venom stone--Raro,", evoStone: "", boost: "3", booStone: "Leaf stone", skills: "Cut, Ride, Headbutt"
    },
    {
        name: "Charmander", number: 4, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Charmeleon", evo2: "Charizard", npreEvo2: "no", npreEvo1: "no", nevo1: "5", nevo2: "6",
        maps: '"top":12,"left":31,"text":"Charizard Valley - (VIP)";"top":32,"left":37,"text":"Cinnabar Island - (VIP)"',
        vip: "yes",
        moves: "Scratch-20,Ember-20,Flamethrower-20,Fireball-24,Fire fang-22,Fire blast-26,Rage-28,", loots: "(1-1)//fire tail--Raro,(1-10)//essence of fire--80.0%,(1-1)//pot of lava--16.0%,", evoStone: "Fire stone", boost: "10", booStone: "Fire stone", skills: "Cut, Headbutt"
    },
    {
        name: "Charmeleon", number: 5, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Charmander", evo1: "Charizard", evo2: "no", npreEvo2: "no", npreEvo1: "4", nevo1: "6", nevo2: "no",
        maps: '"top":12,"left":31,"text":"Charizard Valley - (VIP)";"top":32,"left":37,"text":"Cinnabar Island - (VIP)"',
        vip: "yes",
        moves: "Scratch-40,Ember-40,Flamethrower-40,Fireball-40,Fire fang-40,Flame burst-45,Fire blast-48,Rage-40,", loots: "(1-1)//fire tail--2.0%,(1-20)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--22.0%,", evoStone: "Fire stone (x2)", boost: "7", booStone: "Fire stone", skills: "Cut, Headbutt"
    },
    {
        name: "Charizard", number: 6, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Wingeon", type1: "Fogo", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "Charmander", preEvo1: "Charmeleon", evo1: "no", evo2: "no", npreEvo2: "4", npreEvo1: "5", nevo1: "no", nevo2: "no",
        maps: '"top":6,"left":12,"text":"Outland South (saida norte) ou Outland East (Saída da esquerda) - (VIP)";"top":12,"left":31,"text":"Charizard Valley - (VIP)";"top":32,"left":37,"text":"Cinnabar Island - (VIP)"',
        vip: "yes",
        moves: "Ember-80,Flamethrower-80,Fireball-80,Fire fang-80,Flame burst-80,Fire blast-80,Air slash-83,Wing attack-85,Magma storm-90,Scary face-82,Ancient fury-87,", loots: "(1-1)//fire tail--4.3% (21.3%),(1-21)//essence of fire--80.0%,(1-21)//straw--80%,(1-1)//Fire stone--Raro,(1-1)//Feather stone--Raro,(1-1)//pot of lava--35.5% (71.0%),(1-1)//dragon tooth--Raro,", evoStone: "", boost: "3", booStone: "Fire stone", skills: "Fly, Cut, Headbutt"
    },
    {
        name: "Squirtle", number: 7, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Wartortle", evo2: "Blastoise", npreEvo2: "no", npreEvo1: "no", nevo1: "8", nevo2: "9",
        maps: '"top":16,"left":62,"text":"Shell Island - (VIP)";"top":23,"left":42,"text":"Tropical Island - (VIP)";"top":74,"left":52,"text":"Kinnow Island - (VIP)"',
        vip: "yes",
        moves: "Headbutt-20,Bubbles-20,Water gun-20,Waterball-24,Aqua tail-22,Hidro cannon-26,Harden-28,", loots: "(1-1)//Squirtle hull--Raro,(1-10)//water gem--80.0%,(1-1)//water pendant--21.0%,", evoStone: "Water stone", boost: "10", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Wartortle", number: 8, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Squirtle", evo1: "Blastoise", evo2: "no", npreEvo2: "no", npreEvo1: "7", nevo1: "9", nevo2: "no",
        maps: '"top":16,"left":62,"text":"Shell Island - (VIP)";"top":23,"left":42,"text":"Tropical Island - (VIP)";"top":74,"left":52,"text":"Kinnow Island - (VIP)"',
        vip: "yes",
        moves: "Headbutt-40,Bubbles-40,Water gun-40,Waterball-40,Aqua tail-40,Brine-45,Hidro cannon-48,Skull bash-45,Harden-40,", loots: "(1-1)//Squirtle hull--2.0%,(1-20)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--27.0%,", evoStone: "Water stone (x2)", boost: "7", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Blastoise", number: 9, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "Squirtle", preEvo1: "Wartortle", evo1: "no", evo2: "no", npreEvo2: "7", npreEvo1: "8", nevo1: "no", nevo2: "no",
        maps: '"top":1,"left":10,"text":"Outland North - Saída norte (VIP)";"top":16,"left":62,"text":"Shell Island - (VIP)";"top":23,"left":42,"text":"Tropical Island - (VIP)";"top":74,"left":52,"text":"Kinnow Island - (VIP)"',
        vip: "yes",
        moves: "Headbutt-80,Bubbles-80,Water gun-80,Waterball-80,Water pulse-80,Brine-80,Hidro cannon-80,Skull bash-85,Hydropump-90,Harden-80,", loots: "(1-1)//Squirtle hull--4.3% (68.0%),(1-20)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--40.5% (81.0%),", evoStone: "", boost: "3", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Caterpie", number: 10, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Nenhum", type1: "Inseto", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "500", priceNpc: "5", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Metapod", evo2: "Butterfree", npreEvo2: "no", npreEvo1: "no", nevo1: "11", nevo2: "12",
        maps: '"top":22,"left":36,"text":"Floresta de Viridian - (FREE)";"top":24,"left":52,"text":"Floresta de Vermilion - (FREE)";"top":23,"left":56,"text":"Floresta de Lavender - (FREE)";"top":82,"left":76,"text":"Murcott Island - (VIP)"',
        vip: "no",
        moves: "Headbutt-1,String shot-1,Bug bite-1,", loots: "(1-1)//butterfly wing--Raro,(1-5)//bug gosme--80.0%,(1-1)//pot of moss bug--15.3%,", evoStone: "Cocoon stone", boost: "30", booStone: "Cocoon stone", skills: ""
    },
    {
        name: "Metapod", number: 11, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Nenhum", type1: "Inseto", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "250", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Caterpie", evo1: "Butterfree", evo2: "no", npreEvo2: "no", npreEvo1: "10", nevo1: "12", nevo2: "no",
        maps: '"top":22,"left":36,"text":"Floresta de Viridian - (FREE)";"top":24,"left":52,"text":"Floresta de Vermilion - (FREE)";"top":23,"left":56,"text":"Floresta de Lavender - (FREE)";"top":82,"left":76,"text":"Murcott Island - (VIP)"',
        vip: "no", moves: "String shot-10,Headbutt-10,Harden-10,Bug bite-10,", loots: "(1-1)//butterfly wing--2.1%,(1-5)//bug gosme--80.0%,(1-1)//pot of moss bug--19.5%,", evoStone: "Cocoon stone (x2)", boost: "15", booStone: "Cocoon stone", skills: ""
    },
    {
        name: "Butterfree", number: 12, level: 30, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Wingeon", type1: "Inseto", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "2000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "Caterpie", preEvo1: "Metapod", evo1: "no", evo2: "no", npreEvo2: "10", npreEvo1: "11", nevo1: "no", nevo2: "no",
        maps: '"top":23,"left":37,"text":"Floresta de Viridian - (FREE)";"top":31,"left":44,"text":"Ilha a direita de cinnabar - (VIP)";"top":86,"left":44,"text":"Floresta de Mandarin - (FREE)";"top":84,"left":73,"text":"Murcott Island - (VIP)"',
        vip: "no", moves: "Super sonic-30,Silver wind-30,Whirlwind-30,Confusion-30,Psybeam-32,Air cutter-34,Sleep powder-30,Safeguard-36,Poison powder-30,", loots: "(1-1)//butterfly wing--4.3%,(1-6)//straw--80.0%,(1-6)//bug gosme--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--24.0%,(1-1)//bag of pollem--9.0%,", evoStone: "", boost: "10", booStone: "Cocoon stone", skills: ""
    },
    {
        name: "Weedle", number: 13, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Malefic", type1: "Inseto", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "500", priceNpc: "5", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Kakuna", evo2: "Beedrill", npreEvo2: "no", npreEvo1: "no", nevo1: "14", nevo2: "15",
        maps: '"top":19,"left":45,"text":"Esquerda de Cerulean - Próximo ao pântano - (FREE)";"top":23,"left":56,"text":"Floresta a direita de Saffron (FREE)";"top":23,"left":35,"text":"Floresta de Viridian (FREE)"',
        vip: "no",
        moves: "Horn attack-1,String shot-1,Poison sting-1,", loots: "(1-1)//bee sting--Raro,(1-3)//bug gosme--80.0%,(1-3)//bottle of poison--80.0%,(1-1)//pot of moss bug--15.3%,", evoStone: "", boost: "Cocoon stone", booStone: "30", skills: "Cocoon stone"
    },
    {
        name: "Kakuna", number: 14, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Malefic", type1: "Inseto", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "250", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Weedle", evo1: "Beedrill", evo2: "no", npreEvo2: "no", npreEvo1: "13", nevo1: "15", nevo2: "no",
        maps: '"top":19,"left":45,"text":"Esquerda de Cerulean - Próximo ao pântano - (FREE)";"top":23,"left":56,"text":"Floresta a direita de Saffron (FREE)";"top":23,"left":35,"text":"Floresta de Viridian (FREE)"',
        vip: "no",
        moves: "String shot-10,Headbutt-10,Harden-10,Bug bite-10,", loots: "(1-1)//bee sting--2.1%,(1-4)//bug gosme--80.0%,(1-4)//bottle of poison--80.0%,(1-1)//pot of moss bug--19.5%,", evoStone: "Cocoon stone (x2)", boost: "15", booStone: "Cocoon stone", skills: ""
    },
    {
        name: "Beedrill", number: 15, level: 30, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Malefic", type1: "Inseto", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "2000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "Weedle", preEvo1: "Kakuna", evo1: "no", evo2: "no", npreEvo2: "13", npreEvo1: "14", nevo1: "no", nevo2: "no",
        maps: '"top":19,"left":45,"text":"Esquerda de Cerulean - Próximo ao pântano - (FREE)";"top":23,"left":35,"text":"Floresta de Viridian - (FREE)"',
        vip: "no",
        moves: "String shot-30,Poison jab-30,Poison sting-30,Fury cutter-35,Pin missile-35,Toxic spikes-32,Rage-30,Strafe-38,Evasion-Passiva,", loots: "(1-1)//bee sting--4.3%,(1-6)//bug gosme--80.0%,(1-6)//bottle of poison--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//Venom stone--Raro,(1-1)//pot of moss bug--22.5%,", evoStone: "", boost: "10", booStone: "Cocoon stone", skills: "Cut"
    },
    {
        name: "Pidgey", number: 16, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Wingeon", clan2: "Gardestrike", type1: "Voador", type2: "Normal", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "500", priceNpc: "5", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Pidgeotto", evo2: "Pidgeot", npreEvo2: "no", npreEvo1: "no", nevo1: "17", nevo2: "18",
        maps: '"top":25,"left":48,"text":"Floresta de Celadon - (FREE)";"top":21,"left":54,"text":"Floresta de Cerulean - (FREE)";"top":23,"left":35,"text":"Floresta de Viridian - (FREE)"',
        vip: "no",
        moves: "Quick attack-1,Sand attack-1,Gust-3,Drill peck-6,", loots: "(1-1)//colored feather--Raro,(1-4)//straw--80%,(1-4)//rubber ball--80.0%,(1-1)//feather--1.5%,", evoStone: "Feather stone", boost: "30", booStone: "Feather stone", skills: ""
    },
    {
        name: "Pidgeotto", number: 17, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Wingeon", clan2: "Gardestrike", type1: "Voador", type2: "Normal", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Pidgey", evo1: "Pidgeot", evo2: "no", npreEvo2: "no", npreEvo1: "16", nevo1: "18", nevo2: "no",
        maps: '"top":14,"left":49,"text":"Whirlwind Island - (VIP)";"top":14,"left":55,"text":"Hurricane Island - (VIP)";"top":20,"left":58,"text":"Floresta de Cerulean - (FREE)";"top":57,"left":34,"text":"Floresta de Shamouti - (VIP)";"top":23,"left":35,"text":"Floresta de Viridian - (FREE)"',
        vip: "no",
        moves: "Quick attack-20,Sand attack-20,Gust-22,Drill peck-20,Wing attack-24,Aeroblast-26,", loots: "(1-1)//colored feather--1.1%,(1-5)//straw--80%,(1-5)//rubber ball--80.0%,(1-1)//Feather stone--Raro,(1-1)//Heart stone--Raro,(1-1)//feather--6.0%,", evoStone: "Feather stone (x2)", boost: "10", booStone: "Feather stone", skills: ""
    },
    {
        name: "Pidgeot", number: 18, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Wingeon", clan2: "Gardestrike", type1: "Voador", type2: "Normal", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "11500", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "Pidgey", preEvo1: "Pidgeotto", evo1: "no", evo2: "no", npreEvo2: "16", npreEvo1: "17", nevo1: "no", nevo2: "no",
        maps: '"top":14,"left":49,"text":"Whirlwind Island (VIP)";"top":14,"left":55,"text":"Hurricane Island - (VIP)";"top":20,"left":58,"text":"Floresta de Cerulean - (FREE)";"top":57,"left":34,"text":"Floresta de Shamouti - (VIP)";"top":9,"left":14,"text":"Outland South - Saida a direita (VIP)"',
        vip: "no", moves: "Quick attack-80,Sand attack-80,Whirlwind-80,Drill peck-80,Wing attack-82,Aeroblast-84,Hurricane-90,Agility-80,Roost-85,", loots: "(1-1)//colored feather--4.3% (29.8%),(1-19)//straw--80%,(1-19)//rubber ball--80.0%,(1-1)//Feather stone--Raro,(1-1)//Heart stone--Raro,(1-1)//bird beak--22.6% (90.4%),(1-1)//feather--22.5% (90.0%),", evoStone: "", boost: "3", booStone: "Feather stone", skills: "Fly"
    },
    {
        name: "Rattata", number: 19, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "500", priceNpc: "5", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Raticate", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "20", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-1,Bite-1,Scratch-1,Super fang-10,", loots: "(1-1)//rat tail--Raro,(1-5)//rubber ball--80.0%,(1-1)//bitten apple--25.3%,", evoStone: "Heart stone", boost: "30", booStone: "Heart stone", skills: ""
    },
    {
        name: "Raticate", number: 20, level: 30, ball1: "Greatball", ball2: "Superball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "2000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Rattata", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "19", nevo1: "no", nevo2: "no",
        maps: '"top":21,"left":36,"text":"subsolo proximo a saida sul de pewter - (FREE)";"top":24,"left":49,"text":"subsolo entre saffron e celadon - (FREE)";"top":20,"left":54,"text":"subsolo a esquerda de cerulean - (FREE)";"top":33,"left":54,"text":"subsolo em fuchsia - (FREE)";"top":56,"left":36,"text":"subsolo em shamouti - (FREE)"', vip: "no", moves: "Quick attack-30,Bite-30,Scratch-30,Pursuit-30,Super fang-30,Scary face-32,Fury-Passiva,", loots: "(1-1)//rat tail--4.3%,(1-13)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//bitten apple--32.5%,", evoStone: "", boost: "10", booStone: "Heart stone", skills: "Dig, Cut, Headbutt"
    },
    {
        name: "Spearow", number: 21, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Wingeon", clan2: "Gardestrike", type1: "Voador", type2: "Normal", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "100", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Fearow", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "22", nevo2: "no",
        maps: 'no', vip: "no", moves: "Peck-10,Sand attack-10,Wing attack-12,Drill peck-10,Agility-10,", loots: "(1-1)//red wing--Raro,(1-3)//straw--80%,(1-3)//rubber ball--80%,(1-1)//feather--28.0%,", evoStone: "Feather stone", boost: "20", booStone: "Feather stone", skills: ""
    },
    {
        name: "Fearow", number: 22, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Wingeon", clan2: "Gardestrike", type1: "Voador", type2: "Normal", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "5100", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Spearow", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "21", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Peck-50,Sand attack-50,Drill peck-50,Gust-52,Air cutter-50,Wing attack-52,Aerial ace-50,Agility-50,", loots: "(1-1)//red wing--4.3%,(1-13)//straw--80%,(1-13)//rubber ball--80%,(1-1)//Feather stone--Raro,(1-1)//bird beak--15.1%,(1-1)//feather--15.0%,", evoStone: "", boost: "4", booStone: "Feather stone", skills: "Fly"
    },
    {
        name: "Ekans", number: 23, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "300", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Arbok", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "24", nevo2: "no",
        maps: 'no', vip: "no", moves: "Bite-10,Poison fang-10,Gunk shot-12,Acid-15,Fear-18,", loots: "(1-1)//snake tail--1.8%,(1-8)//bottle of poison--80%,(1-1)//tooth--19.5%,", evoStone: "Venom stone", boost: "15", booStone: "Venom stone", skills: "Dig, Headbutt"
    },
    {
        name: "Arbok", number: 24, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Ekans", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "23", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Bite-40,Poison fang-40,Gunk shot-40,Wrap-40,Pin missile-43,Acid-40,Iron tail-45,Poison jab-40,", loots: "(1-1)//snake tail--4.3%,(1-18)//bottle of poison--80%,(1-1)//Venom stone--Raro,(1-1)//tooth--25.5%,", evoStone: "", boost: "8", booStone: "Venom stone", skills: "Dig, Headbutt"
    },
    {
        name: "Pikachu", number: 25, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Pichu", evo1: "Raichu", evo2: "no", npreEvo2: "no", npreEvo1: "172", nevo1: "26", nevo2: "no",
        maps: '"top":14,"left":77,"text":"Lightstorm Island - (VIP)";"top":66,"left":27,"text":"Zapdos Island - (VIP)"',
        vip: "yes", moves: "Quick attack-50,Thunder shock-50,Thunder bolt-50,Shockwave-50,Thunder punch-50,Thunder-55,Electric storm-58,Agility-55,Electric charge-Passiva,", loots: "(1-1)//electric rat tail--2.0%,(1-20)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--17.0%,", evoStone: "Thunder stone (x2)", boost: "7", booStone: "Thunder stone", skills: "Light, Headbutt"
    },
    {
        name: "Raichu", number: 26, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "Pichu", preEvo1: "Pikachu", evo1: "no", evo2: "no", npreEvo2: "172", npreEvo1: "25", nevo1: "no", nevo2: "no",
        maps: '"top":14,"left":77,"text":"Lightstorm Island - (VIP)";"top":66,"left":27,"text":"Zapdos Island - (VIP)";"top":2,"left":9,"text":"Outland North - Saida a esquerda (subsolo) (VIP)"',
        vip: "yes", moves: "Mega quick-80,Thunder shock-80,Thunder bolt-80,Thunder wave-80,Thunder punch-80,Iron tail-80,Body slam-85,Thunder-80,Electric storm-90,Flash-80,Electric charge-Passiva,", loots: "(1-1)//electric rat tail--4.3% (59.5%),(1-43)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--30.5% (61.0%),", evoStone: "", boost: "3", booStone: "Thunder stone", skills: "Light, Headbutt"
    },
    {
        name: "Sandshrew", number: 27, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "1000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Sandslash", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "28", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-20,Mud shot-20,Scratch-20,Rollout-25,Bulldoze-25,", loots: "(1-1)//armadillo claw--1.3%,(1-10)//earth ball--80.0%,(1-1)//sandbag--11.0%,", evoStone: "Earth stone (x2)", boost: "10", booStone: "Earth stone", skills: "Dig, Rock Smash, Cut, Headbutt"
    },
    {
        name: "Sandslash", number: 28, level: 70, ball1: "Superball", ball2: "Ultraball", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "100000", priceNpc: "11000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Sandshrew", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "27", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-70,Mud shot-70,Scratch-70,Rollout-70,Bulldoze-70,Fury cutter-75,Earth power-73,Earthquake-76,Defense curl-70,", loots: "(1-1)//armadillo claw--4.3% (51.0%),(1-33)//earth ball--80.0%,(1-1)//Earth stone--Raro,(1-1)//sandbag--24.5% (98.0%),", evoStone: "", boost: "", booStone: "", skills: "Dig, Rock Smash, Cut, Headbutt"
    },
    {
        name: "NidoranFe", number: 29, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "125", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Nidorina", evo2: "Nidoqueen", npreEvo2: "no", npreEvo1: "no", nevo1: "30", nevo2: "31",
        maps: 'no', vip: "no", moves: "Quick attack-10,Bite-10,Horn attack-12,Poison sting-10,Poison fang-15,", loots: "(1-1)//female ear--Raro,(1-6)//bottle of poison--80%,(1-1)//sandbag--8.0%,", evoStone: "Venom stone", boost: "20", booStone: "Venom stone", skills: "Dig, Headbutt"
    },
    {
        name: "Nidorina", number: 30, level: 30, ball1: "Greatball", ball2: "Superball", clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "10000", priceNpc: "2250", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "NidoranFe", evo1: "Nidoqueen", evo2: "no", npreEvo2: "no", npreEvo1: "29", nevo1: "31", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-30,Horn attack-30,Poison jab-30,Earth power-30,Dig-32,Cross poison-32,Agility-30,", loots: "(1-1)//female ear--1.9%,(1-16)//bottle of poison--80%,(1-1)//Venom stone--Raro,(1-1)//sandbag--14.0%,", evoStone: "Venom stone,Earth stone", boost: "9", booStone: "Venom stone", skills: "Dig, Headbutt"
    },
    {
        name: "Nidoqueen", number: 31, level: 70, ball1: "Saffariball", ball2: "nenhuma", clan1: "Malefic", clan2: "Orebound", type1: "Venenoso", type2: "Terra", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "100000", priceNpc: "12250", shiny: "no", fast: "no", heavy: "no", preEvo2: "NidoranFe", preEvo1: "Nidorina", evo1: "no", evo2: "no", npreEvo2: "29", npreEvo1: "30", nevo1: "no", nevo2: "no",
        maps: '"top":4,"left":17,"text":"Outland East - Saida Norte";"top":30,"left":51,"text":"Fuchsia - Saffari (subsolo)"',
        vip: "yes",
        moves: "Quick attack-70,Horn attack-70,Sand tomb-70,Poison jab-70,Earth power-70,Dig-72,Cross poison-72,Earthquake-76,Agility-70,", loots: "(1-1)//female ear--4.3% (55.3%),(1-16)//earth ball--80%,(1-16)//bottle of poison--80%,(1-1)//Venom stone--Raro,(1-1)//sandbag--24.5% (98.0%),", evoStone: "", boost: "4", booStone: "Venom stone", skills: "Dig, Headbutt, Rock smash"
    },
    {
        name: "NidoranMa", number: 32, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "125", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Nidorino", evo2: "Nidoking", npreEvo2: "no", npreEvo1: "no", nevo1: "33", nevo2: "34",
        maps: 'no', vip: "no", moves: "Quick attack-10,Bite-10,Horn attack-12,Poison sting-10,Poison fang-15,", loots: "(1-1)//male ear--Raro,(1-6)//bottle of poison--80.0%,(1-1)//sandbag--8.0%,", evoStone: "Venom stone", boost: "20", booStone: "Venom stone", skills: "Dig, Headbutt"
    },
    {
        name: "Nidorino", number: 33, level: 30, ball1: "Greatball", ball2: "Superball", clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "10000", priceNpc: "2250", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "NidoranMa", evo1: "Nidoking", evo2: "no", npreEvo2: "no", npreEvo1: "32", nevo1: "34", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-30,Horn attack-30,Poison jab-30,Poison fang-30,Dig-32,Cross poison-32,Rage-30,", loots: "(1-1)//male ear--1.9%,(1-6)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,(1-1)//sandbag--14.0%,", evoStone: "Venom stone,Earth stone", boost: "9", booStone: "Venom stone", skills: "Dig, Headbutt"
    },
    {
        name: "Nidoking", number: 34, level: 70, ball1: "Saffariball", ball2: "nenhuma", clan1: "Malefic", clan2: "Orebound", type1: "Venenoso", type2: "Terra", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "100000", priceNpc: "12250", shiny: "yes", fast: "no", heavy: "no", preEvo2: "NidoranMa", preEvo1: "Nidorino", evo1: "no", evo2: "no", npreEvo2: "32", npreEvo1: "33", nevo1: "no", nevo2: "no",
        maps: '"top":4,"left":17,"text":"Outland East - Saida Norte";"top":30,"left":51,"text":"Fuchsia - Saffari (subsolo)"',
        vip: "yes",
        moves: "Quick attack-70,Horn attack-70,Poison jab-70,Poison fang-70,Dig-72,Sludge wave-74,Cross poison-72,Fear-76,Rage-70,", loots: "(1-1)//male ear--4.3% (55.3%),(1-16)//earth ball--80.0%,(1-16)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,(1-1)//Earth stone--Raro,(1-1)//sandbag--24.5% (98.0%),", evoStone: "", boost: "4", booStone: "Venom stone", skills: "Dig, Headbutt, Rock smash"
    },
    {
        name: "Clefairy", number: 35, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Psycraft", clan2: "Nenhum", type1: "Fada", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Cleffa", evo1: "Clefable", evo2: "no", npreEvo2: "no", npreEvo1: "173", nevo1: "36", nevo2: "no",
        maps: 'no', vip: "no", moves: "Doubleslap-40,Body slam-44,Sing-40,Multi slap-40,Great love-47,Healarea-45,Metroname-40,Defense curl-40,", loots: "(1-1)//topknot--2.6%,(1-20)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//comb--12.5%,", evoStone: "Hearth stone (x2)", boost: "7", booStone: "Hearth stone", skills: ""
    },
    {
        name: "Clefable", number: 36, level: 70, ball1: "Superball", ball2: "Ultraball", clan1: "Psycraft", clan2: "Nenhum", type1: "Fada", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "100000", priceNpc: "18000", shiny: "no", fast: "no", heavy: "no", preEvo2: "Cleffa", preEvo1: "Clefairy", evo1: "no", evo2: "no", npreEvo2: "173", npreEvo1: "35", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Doubleslap-70,Multi slap-70,Dazzling gleam-74,Great love-77,Moonblast-76,Healarea-75,Metroname-70,Defense curl-70,", loots: "(1-1)//topknot--4.3% (29.8%),(1-33)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//comb--20.0% (20.0%),", evoStone: "", boost: "4", booStone: "Hearth stone", skills: ""
    },
    {
        name: "Vulpix", number: 37, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "1000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Ninetales", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "38", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-20,Iron tail-20,Ember-20,Flamethrower-22,Flame circle-24,Fire blast-28,", loots: "(1-1)//fox tail--Raro,(1-8)//essence of fire--80.0%,(1-1)//comb--5.0%,(1-1)//fur--4.5%,", evoStone: "Fire stone (x2)", boost: "15", booStone: "Fire stone", skills: "Dig"
    },
    {
        name: "Ninetales", number: 38, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "11000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Vulpix", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "37", nevo1: "no", nevo2: "no",
        maps: '"top":32,"left":37,"text":"Cinnabar Island - Dentro da montanha a direita (Próximo ao respawn de Charizard)"',
        vip: "yes",
        moves: "Quick attack-80,Iron tail-80,Ember-80,Flamethrower-80,Flame wheel-80,Fireball-80,Fire spin-80,Fire blast-84,Inferno-90,Safeguard-90,", loots: "(1-1)//fox tail--2.0%,(1-33)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//comb--20.0%,(1-1)//fur--19.5%,", evoStone: "", boost: "3", booStone: "Fire stone", skills: "Dig, Ride"
    },
    {
        name: "Jigglypuff", number: 39, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Psycraft", clan2: "Gardestrike", type1: "Fada", type2: "Normal", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Igglybuff", evo1: "Wigglytuff", evo2: "no", npreEvo2: "no", npreEvo1: "174", nevo1: "40", nevo2: "no",
        maps: 'no', vip: "no", moves: "Doubleslap-40,Body slam-44,Sing-40,Hyper voice-40,Multi slap-40,Echoed voice-45,Softboiled-45,Charm-40,Melody-Passiva,", loots: "(1-1)//microphone--Raro,(1-20)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//comb--12.5%,", evoStone: "Heart stone (x2)", boost: "7", booStone: "Heart stone", skills: ""
    },
    {
        name: "Wigglytuff", number: 40, level: 70, ball1: "Superball", ball2: "Ultraball", clan1: "Psycraft", clan2: "Gardestrike", type1: "Fada", type2: "Normal", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "100000", priceNpc: "18000", shiny: "no", fast: "no", heavy: "no", preEvo2: "Igglybuff", preEvo1: "Jigglypuff", evo1: "no", evo2: "no", npreEvo2: "174", npreEvo1: "39", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Doubleslap-70,Body slam-74,Sing-70,Hyper voice-70,Multi slap-70,Rock n roll-74,Echoed voice-75,Softboiled-75,Charm-70,Melody-Passiva,", loots: "(1-1)//microphone--4.0% (28.0%),(1-33)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//comb--20.0% (20.0%),", evoStone: "", boost: "4", booStone: "Heart stone", skills: ""
    },
    {
        name: "Zubat", number: 41, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Malefic", clan2: "Wingeon", type1: "Venenoso", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "120", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Golbat", evo2: "Crobat", npreEvo2: "no", npreEvo1: "no", nevo1: "42", nevo2: "169",
        maps: 'no', vip: "no", moves: "Super sonic-10,Bite-10,Poison fang-10,Absorb-12,Toxic-15,Lifesteal-Passiva,", loots: "(1-1)//bat wing--1.8%,(1-4)//bottle of poison--80%,(1-4)//straw--80.0%,(1-1)//tooth--18.0%,", evoStone: "Venom stone", boost: "20", booStone: "Venom stone", skills: ""
    },
    {
        name: "Golbat", number: 42, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Malefic", clan2: "Wingeon", type1: "Venenoso", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Zubat", evo1: "Crobat", evo2: "no", npreEvo2: "no", npreEvo1: "41", nevo1: "169", nevo2: "no",
        maps: '"top":60,"left":38,"text":"subsolo em shamouti no caminho pro crobat - (FREE)";"top":19,"left":40,"text":"subsolo mt moon - (FREE)";"top":25,"left":48,"text":"subsolo entre saffron e celadon - (FREE)"', vip: "no", moves: "Super sonic-40,Bite-40,Poison fang-40,Toxic-40,Gust-42,Wing attack-40,Air cutter-44,Lifesteal-Passiva,", loots: "(1-1)//bat wing--4.3%,(1-9)//bottle of poison--80%,(1-9)//straw--80.0%,(1-1)//Venom stone--Raro,(1-1)//tooth--25.5%,", evoStone: "Ancient stone,Venom stone", boost: "8", booStone: "Venom stone", skills: ""
    },
    {
        name: "Oddish", number: 43, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "500", priceNpc: "5", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Gloom", evo2: "Vileplume, Bellosson", npreEvo2: "no", npreEvo1: "no", nevo1: "44", nevo2: "45,182",
        maps: 'no', vip: "no", moves: "Absorb-7,Acid-1,Leech seed-1,Sleep powder-9,Stun spore-8,Poison powder-8,Spores reaction-Passiva,Mega drain-Passiva,", loots: "(1-1)//strange flower--Raro,(1-3)//seed--80%,(1-3)//bottle of poison--80.0%,(1-1)//bag of pollem--1.5%,", evoStone: "Leaf stone", boost: "30", booStone: "Leaf stone", skills: "Cut"
    },
    {
        name: "Gloom", number: 44, level: 30, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "2250", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Oddish", evo1: "Vileplume, Bellosson", evo2: "no", npreEvo2: "no", npreEvo1: "43", nevo1: "45,182", nevo2: "no",
        maps: 'no', vip: "no", moves: "Absorb-30,Leech seed-30,Acid-30,Poison bomb-33,Poison gas-37,Sleep powder-30,Stun spore-30,Poison powder-30,Spores reaction-Passiva,Mega drain-Passiva,", loots: "(1-1)//strange flower--2.1%,(1-6)//seed--80%,(1-6)//bottle of poison--80.0%,(1-1)//Leaf stone--Raro,(1-1)//Venom stone--Raro,(1-1)//bag of pollem--7.5%,", evoStone: "Venom stone (2x)=Vileplume ou Leaf stone (2x)=Bellossom", boost: "10", booStone: "Leaf stone", skills: "Cut"
    },
    {
        name: "Vileplume", number: 45, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "12000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "Oddish", preEvo1: "Gloom", evo1: "no", evo2: "no", npreEvo2: "43", npreEvo1: "44", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Absorb-50,Leech seed-50,Acid-50,Poison bomb-50,Poison gas-50,Petal dance-55,Solar beam-60,Sleep powder-50,Stun spore-50,Poison powder-50,Spores reaction-Passiva,Mega drain-Passiva,", loots: "(1-1)//strange flower--4.3%,(1-13)//seed--80%,(1-13)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,(1-1)//bag of pollem--15.0%,", evoStone: "", boost: "4", booStone: "Leaf stone", skills: "Cut"
    },
    {
        name: "Paras", number: 46, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Nenhum", type1: "Inseto", type2: "Grama", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "500", priceNpc: "60", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Parasect", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "47", nevo2: "no",
        maps: 'no', vip: "no", moves: "Scratch-1,Poison sting-1,Slash-1,Stun spore-6,Poison powder-4,Sleep powder-8,", loots: "(1-1)//mushroom--1.4%,(1-1)//bug gosme--80%,(1-1)//seed--80%,", evoStone: "Cocoon Stone (x2)", boost: "30", booStone: "Cocoon Stone", skills: "Cut, Dig"
    },
    {
        name: "Parasect", number: 47, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Nenhum", type1: "Inseto", type2: "Grama", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "7250", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Paras", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "46", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Absorb-50,Leech seed-55,Poison sting-50,Slash-50,Poison bomb-50,Stun spore-50,Poison powder-50,Sleep powder-50,Fury cutter-56,X scissor-58,Mega drain-Passiva,Spores reaction-Passiva,", loots: "(1-1)//mushroom--4.3%,(1-13)//bug gosme--80%,(1-13)//seed--80%,(1-1)//Cocoon stone--Raro,(1-1)//Leaf stone--Raro,(1-1)//bag of pollem--15.0%,", evoStone: "", boost: "5", booStone: "Cocoon Stone", skills: "Dig, Cut"
    },
    {
        name: "Venonat", number: 48, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Malefic", type1: "Inseto", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "1500", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Venomoth", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "49", nevo2: "no",
        maps: 'no', vip: "no", moves: "Super sonic-20,Psybeam-20,Silver wind-20,Confusion-20,Psychic-26,Sleep powder-28,Poison powder-22,Stun spore-24,", loots: "(1-1)//bug antenna--4.0%,(1-5)//bug gosme--80%,(1-5)//bottle of poison--80.0%,(1-1)//bag of pollem--6.0%,", evoStone: "Venom stone,Cocoon stone", boost: "10", booStone: "Venom stone", skills: "Headbutt"
    },
    {
        name: "Venomoth", number: 49, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Malefic", type1: "Inseto", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "7250", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Venonat", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "48", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Super sonic-50,Psybeam-50,Silver wind-50,Confusion-56,Psychic-50,Signal beam-56,Bug buzz-54,Sleep powder-50,Poison powder-50,", loots: "(1-1)//bug venom--4.3%,(1-13)//bug gosme--80%,(1-13)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,(1-1)//Cocoon stone--Raro,(1-1)//bag of pollem--15.0%,", evoStone: "", boost: "5", booStone: "Venom stone", skills: "Fly"
    },
    {
        name: "Diglett", number: 50, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "200", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Dugtrio", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "51", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-10,Slash-10,Mud shot-10,Mud slap-12,Earth power-15,", loots: "(1-1)//piece of diglett--1.8%,(1-5)//earth ball--80.0%,(1-1)//sandbag--8.0%,", evoStone: "Earth Stone", boost: "20", booStone: "Earth Stone", skills: "Dig, Rock Smash, Headbutt"
    },
    {
        name: "Dugtrio", number: 51, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Diglett", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "50", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-40,Slash-40,Mud shot-40,Mud slap-40,Earth power-40,Dig-42,Earthquake-47,Rage-45,", loots: "(1-1)//piece of diglett--4.3%,(1-18)//earth ball--80.0%,(1-1)//Earth stone--Raro,(1-1)//sandbag--15.5%,", evoStone: "", boost: "8", booStone: "Earth stone", skills: "Dig, Rock Smash, Headbutt"
    },
    {
        name: "Meowth", number: 52, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "300", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Persian", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "53", nevo2: "no",
        maps: 'no', vip: "no", moves: "Slash-20,Scratch-20,Bite-20,Night slash-20,Pay day-28,Fury-Passiva,", loots: "(1-1)//wool ball--10.3%,(1-1)//luck medallion--Raro,(1-8)//rubber ball--80.0%,(1-1)//nail--14.5%,", evoStone: "Heart stone", boost: "15", booStone: "Heart stone", skills: "Cut, Dig"
    },
    {
        name: "Persian", number: 53, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "3000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Meowth", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "52", nevo1: "no", nevo2: "no",
        maps: '"top":24,"left":73,"text":"Desert Island - Piramide ao Norte (entre as 3 maiores Piramides)";"top":14,"left":31,"text":"Charizard Valley - Parte externa"',
        vip: "yes",
        moves: "Slash-50,Scratch-50,Bite-50,Night slash-50,Pay day-56,Fear-60,Torment-55,Fury-Passiva,", loots: "(1-1)//wool ball--24.3%,(1-15)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//nail--19.0%,", evoStone: "", boost: "9", booStone: "Heart stone", skills: "Cut, Dig"
    },
    {
        name: "Psyduck", number: 54, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "1500", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Golduck", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "55", nevo2: "no",
        maps: 'no', vip: "no", moves: "Water gun-24,Aqua tail-20,Waterball-24,Confusion-28,Headbutt-20,Stunning confusion-Passiva,", loots: "(1-1)//Psyduck mug--1.5%,(1-10)//water gem--80.0%,(1-1)//water pendant--21.0%,", evoStone: "Water stone,Enigma stone", boost: "10", booStone: "Water stone", skills: "Headbutt"
    },
    {
        name: "Golduck", number: 55, level: 70, ball1: "Superball", ball2: "Ultraball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "200000", priceNpc: "11500", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Psyduck", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "54", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Water gun-70,Fury swipes-70,Water pulse-70,Confusion-70,Psychic-70,Aqua jet-70,Hydropump-78,Stunning confusion-Passiva,", loots: "(1-1)//karate duck--8.3%,(1-28)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--31.5%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone: "", boost: "4", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Mankey", number: 56, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "300", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Primeape", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "57", nevo2: "no",
        maps: 'no', vip: "no", moves: "Scratch-10,Triple kick-10,Karate chop-13,Cross chop-15,Rage-17,", loots: "(1-1)//iron bracelet--1.3%,(1-8)//band aid--80.0%,(1-1)//fur--5.5%,", evoStone: "Punch stone", boost: "15", booStone: "Punch stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Primeape", number: 57, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "7250", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Mankey", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "56", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Scratch-50,Triple kick-50,Karate chop-50,Cross chop-54,Mega punch-56,Mega kick-58,Close combat-50,Rage-50,", loots: "(1-1)//iron bracelet--4.3%,(1-8)//band aid--80.0%,(1-1)//Punch stone--Raro,(1-1)//fur--16.0%,", evoStone: "", boost: "5", booStone: "Punch stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Growlithe", number: 58, level: 30, ball1: "Pokeball", ball2: "Greatball", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3500", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Arcanine", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "59", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Roar-33,Bite-30,Ember-30,Flamethrower-30,Fireball-32,Fire fang-30,Heat wave-34,War dog-36,", loots: "(1-1)//giant piece of fur--1.3%,(1-13)//essence of fire--80%,(1-1)//fur--8.5%,(1-1)//pot of lava--7.5%,", evoStone: "Crystal stone,Fire stone", boost: "10", booStone: "Fire stone", skills: "Dig, Headbutt"
    },
    {
        name: "Arcanine", number: 59, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "500000", priceNpc: "58500", shiny: "yes", fast: "yes", heavy: "yes", preEvo2: "no", preEvo1: "Growlithe", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "58", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Roar-110,Bite-100,Ember-100,Flamethrower-100,Fireball-100,Fire fang-100,Extremespeed-100,Fire blast-102,Heat wave-104,War dog-106,", loots: "(1-1)//giant piece of fur--8.5%,(1-40)//essence of fire--80%,(1-1)//Fire stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//fur--25.0% (50.0%),(1-1)//pot of lava--24.0% (48.0%),", evoStone: "", boost: "3", booStone: "Fire stone", skills: "Dig, Headbutt, Ride"
    },
    {
        name: "Poliwag", number: 60, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "80", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Poliwhirl", evo2: "Poliwrath, Politoed", npreEvo2: "no", npreEvo1: "no", nevo1: "61", nevo2: "62,186",
        maps: 'no', vip: "no", moves: "Doubleslap-1,Bubbles-1,Water gun-6,Aqua tail-3,Hypnosis-8,", loots: "(1-1)//strange thing--Raro,(1-3)//water gem--80%,(1-1)//water pendant--16.5%,", evoStone: "Water stone", boost: "30", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Poliwhirl", number: 61, level: 30, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Poliwag", evo1: "Poliwrath, Politoed", evo2: "no", npreEvo2: "no", npreEvo1: "60", nevo1: "62,186", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Mud shot-30,Doubleslap-30,Bubblebeam-30,Water gun-30,Ice beam-30,Brick break-32,Dynamicpunch-40,Hypnosis-30,", loots: "(1-1)//strange thing--1.6%,(1-13)//water gem--80%,(1-1)//Water stone--Raro,(1-1)//water pendant--22.5%,", evoStone: "Punch stone (x2)=Poliwrath ou Water stone (x2)=Politoed", boost: "10", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Poliwrath", number: 62, level: 70, ball1: "Superball", ball2: "Ultraball", clan1: "Seavell", clan2: "Gardestrike", type1: "Água", type2: "Lutador", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "100000", priceNpc: "13000", shiny: "no", fast: "no", heavy: "no", preEvo2: "Poliwag", preEvo1: "Poliwhirl", evo1: "no", evo2: "no", npreEvo2: "60", npreEvo1: "61", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Mud shot-70,Doubleslap-70,Bubblebeam-70,Water gun-70,Ice beam-70,Brick break-72,Dynamicpunch-77,Focus blast-78,Hypnosis-70,", loots: "(1-1)//strange thing--8.3%,(1-16)//water gem--80%,(1-16)//band aid--80.0%,(1-1)//Punch stone--Raro,(1-1)//water pendant--34.5%,", evoStone: "", boost: "4", booStone: "Water stone", skills: "Rock Smash, Surf, Headbutt"
    },
    {
        name: "Abra", number: 63, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "800", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Kadabra", evo2: "Alakazam", npreEvo2: "no", npreEvo1: "no", nevo1: "64", nevo2: "65",
        maps: '"top":25,"left":75,"text":"Desert Island - (VIP)";"top":87,"left":31,"text":"Deserto Mandarin - (FREE)"',
        vip: "no",
        moves: "Restore-15,Psy pulse-10,Psychic-20,Calm mind-13,", loots: "(1-1)//psychic spoon--Raro,(1-8)//enchanted gem--80.0%,(1-1)//future orb--14.5%,", evoStone: "Enigma stone", boost: "15", booStone: "Enigma stone", skills: "Teleport, Light, Blink"
    },
    {
        name: "Kadabra", number: 64, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "5800", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Abra", evo1: "Alakazam", evo2: "no", npreEvo2: "no", npreEvo1: "63", nevo1: "65", nevo2: "no",
        maps: '"top":25,"left":75,"text":"Desert Island - (VIP)";"top":87,"left":31,"text":"Deserto Mandarin - (FREE)"',
        vip: "no",
        moves: "Psybeam-40,Psywave-40,Psy pulse-40,Confusion-40,Psychic-42,Calm mind-40,Hypnosis-40,Reflect-48,Restore-45,", loots: "(1-1)//psychic spoon--2.3%,(1-23)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//future orb--23.5%,", evoStone: "Enigma stone (x2)", boost: "8", booStone: "Enigma stone", skills: "Teleport, Light, Blink"
    },
    {
        name: "Alakazam", number: 65, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "15800", shiny: "yes", fast: "no", heavy: "no", preEvo2: "Abra", preEvo1: "Kadabra", evo1: "no", evo2: "no", npreEvo2: "63", npreEvo1: "64", nevo1: "no", nevo2: "no",
        maps: '"top":25,"left":75,"text":"Desert Island - Subsolo Piramide a Direita (entre as 3 maiores Piramides ou no subsolo da piramide menor ao norte) - (VIP)";"top":4,"left":6,"text":"Outland North - Saida a esquerda (dentro da pirâmide) (VIP)";"top":87,"left":31,"text":"Deserto Mandarin - (FREE)"',
        vip: "no",
        moves: "Psybeam-80,Psywave-80,Psy pulse-80,Confusion-80,Psychic-80,Psyusion-95,Calm mind-80,Hypnosis-80,Reflect-85,Restore-85,Miracle eye-1000,", loots: "(1-1)//psychic spoon--4.3% (38.3%),(1-40)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//future orb--34.0% (68.0%),", evoStone: "", boost: "3", booStone: "Enigma stone", skills: "Teleport, Light, Blink, Control Mind"
    },
    {
        name: "Machop", number: 66, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "2000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Machoke", evo2: "Machamp", npreEvo2: "no", npreEvo1: "no", nevo1: "67", nevo2: "68",
        maps: 'no', vip: "no", moves: "Triple punch-20,Mega punch-20,Karate chop-24,Focus blast-28,Agility-25,", loots: "(1-1)//belt of champion--Raro,(1-10)//band aid--80%,", evoStone: "Punch stone", boost: "10", booStone: "Punch stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Machoke", number: 67, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "7000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Machop", evo1: "Machamp", evo2: "no", npreEvo2: "no", npreEvo1: "66", nevo1: "68", nevo2: "no",
        maps: 'no', vip: "no", moves: "Triple punch-42,Mega punch-40,Mega kick-44,Karate chop-40,Focus blast-40,Arm thrust-45,Agility-48,", loots: "(1-1)//belt of champion--Raro,(1-23)//band aid--80%,(1-1)//Punch stone--Raro,", evoStone: "Punch stone (x2)", boost: "6", booStone: "Punch stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Machamp", number: 68, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "17000", shiny: "yes", fast: "yes", heavy: "yes", preEvo2: "Machop", preEvo1: "Machoke", evo1: "no", evo2: "no", npreEvo2: "66", npreEvo1: "67", nevo1: "no", nevo2: "no",
        maps: '"top":6,"left":18,"text":"Outland East - Saida da direita (VIP)";"top":19,"left":59,"text":"Direita de Cerulean - Ultimo andar do Rock Tunel na parte aberta ao norte (VIP)";"top":24,"left":30,"text":"Esquerda de Viridian - (Subterrâneo) Ao norte do Coliseum (VIP)";"top":56,"left":29,"text":"Esquerda de Shamouti - Ao sul do Fight Club (FREE)"',
        vip: "no",
        moves: "Triple punch-80,Karate chop-80,Revenge-92,Focus blast-80,Arm thrust-86,Vital throw-88,Dynamicpunch-90,Agility-48,Foresight-Passiva,", loots: "(1-1)//belt of champion--1.5% (6.0%),(1-40)//band aid--80%,(1-1)//Punch stone--Raro,", evoStone: "", boost: "3", booStone: "Punch stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Bellsprout", number: 69, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "80", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Weepinbell", evo2: "Victreebel", npreEvo2: "no", npreEvo1: "no", nevo1: "70", nevo2: "71",
        maps: 'no', vip: "no", moves: "Razor leaf-6,Vine whip-8,Acid-4,Slash-1,", loots: "(1-1)//plant tail--Raro,(1-1)//seed--80.0%,(1-1)//bottle of poison--80%,(1-1)//leaves--21.5%,", evoStone: "Leaf stone", boost: "30", booStone: "Leaf stone", skills: "Cut"
    },
    {
        name: "Weepinbell", number: 70, level: 30, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "2250", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Bellsprout", evo1: "Victreebel", evo2: "no", npreEvo2: "no", npreEvo1: "69", nevo1: "71", nevo2: "no",
        maps: 'no', vip: "no", moves: "Razor leaf-30,Vine whip-30,Magical leaf-30,Poison bomb-30,Stun spore-30,Poison powder-30,Sleep powder-34,Leaf storm-38,Growth-36,", loots: "(1-1)//plant tail--2.1%,(1-6)//seed--80.0%,(1-6)//bottle of poison--80%,(1-1)//Leaf stone--Raro,(1-1)//Venom stone--Raro,(1-1)//leaves--27.5%,", evoStone: "Leaf stone (x2)", boost: "10", booStone: "Leaf stone", skills: "Cut"
    },
    {
        name: "Victreebel", number: 71, level: 70, ball1: "Superball", ball2: "Ultraball", clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "12000", shiny: "no", fast: "no", heavy: "no", preEvo2: "Bellsprout", preEvo1: "Weepinbell", evo1: "no", evo2: "no", npreEvo2: "69", npreEvo1: "70", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Razor leaf-70,Vine whip-70,Magical leaf-70,Poison bomb-70,Stun spore-70,Poison powder-70,Sleep powder-75,Leaf storm-77,Giga drain-75,Growth-76,", loots: "(1-1)//plant tail--8.3%,(1-13)//seed--80.0%,(1-13)//bottle of poison--80%,(1-1)//Leaf stone--Raro,(1-1)//Venom stone--Raro,(1-1)//leaves--35.0%,", evoStone: "", boost: "4", booStone: "Leaf stone", skills: "Cut"
    },
    {
        name: "Tentacool", number: 72, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Malefic", type1: "Água", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "300", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Tentacruel", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "73", nevo2: "no",
        maps: 'no', vip: "no", moves: "Super sonic-16,Wrap-10,Bubbles-10,Poison jab-10,Acid-10,Waterball-10,", loots: "(1-1)//giant ruby--Raro,(1-4)//water gem--80.0%,(1-4)//bottle of poison--80%,(1-1)//ruby--4.5%,", evoStone: "Water stone,Venom stone", boost: "15", booStone: "Water stone", skills: "Surf"
    },
    {
        name: "Tentacruel", number: 73, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Seavell", clan2: "Malefic", type1: "Água", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "10000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Tentacool", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "72", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Super sonic-80,Wrap-80,Bubbles-80,Poison jab-80,Waterball-80,Bubblebeam-80,Acid-80,Water pulse-80,Mortal gas-88,Hydropump-90,Liquid ooze-Passiva,", loots: "(1-1)//giant ruby--4.3%,(1-20)//water gem--80.0%,(1-20)//bottle of poison--80%,(1-1)//Water stone--Raro,(1-1)//Venom stone--Raro,(1-1)//ruby--24.0%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,(1-1)//Tentacruel tentacle--Raro,", evoStone: "", boost: "3", booStone: "Water stone", skills: "Surf, Control Mind"
    },
    {
        name: "Geodude", number: 74, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Orebound", clan2: "Nenhum", type1: "Pedra", type2: "Terra", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "300", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Graveler", evo2: "Golem", npreEvo2: "no", npreEvo1: "no", nevo1: "75", nevo2: "76",
        maps: 'no', vip: "no", moves: "Rock throw-10,Rock slide-10,Stone edge-13,Earth power-15,Harden-15,", loots: "(1-1)//strange rock--Raro,(1-4)//small stone--80%,(1-4)//earth ball--80%,(1-1)//stone orb--14.5%,", evoStone: "Rock stone", boost: "15", booStone: "Rock stone", skills: "Dig, Rock Smash, Headbutt"
    },
    {
        name: "Graveler", number: 75, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Orebound", clan2: "Nenhum", type1: "Pedra", type2: "Terra", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "5000", shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Geodude", evo1: "Golem", evo2: "no", npreEvo2: "no", npreEvo1: "74", nevo1: "76", nevo2: "no",
        maps: 'no', vip: "no", moves: "Rock throw-40,Rock slide-40,Stone edge-40,Earth power-40,Falling rocks-50,Harden-45,Selfdestruction-52,", loots: "(1-1)//strange rock--2.4%,(1-10)//small stone--80%,(1-10)//earth ball--80%,(1-1)//Rock stone--Raro,(1-1)//Earth stone--Raro,(1-1)//stone orb--22.0%,", evoStone: "Rock stone (x2)", boost: "7", booStone: "Rock stone", skills: "Dig, Rock Smash, Headbutt"
    },
    {
        name: "Golem", number: 76, level: 70, ball1: "Superball", ball2: "Ultraball", clan1: "Orebound", clan2: "Nenhum", type1: "Pedra", type2: "Terra", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "100000", priceNpc: "15000", shiny: "yes", fast: "no", heavy: "yes", preEvo2: "Geodude", preEvo1: "Graveler", evo1: "no", evo2: "no", npreEvo2: "74", npreEvo1: "75", nevo1: "no", nevo2: "no",
        maps: '"top":21,"left":59,"text":"Rock tunnel - terceiro andar (FREE) e quarto andar (VIP)";"top":7,"left":16,"text":"Outland East - Saída sul (VIP)"', vip: "no", moves: "Rock throw-70,Rock slide-70,Stone edge-70,Earth power-70,Falling rocks-75,Harden-70,Rollout-70,Selfdestruction-75,", loots: "(1-1)//strange rock--4.3% (46.8%),(1-18)//small stone--80%,(1-18)//earth ball--80%,(1-1)//Rock stone--Raro,(1-1)//Earth stone--Raro,(1-1)//stone orb--31.0% (62.0%),", evoStone: "", boost: "4", booStone: "Rock stone", skills: "Dig, Rock Smash, Headbutt"
    },
    {
        name: "Ponyta", number: 77, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "1500", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Rapidash", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "78", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-20,Ember-20,Flamethrower-26,Fireball-23,Stomp-28,", loots: "(1-1)//fire horse foot--1.3%,(1-10)//essence of fire--80.0%,(1-1)//pot of lava--16.0%,", evoStone: "Fire stone (x2)", boost: "10", booStone: "Fire stone", skills: "Ride, Headbutt"
    },
    {
        name: "Rapidash", number: 78, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "50000", priceNpc: "12500", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Ponyta", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "77", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Lightning horn-100,Ember-100,Flamethrower-106,Incinerate-100,Flare blitz-110,Wild charge-105,Tail whip-100,Morning sun-100,Blue flames-110,", loots: "(1-1)//fire horse foot--83%,(1-25)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--25.0%,", evoStone: "", boost: "3", booStone: "Fire stone", skills: "Ride, Headbutt"
    },
    {
        name: "Slowpoke", number: 79, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Psycraft", type1: "Água", type2: "Psiquico", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "400", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Slowbro, Slowking", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "80,199", nevo2: "no",
        maps: 'no', vip: "no", moves: "Aqua tail-10,Headbutt-10,Iron tail-10,Waterball-13,Water gun-15,Confusion-18,", loots: "(1-1)//slow tail--5.0%,(1-4)//water gem--80%,(1-4)//enchanted gem--80%,(1-1)//water pendant--19.5%,", evoStone: "Water stone (x2)=Slowbro , Ancient stone (x2)=Slowking", boost: "15", booStone: "Water stone", skills: "Headbutt"
    },
    {
        name: "Slowbro", number: 80, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Psycraft", type1: "Água", type2: "Psiquico", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "8000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Slowpoke", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "79", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Aqua tail-50,Headbutt-50,Iron tail-50,Waterball-50,Water pulse-50,Confusion-50,Psychic-57,Yawn-50,Amnesia-Passiva,", loots: "(1-1)//slow tail--8.9%,(1-11)//water gem--80%,(1-11)//enchanted gem--80%,(1-1)//Water stone--Raro,(1-1)//water pendant--28.5%,", evoStone: "", boost: "7", booStone: "Water stone", skills: "Headbutt, Teleport"
    },
    {
        name: "Magnemite", number: 81, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Raibolt", clan2: "Ironhard", type1: "Elétrico", type2: "Metal", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "400", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Magneton", evo2: "Magnezone", npreEvo2: "no", npreEvo1: "no", nevo1: "82", nevo2: "462",
        maps: 'no', vip: "no", moves: "Super sonic-10,Thunder shock-10,Spark-10,Electro ball-10,Sonicboom-15,", loots: "(1-1)//magnet--3.6%,(1-4)//screw--80%,(1-4)//piece of steel--80%,(1-1)//electric box--9.5%,", evoStone: "Thunder stone", boost: "15", booStone: "Thunder stone", skills: "Light"
    },
    {
        name: "Magneton", number: 82, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Raibolt", clan2: "Ironhard", type1: "Elétrico", type2: "Metal", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "5400", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Magnemite", evo1: "Magnezone", evo2: "no", npreEvo2: "no", npreEvo1: "81", nevo1: "462", nevo2: "no",
        maps: 'no', vip: "no", moves: "Super sonic-80,Thunder shock-80,Spark-80,Tri attack-95,Thunder-88,Electric storm-92,Electro ball-80,Flash cannon-88,", loots: "(1-1)//magnet--9.3%,(1-10)//screw--80%,(1-10)//piece of steel--80%,(1-1)//Thunder stone--Raro,(1-1)//electric box--17.0%,", evoStone: "Data UFO (x10)", boost: "3", booStone: "Thunder stone", skills: "Light"
    },
    {
        name: "Farfetchd", number: 83, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Wingeon", clan2: "Gardestrike", type1: "Voador", type2: "Normal", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "8000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-50,Drill peck-50,Stickmerang-52,Stickslash-51,Stick throw-54,Night slash-50,Air slash-53,Agility-50,", loots: "(1-1)//Farfetchd stick--4.3%,(1-10)//straw--80%,(1-10)//rubber ball--80.0%,(1-1)//Feather stone--Raro,(1-1)//feather--37.0%,", evoStone: "", boost: "7", booStone: "Feather stone", skills: "Cut, Fly"
    },
    {
        name: "Doduo", number: 84, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Wingeon", clan2: "Gardestrike", type1: "Voador", type2: "Normal", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "600", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Dodrio", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "85", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-10,Peck-10,Drill peck-10,Rage-15,Agility-15,", loots: "(1-1)//dodrio feather--1.4%,(1-4)//straw--80%,(1-4)//rubber ball--80%,(1-1)//bird beak--4.6%,", evoStone: "Feather stone", boost: "15", booStone: "Feather stone", skills: "Ride"
    },
    {
        name: "Dodrio", number: 85, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Wingeon", clan2: "Gardestrike", type1: "Voador", type2: "Normal", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "5600", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Doduo", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "84", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-50,Peck-50,Drill peck-50,Pluck-55,Tri attack-58,Roost-55,Rage-50,Agility-50,", loots: "(1-1)//dodrio feather--4.3%,(1-11)//straw--80%,(1-11)//rubber ball--80%,(1-1)//Feather stone--Raro,(1-1)//Heart stone--Raro,(1-1)//bird beak--13.6%,", evoStone: "", boost: "7", booStone: "Feather stone", skills: "Ride"
    },
    {
        name: "Seel", number: 86, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Gelo", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "2000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Dewgong", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "87", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Headbutt-20,Aqua tail-20,Ice shards-20,Ice beam-24,Icy wind-26,Aurora beam-28,", loots: "(1-1)//seal tail--1.3%,(1-10)//water gem--80.0%,(1-1)//ice orb--14.0%,(1-1)//water pendant--6.0%,", evoStone: "Ice stone,Water stone", boost: "10", booStone: "Water stone", skills: "Headbutt"
    },
    {
        name: "Dewgong", number: 87, level: 60, ball1: "Superball", ball2: "Ultraball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Gelo", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "100000", priceNpc: "12000", shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Seel", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "86", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Aqua tail-60,Headbutt-60,Brine-60,Ice shards-60,Ice beam-60,Icy wind-60,Aurora beam-64,Blizzard-66,Rest-66,Safeguard-65,", loots: "(1-1)//seal tail--1.3%,(1-16)//snowball--80.0%,(1-16)//water gem--80.0%,(1-1)//Ice stone--Raro,(1-1)//Water stone--Raro,(1-1)//ice orb--27.5% (82.5%),(1-1)//water pendant--19.5% (78.0%),(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone: "", boost: "4", booStone: "Ice stone", skills: "Surf, Headbutt"
    },
    {
        name: "Grimer", number: 88, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "300", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Muk", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "89", nevo2: "no",
        maps: 'no', vip: "no", moves: "Mud shot-10,Acid-10,Sludge-10,Mud bomb-13,Poison bomb-15,Harden-17,", loots: "(1-1)//gosme--5.0%,(1-8)//bottle of poison--80.0%,", evoStone: "Venom stone (x2)", boost: "15", booStone: "Venom stone", skills: ""
    },
    {
        name: "Muk", number: 89, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "50000", priceNpc: "11000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Grimer", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "88", nevo1: "no", nevo2: "no",
        maps: '"top":20,"left":45,"text":"Pantano - subterraneo, na casinha a esquerda de cerulean (FREE)";"top":58,"left":35,"text":"Shamouti - Subterrâneo, entrada no buraco a direita do CP Externo (VIP)"', vip: "no", moves: "Mud shot-80,Acid-80,Sludge-80,Mud bomb-80,Poison bomb-80,Venoshock-92,Sludge wave-80,Harden-90,Acid armor-88,", loots: "(1-1)//sticky hand--8.1%,(1-42)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,", evoStone: "", boost: "3", booStone: "Venom stone", skills: ""
    },
    {
        name: "Shellder", number: 90, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Gelo", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "200", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Cloyster", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "91", nevo2: "no",
        maps: 'no', vip: "no", moves: "Lick-10,Super sonic-17,Bubbles-14,Clamp-18,Ice beam-15,Harden-16,", loots: "(1-1)//locksmith of shell--4.3%,(1-5)//water gem--80%,(1-5)//snowball--80%,(1-1)//ice orb--11.0%,(1-1)//water pendant--3.0%,", evoStone: "Ice stone (x2)", boost: "20", booStone: "Water stone", skills: ""
    },
    {
        name: "Cloyster", number: 91, level: 60, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Gelo", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "100000", priceNpc: "10200", shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Shellder", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "90", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Lick-60,Super sonic-60,Bubbles-14,Clamp-60,Bubbles-60,Ice beam-60,Aurora beam-64,Blizzard-68,Harden-62,", loots: "(1-1)//strange spike--4.3% (25.5%),(1-15)//snowball--80%,(1-15)//water gem--80%,(1-1)//Ice stone--Raro,(1-1)//Water stone--Raro,(1-1)//ice orb--11.0%,(1-1)//water pendant--26.0% (78.0%),", evoStone: "", boost: "4", booStone: "Ice stone", skills: ""
    },
    {
        name: "Gastly", number: 92, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Malefic", clan2: "Nenhum", type1: "Fantasma", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Haunter", evo2: "Gengar", npreEvo2: "no", npreEvo1: "no", nevo1: "93", nevo2: "94",
        maps: 'no', vip: "no", moves: "Lick-20,Shadow ball-20,Night shade-26,Invisible-24,Hypnosis-28,Fear-30,Levitate-Passiva,", loots: "(1-1)//traces of ghost--Raro,(1-5)//ghost essence--80%,(1-5)//bottle of poison--80%,", evoStone: "Darkness stone", boost: "10", booStone: "Darkness stone", skills: ""
    },
    {
        name: "Haunter", number: 93, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Malefic", clan2: "Nenhum", type1: "Fantasma", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Gastly", evo1: "Gengar", evo2: "no", npreEvo2: "no", npreEvo1: "92", nevo1: "94", nevo2: "no",
        maps: 'no', vip: "no", moves: "Lick-40,Shadow ball-40,Night shade-40,Shadow storm-55,Invisible-40,Nightmare-45,Hypnosis-40,Fear-40,Dark accurate-1000,Levitate-Passiva,", loots: "(1-1)//traces of ghost--2.3%,(1-11)//ghost essence--80%,(1-11)//bottle of poison--80%,(1-1)//Darkness stone--Raro,(1-1)//Venom stone--Raro,", evoStone: "Darkness stone (x2)", boost: "6", booStone: "Darkness stone", skills: "Control mind"
    },
    {
        name: "Gengar", number: 94, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Malefic", clan2: "Nenhum", type1: "Fantasma", type2: "Venenoso", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "Gastly", preEvo1: "Haunter", evo1: "no", evo2: "no", npreEvo2: "92", npreEvo1: "93", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Lick-80,Shadow ball-80,Shadow punch-84,Night shade-80,Shadow storm-86,Invisible-80,Nightmare-80,Hypnosis-80,Fear-80,Dark accurate-1000,Levitate-Passiva,", loots: "(1-1)//traces of ghost--5.3% (47.3%),(1-20)//ghost essence--80%,(1-20)//bottle of poison--80%,(1-1)//Darkness stone--Raro,(1-1)//Venom stone--Raro,", evoStone: "", boost: "3", booStone: "Darkness stone", skills: "Levitate, Control mind"
    },
    {
        name: "Onix", number: 95, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Orebound", clan2: "Nenhum", type1: "Pedra", type2: "Terra", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "6000", shiny: "yes", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "no", evo1: "Steelix", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "208", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-50,Iron tail-50,Rock throw-50,Rock slide-50,Earth power-50,Falling rocks-55,Earthquake-58,Harden-50,", loots: "(1-1)//Onix tail--4.3%,(1-13)//small stone--80.0%,(1-13)//earth ball--80%,(1-1)//Rock stone--Raro,(1-1)//Earth stone--Raro,(1-1)//stone orb--25.0%,", evoStone: "Metal stone (x2)", boost: "5", booStone: "Rock stone", skills: "Dig, Rock smash, Ride, Headbutt"
    },
    {
        name: "Drowzee", number: 96, level: 30, ball1: "Pokeball", ball2: "Greatball", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "1000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Hypno", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "97", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Headbutt-30,Psybeam-30,Confusion-30,Dream eater-32,Hypnosis-32,Nasty plot-38,", loots: "(1-1)//linearly guided hypnose--2.0%,(1-13)//enchanted gem--80%,(1-1)//future orb--17.5%,", evoStone: "Enigma stone (x2)", boost: "10", booStone: "Enigma stone", skills: "Teleport, Light, Headbutt"
    },
    {
        name: "Hypno", number: 97, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "6000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Drowzee", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "96", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Psy pulse-50,Psywave-50,Psybeam-50,Confusion-50,Psychic-53,Dream eater-56,Hypnosis-55,Nasty plot-55,Miracle eye-1000,", loots: "(1-1)//linearly guided hypnose--4.3% (12.8%),(1-28)//enchanted gem--80% (100%),(1-1)//Enigma stone--Raro,(1-1)//future orb--26.5% (79.5%),", evoStone: "", boost: "4", booStone: "Enigma stone", skills: "Teleport, Light, Headbutt, Blink"
    },
    {
        name: "Krabby", number: 98, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "200", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Kingler", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "99", nevo2: "no",
        maps: 'no', vip: "no", moves: "Bubbles-10,Bubblebeam-12,Mud shot-10,Crabhammer-15,Harden-13,", loots: "(1-1)//crab claw--1.3%,(1-5)//water gem--80.0%,(1-1)//water gem--18.0%,", evoStone: "Water stone", boost: "20", booStone: "Water stone", skills: "Dig, Rock Smash, Cut"
    },
    {
        name: "Kingler", number: 99, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "5200", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Krabby", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "98", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Bubbles-40,Bubblebeam-40,Mud shot-40,Crabhammer-40,Metal claw-45,Brine-40,Hyper beam-46,Guillotine-48,Harden-40,", loots: "(1-1)//crab claw--4.3%,(1-20)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water gem--27.0%,", evoStone: "", boost: "7", booStone: "Water stone", skills: "Dig, Rock Smash, Headbutt and Cut"
    },
    {
        name: "Voltorb", number: 100, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "250", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Electrode", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "101", nevo2: "no",
        maps: 'no', vip: "no", moves: "Thunder shock-10,Spark-10,Thunder wave-12,Rollout-15,Selfdestruction-20,", loots: "(1-5)//screw--80.0%,(1-1)//electric box--8.0%,", evoStone: "Thunder stone", boost: "20", booStone: "Thunder stone", skills: "Light"
    },
    {
        name: "Electrode", number: 101, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Voltorb", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "100", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Thunder shock-40,Spark-40,Thunder wave-40,Rollout-40,Charge beam-40,Electric storm-45,Selfdestruction-40,", loots: "(1-5)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--8.0%,", evoStone: "", boost: "8", booStone: "Thunder stone", skills: "Light"
    },
    {
        name: "Exeggcute", number: 102, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Psycraft", type1: "Grama", type2: "Psiquico", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "200", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Exeggutor", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "103", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Hypnosis-14,Leech seed-10,Egg bomb-10,Confusion-16,", loots: "(1-1)//plant foot--Raro,(1-3)//seed--80.0%,(1-3)//enchanted gem--80.0%,(1-1)//leaves--28.0%,", evoStone: "Leaf stone,Enigma stone", boost: "20", booStone: "Leaf stone", skills: ""
    },
    {
        name: "Exeggutor", number: 103, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Naturia", clan2: "Psycraft", type1: "Grama", type2: "Psiquico", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "50000", priceNpc: "10000", shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Exeggcute", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "102", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Seed bomb-100,Egg bomb-100,Leaf blade-100,Confusion-100,Psyshock-108,Wood hammer-100,Solar beam-104,Leaf storm-115,Hypnosis-100,", loots: "(1-1)//plant foot--8.3%,(1-14)//seed--80.0%,(1-14)//enchanted gem--80.0%,(1-1)//Leaf stone--Raro,(1-1)//leaves--41.5%,", evoStone: "", boost: "3", booStone: "Leaf stone", skills: "Cut, Teleport, Blink"
    },
    {
        name: "Cubone", number: 104, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "1000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Marowak", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "105", nevo2: "no",
        maps: '"top":18,"left":55,"text":"Cerulean - Saida a direita da cidade (FREE)";"top":21,"left":53,"text":"Saffron - Saída ao norte da cidade, seguindo pela direita - subterrâneo (FREE)";"top":48,"left":35,"text":"Magma Island - Parte Norte da ilha (VIP)"',
        vip: "no",
        moves: "Headbutt-20,Bonemerang-20,Bone club-22,Bone rush-25,Rage-26,", loots: "(1-1)//bone--1.5%,(1-10)//earth ball--80.0%,(1-1)//sandbag--11.0%,", evoStone: "Earth stone (x2)", boost: "10", booStone: "Earth stone", skills: "Dig, Rock smash, Headbutt, Cut"
    },
    {
        name: "Marowak", number: 105, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "11000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Cubone", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "104", nevo1: "no", nevo2: "no",
        maps: '"top":6,"left":7,"text":"Outland South - Saida da esquerda (VIP)";"top":18,"left":55,"text":"Cerulean - Saida a direita da cidade (FREE)";"top":21,"left":53,"text":"Saffron - Saída ao norte da cidade, seguindo pela direita - subterrâneo (FREE)";"top":48,"left":35,"text":"Magma Island - Parte Norte da ilha (VIP)"',
        vip: "no",
        moves: "Mud shot-50,Headbutt-50,Bonemerang-50,Bone club-50,Bone rush-50,Earth power-54,Bulldoze-56,Rage-55,Smack down-58,Bone spin-Passiva,", loots: "(1-1)//bone--4.3% (80.0%),(1-28)//earth ball--80.0%,(1-1)//Earth stone--Raro,(1-1)//sandbag--21.5% (86.0%),", evoStone: "", boost: "5", booStone: "Earth stone", skills: "Dig, Rock smash, Headbutt, Cut"
    },
    {
        name: "Hitmonlee", number: 106, level: 60, ball1: "Masterball", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "0", priceNpc: "500000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Tyrogue", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "236", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Triple kick lee-60,Mega kick-60,Hi jump kick-65,Furious legs-60,Demon kicker-Passiva,Evasion-Passiva,Foresight-Passiva,", loots: "(1-1)//kick machine--4.3% (21.3%),(1-1)//martial arts scroll--5.0% (25.0%),(1-30)//band aid--80.0%,(1-1)//Punch stone--Raro,", evoStone: "", boost: "4", booStone: "Punch stone", skills: "Rock Smash, Headbutt"
    },
    {
        name: "Hitmonchan", number: 107, level: 60, ball1: "Masterball", ball2: "nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "0", priceNpc: "500000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Tyrogue", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "236", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Triple punch-60,Mega punch-60,Focus punch-65,Ultimate champion-60,Elemental hands-60,Demon puncher-Passiva,Evasion-Passiva,Foresight-Passiva,", loots: "(1-1)//punch machine--4.3% (21.3%),(1-1)//martial arts scroll--5.0% (25.0%),(1-30)//band aid--80.0%,(1-1)//Punch stone--Raro,", evoStone: "", boost: "4", booStone: "Punch stone", skills: "Rock Smash, Headbutt"
    },
    {
        name: "Lickitung", number: 108, level: 60, ball1: "Saffariball", ball2: "nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "500000", priceNpc: "60000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: '"top":30,"left":51,"text":"Fuchsia - Saffari (espalhados)"',
        vip: "yes",
        moves: "Lick-60,Shadow ball-60,Slam-60,Body slam-64,Mega punch-60,Iron tail-60,Squishy licking-65,Super sonic-60,Defense curl-60,", loots: "(1-1)//tongue--4.3%,(1-28)//rubber ball--80.0%,(1-1)//Heart stone--Raro,", evoStone: "", boost: "5", booStone: "Heart stone", skills: "Headbutt"
    },
    {
        name: "Koffing", number: 109, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "300", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Weezing", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "110", nevo2: "no",
        maps: 'no', vip: "no", moves: "Mud shot-10,Acid-10,Headbutt-10,Mud bomb-13,Poison bomb-15,Poison gas-15,Selfdestruction-20,Levitate-Passiva,", loots: "(1-1)//venom flute--1.8%,(1-8)//bottle of poison--80.0%,", evoStone: "Venom stone", boost: "15", booStone: "Venom stone", skills: "Headbutt"
    },
    {
        name: "Weezing", number: 110, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Koffing", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "109", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Mud shot-50,Acid-50,Headbutt-50,Mud bomb-52,Poison bomb-55,Poison gas-50,Mortal gas-56,Selfdestruction-58,Levitate-Passiva,", loots: "(1-1)//venom flute--1.8%,(1-8)//bottle of poison--80.0%,(1-1)//Venom stone--Raro,", evoStone: "", boost: "8", booStone: "Venom stone", skills: "Headbutt"
    },
    {
        name: "Rhyhorn", number: 111, level: 30, ball1: "Pokeball", ball2: "Greatball", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Pedra", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "yes", heavy: "yes", preEvo2: "no", preEvo1: "no", evo1: "Rhydon", evo2: "Rhyperior", npreEvo2: "no", npreEvo1: "no", nevo1: "112", nevo2: "464",
        maps: 'no', vip: "no", moves: "Horn attack-30,Stone edge-30,Rock throw-30,Dig-32,Bulldoze-33,Drill run-37,", loots: "(1-1)//horn drill--1.9%,(1-8)//small stone--80.0%,(1-8)//earth ball--80.0%,(1-1)//horn--9.5%,(1-1)//stone orb--9.0%,", evoStone: "Earth stone,Rock stone", boost: "9", booStone: "Earth stone", skills: "Dig, Rock Smash, Ride, Headbutt"
    },
    {
        name: "Rhydon", number: 112, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Pedra", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13000", shiny: "yes", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Rhyhorn", evo1: "Rhyperior", evo2: "no", npreEvo2: "no", npreEvo1: "111", nevo1: "464", nevo2: "no",
        maps: 'no', vip: "no", moves: "Horn attack-80,Stone edge-80,Rock throw-80,Dig-82,Horn drill-80,Bulldoze-83,Hammer arm-80,Fissure-90,Drill run-87,", loots: "(1-1)//horn drill--4.3% (29.8%),(1-19)//small stone--80.0%,(1-19)//earth ball--80.0%,(1-1)//Rock stone--Raro,(1-1)//Earth stone--Raro,(1-1)//horn--23.0% (92.0%),(1-1)//stone orb--22.5% (90.0%),", evoStone: "Protector (x10)", boost: "3", booStone: "Earth stone", skills: "Dig, Rock Smash, Headbutt"
    },
    {
        name: "Chansey", number: 113, level: 60, ball1: "nenhuma", ball2: "nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "40000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Blissey", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "242", nevo2: "no",
        maps: 'no', vip: "", moves: "Doubleslap-60,Egg bomb-60,Great love-68,Sing-60,Healarea-60,Protection-66,Egg rain-66,", loots: "(1-1)//Chansey egg--2.0%,(1-1)//Chansey doll--10.0%,", evoStone: "Ancient stone,Crystal stone", boost: "4", booStone: "Heart stone", skills: "Headbutt"
    },
    {
        name: "Tangela", number: 114, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "10000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Tangrowth", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "465", nevo2: "no",
        maps: 'no', vip: "no", moves: "Absorb-50,Leech seed-50,Vine whip-50,Power whip-57,Poison powder-50,Sleep powder-55,Stun spore-50,Mega drain-Passiva,", loots: "(1-1)//blue vines--9.3%,(1-28)//seed--80.0%,(1-1)//Leaf stone--Raro,", evoStone: "Gaia Tentacles (x10)", boost: "5", booStone: "Leaf stone", skills: "Cut, Headbutt"
    },
    {
        name: "Kangaskhan", number: 115, level: 80, ball1: "Saffariball", ball2: "nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "120000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-80,Dizzy punch-80,Headbutt-80,Mega punch-80,Crunch-80,Sucker punch-83,Comet punch-80,Epicenter-94,Rage-80,Groundshock-Passiva,", loots: "(1-1)//kanga ear--8.3%,(1-40)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//horn--24.5%,", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Horsea", number: 116, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "200", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Seadra", evo2: "Kingdra", npreEvo2: "no", npreEvo1: "no", nevo1: "117", nevo2: "230",
        maps: 'no', vip: "no", moves: "Mud shot-10,Bubbles-10,Bubblebeam-15,Water gun-12,Water ball-10,", loots: "(1-1)//seahorse tail--Raro,(1-5)//water gem--80.0%,", evoStone: "Water stone", boost: "20", booStone: "Water stone", skills: "Headbutt"
    },
    {
        name: "Seadra", number: 117, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "5500", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Horsea", evo1: "Kingdra", evo2: "no", npreEvo2: "no", npreEvo1: "116", nevo1: "230", nevo2: "no",
        maps: 'no', vip: "no", moves: "Mud shot-40,Smokescreen-40,Water pulse-40,Bubbles-40,Bubblebeam-40,Water gun-40,Dragon pulse-45,Hydro cannon-48,Dragon rage-Passiva,", loots: "(1-1)//seahorse tail--2.0%,(1-23)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone: "Crystal stone,Water stone", boost: "6", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Goldeen", number: 118, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "3000", priceNpc: "200", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Seaking", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "119", nevo2: "no",
        maps: 'no', vip: "no", moves: "Super sonic-18,Horn attack-10,Poison sting-10,Water gun-12,Water pulse-15,Aqua tail-12,", loots: "(1-1)//fish fin--1.2%,(1-5)//water gem--80.0%,(1-1)//horn--3.5%,", evoStone: "Water stone", boost: "20", booStone: "Water stone", skills: "Surf"
    },
    {
        name: "Seaking", number: 119, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Goldeen", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "118", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Super sonic-40,Horn attack-40,Waterfall-45,Water gun-40,Water pulse-40,Aqua tail-40,Horn drill-48,Aqua ring-40,", loots: "(1-1)//fish fin--4.3%,(1-18)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//horn--11.0%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone: "", boost: "8", booStone: "Water stone", skills: "Surf"
    },
    {
        name: "Staryu", number: 120, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Psycraft", type1: "Água", type2: "Psiquico", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "10000", priceNpc: "400", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Starmie", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "121", nevo2: "no",
        maps: 'no', vip: "no", moves: "Swift-20,Water gun-20,Bubblebeam-23,Psyshock-28,Psychic-20,Harden-20,Recover-25,", loots: "(1-1)//gem star--1.9%,(1-8)//water gem--80.0%,(1-1)//ruby--4.5%,", evoStone: "Water stone", boost: "15", booStone: "Water stone", skills: "Surf"
    },
    {
        name: "Starmie", number: 121, level: 80, ball1: "Superball", ball2: "Ultraball", clan1: "Seavell", clan2: "Psycraft", type1: "Água", type2: "Psiquico", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Staryu", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "120", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Swift-80,Water gun-80,Power gem-80,Bubblebeam-80,Rapid spin-88,Psychic-80,Calm mind-80,Hidropump-85,Recover-85,", loots: "(1-1)//gem star--4.3%,(1-9)//water gem--80.0%,(1-9)//enchanted gem--80.0%,(1-1)//Water stone--Raro,(1-1)//Enigma stone--Raro,(1-1)//ruby--10.5%,", evoStone: "", boost: "3", booStone: "Water stone", skills: "Surf"
    },
    {
        name: "Mr.mime", number: 122, level: 70, ball1: "Saffariball", ball2: "nenhuma", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Fada", region: "Kanto", generation: "1", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "40000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Ice punch-70,Psywave-70,Dazzling gleam-74,Confusion-70,Psychic-70,Psyusion-78,Reflect-70,Mimic wall-70,Miracle eye-1000,", loots: "(1-1)//mimic clothes--4.3%,(1-30)//enchanted gem--80%,(1-1)//Enigma stone--Raro,(1-1)//future orb--28.0%,", evoStone: "", boost: "4", booStone: "Enigma stone", skills: "Teleport, Light, Blink"
    },
    {
        name: "Scyther", number: 123, level: 100, ball1: "Saffariball", ball2: "nenhuma", clan1: "Naturia", clan2: "Wingeon", type1: "Inseto", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Sem sistema", xpCaught: "650000", priceNpc: "120000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Scizor", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "212", nevo2: "no",
        maps: '"top":5,"left":10,"text":"Outland North - Saida Sul (após o respawn de pinsir)";"top":30,"left":51,"text":"Fuchsia - Saffari (subsolo + Respawns aleatórios)"',
        vip: "yes",
        moves: "Quick attack-100,Night slash-100,Wing attack-100,Fury cutter-105,Shredder team-115,Air slash-103,Agility-100,Team slice-115,Swords dance-108,Counter helix-Passiva,Evasion-Passiva,", loots: "(1-1)//scythe--Raro,(1-20)//bug gosme--80.0%,(1-20)//straw--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//Feather stone--Raro,(1-1)//pot of moss bug--39.0% (78.0%),", evoStone: "Metal stone (x2)", boost: "3", booStone: "Cocoon stone", skills: "Cut, Headbutt"
    },
    {
        name: "Jynx", number: 124, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Seavell", clan2: "Psycraft", type1: "Gelo", type2: "Psiquico", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "500000", priceNpc: "120000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Smoochum", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "238", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Lovely kiss-80,Draining kiss-80,Psywave-80,Psy pulse-80,Ice ball-80,Ice beam-80,Icy wind-80,Aurora beam-84,Blizzard-86,Heart stamp-88,", loots: "(1-1)//ice bra--Raro,(1-19)//snowball--80.0%,(1-19)//enchanted gem--80.0%,(1-1)//Ice stone--Raro,(1-1)//Enigma stone--Raro,(1-1)//ice orb--30.5% (91.5%),(1-1)//future orb--22.5% (67.5%),(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone: "", boost: "3", booStone: "Ice stone", skills: "Teleport, Blink"
    },
    {
        name: "Electabuzz", number: 125, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "500000", priceNpc: "120000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Elekid", evo1: "Electivire", evo2: "no", npreEvo2: "no", npreEvo1: "239", nevo1: "466", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Low kick-100,Electroweb-100,Thunder punch-100,Thunder shock-100,Thunder bolt-100,Focus blast-100,Thunder-106,Mamaragan-110,Static-Passiva,", loots: "(1-1)//electric tail--Raro,(1-40)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--29.0% (58.0%),", evoStone: "Electirizer (x10)", boost: "3", booStone: "Thunder stone", skills: "Rock smash, Light, Headbutt"
    },
    {
        name: "Magmar", number: 126, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "500000", priceNpc: "120000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Magby", evo1: "Magmortar", evo2: "no", npreEvo2: "no", npreEvo1: "240", nevo1: "467", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Scratch-100,Smog-100,Fire punch-100,Ember-100,Flamethrower-100,Fireball-100,Fire blast-100,Magma storm-108,Sunny day-112,Flame body-Passiva,", loots: "(1-1)//magma foot--1.5% (5.8%),(1-40)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--34.0% (68.0%),", evoStone: "Magmarizer (x10)", boost: "3", booStone: "Fire stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Pinsir", number: 127, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Naturia", clan2: "Nenhum", type1: "Inseto", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "200000", priceNpc: "40000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Crunch-100,Brick break-100,Bind-100,Bulldoze-100,Fury cutter-108,Guillotine-110,Revenge-112,Harden-102,Swords dance-108,Bug instinct-Passiva,Seismic toss-Passiva,", loots: "(1-1)//Pinsir horn--10.3% (92.3%),(1-50)//bug gosme--80.0%,(1-1)//pot of moss bug--28.5% (85.5%),(1-1)//Cocoon stone--Raro,", evoStone: "", boost: "3", booStone: "Cocoon stone", skills: "Cut, Rock smash, Headbutt"
    },
    {
        name: "Tauros", number: 128, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Médio", xpCaught: "50000", priceNpc: "5000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Headbutt-50,Quick attack-50,Horn attack-50,Hyper beam-55,Thrash-56,Rage-50,Rest-55,Scary face-52,", loots: "(1-1)//bull tail--4.3%,(1-23)//rubber ball--80.0%,(1-1)//horn--14.0%,(1-1)//Heart stone--Raro,", evoStone: "", boost: "6", booStone: "Heart stone", skills: "Rock smash, Ride, Headbutt"
    },
    {
        name: "Magikarp", number: 129, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Fácil", xpCaught: "500", priceNpc: "5", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Gyarados", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "130", nevo2: "no",
        maps: 'no', vip: "no", moves: "Splash-1,", loots: "(1-1)//Magikarp fin--80.0%,(1-1)//water gem--80.0%,", evoStone: "Crystal stone,Water stone", boost: "30", booStone: "Water stone", skills: ""
    },
    {
        name: "Gyarados", number: 130, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Seavell", clan2: "Wingeon", type1: "Água", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "500000", priceNpc: "55000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Magikarp", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "129", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Roar-110,Dragon tail-100,Ice fang-100,Waterball-100,Twister-104,Hydro cannon-100,Dragon breath-100,Hyper beam-100,Hydropump-108,Rain dance-100,Dragon rage-Passiva,", loots: "(1-1)//Gyarados tail--2.3% (2.3%),(1-21)//water gem--80.0%,(1-21)//straw--80.0%,(1-1)//Water stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//water pendant--40.5% (40.5%),(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone: "", boost: "3", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Lapras", number: 131, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Gelo", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "500000", priceNpc: "120000", shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Ice beam-100,Ice shards-100,Water gun-100,Waterball-100,Powder snow-100,Aurora beam-100,Blizzard-108,Hydropump-110,Sing-100,Safeguard-110,Follow me-100,", loots: "(1-1)//giant fin--4.3%,(1-20)//water pendant--80.0%,(1-20)//snowball--80.0%,(1-1)//Water stone--Raro,(1-1)//Ice stone--Raro,(1-1)//water pendant--39.0%,(1-1)//ice orb--24.0%,(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone: "", boost: "3", booStone: "Ice stone", skills: "Surf, Headbutt"
    },
    {
        name: "Ditto", number: 132, level: 1, ball1: "nenhuma", ball2: "nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "", moves: "Transform-Habilidade,", loots: "no", evoStone: "", boost: "7", booStone: "Heart stone", skills: "Transform"
    },
    {
        name: "Eevee", number: 133, level: 20, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Sem sistema", xpCaught: "400000", priceNpc: "45000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Vaporeon, Jolteon, Flareon, Espeon, Umbreon", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "134,135,136,196,197", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-20,Quick attack-20,Bite-20,Headbutt-20,Iron tail-26,Great love-28,", loots: "(1-1)//fur--100.0%,(1-1)//toy box--15.0%,(1-1)//eevee valentines card--2.0%,(1-1)//Diamond dust--Raro,", evoStone: "Water stone (x2)=Vaporeon, Thunder stone (x2)=Jolteon, Fire stone (x2)=Flareon, Darkness stone (x2)=Umbreon, Enigma stone (x2)=Espeon", boost: "10", booStone: "Heart stone", skills: "Dig, Headbutt"
    },
    {
        name: "Vaporeon", number: 134, level: 60, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "50000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Eevee", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "133", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-60,Bite-60,Water gun-60,Bubblebeam-60,Water pulse-60,Muddy water-60,Aurora beam-64,Hydro cannon-68,Aqua ring-60,", loots: "(1-1)//water pendant--50.0%(1-1)//vaporeon cream--100.0%,(1-1)//Water stone--5.0%,(1-1)//vaporeon bag--1.5%,(1-1)//jolteon bag--1.5%,(1-1)//eevee bag--1.5%,(1-1)//flareon bag--1.5%,(1-1)//umbreon bag--1.5%,(1-1)//espeon bag--1.5%,(1-1)//vaporeon valentines card--2.0%,(1-1)//glaceon bag--Raro,(1-1)//leafeon bag--Raro,(1-1)//sylveon bag--Raro,", evoStone: "", boost: "4", booStone: "Water stone", skills: "Dig, Surf, Headbutt"
    },
    {
        name: "Jolteon", number: 135, level: 60, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "50000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Eevee", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "133", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-60,Thunder bolt-60,Thunder fang-60,Pin missile-62,Last resort-60,Thunder-65,Electric storm-68,Volt fang-64,Agility-60,", loots: "(1-1)//electric box--50.0%(1-1)//jolteon cream--100.0%,(1-1)//Thunder stone--5.0%,(1-1)//vaporeon bag--1.5%,(1-1)//jolteon bag--1.5%,(1-1)//eevee bag--1.5%,(1-1)//flareon bag--1.5%,(1-1)//umbreon bag--1.5%,(1-1)//espeon bag--1.5%,(1-1)//jolteon valentines card--2.0%,(1-1)//glaceon bag--Raro,(1-1)//leafeon bag--Raro,(1-1)//sylveon bag--Raro,", evoStone: "", boost: "4", booStone: "Thunder stone", skills: "Dig, Light, Headbutt"
    },
    {
        name: "Flareon", number: 136, level: 60, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "50000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Eevee", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "133", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-60,Bite-60,Flamethrower-60,Sacred fire-60,Blaze kick-60,Flame burst-60,Overheat-64,Fire blast-68,", loots: "(1-1)//pot of lava--50.0%(1-1)//flareon cream--100.0%,(1-1)//Fire stone--5.0%,(1-1)//vaporeon bag--1.5%,(1-1)//jolteon bag--1.5%,(1-1)//eevee bag--1.5%,(1-1)//flareon bag--1.5%,(1-1)//umbreon bag--1.5%,(1-1)//espeon bag--1.5%,(1-1)//flareon valentines card--2.0%,(1-1)//glaceon bag--Raro,(1-1)//leafeon bag--Raro,(1-1)//sylveon bag--Raro,", evoStone: "", boost: "4", booStone: "Fire stone", skills: "Dig, Headbutt"
    },
    {
        name: "Porygon", number: 137, level: 40, ball1: "nenhuma", ball2: "nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Não capturável", xpCaught: "0", priceNpc: "60000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Porygon2", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "233", nevo2: "no",
        maps: 'no', vip: "", moves: "Super sonic-40,Psybeam-40,Psycho cut-48,Psychic-40,Zap cannon-44,Focus energy-48,Magic coat-46,Restore-40,", loots: "no", evoStone: "Ancient stone,Crystal stone", boost: "7", booStone: "Heart stone", skills: "Teleport, Light, Fly, Blink"
    },
    {
        name: "Omanyte", number: 138, level: 20, ball1: "Masterball", ball2: "nenhuma", clan1: "Seavell", clan2: "Orebound", type1: "Água", type2: "Pedra", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "0", priceNpc: "20000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Omastar", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "139", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-20,Rock throw-20,Waterball-20,Water gun-20,Mud shot-20,Brine-25,Harden-26,Ancient power-30,", loots: "(1-1)//helix fossil--Raro,(1-5)//water gem--80.0%,(1-5)//small stone--80.0%,(1-1)//stone orb--16.0%,", evoStone: "Rock stone,Crystal stone", boost: "10", booStone: "Water stone", skills: "Dig, Headbutt"
    },
    {
        name: "Omastar", number: 139, level: 80, ball1: "Masterball", ball2: "nenhuma", clan1: "Seavell", clan2: "Orebound", type1: "Água", type2: "Pedra", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "0", priceNpc: "75000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Omanyte", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "138", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-80,Rock throw-80,Stone edge-80,Rock slide-80,Rock blast-80,Rollout-90,Ancient power-95,Hidropump-88,Harden-90,", loots: "(1-1)//helix fossil--Raro,(1-20)//water gem--80.0%,(1-20)//small stone--80.0%,(1-1)//Water stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//stone orb--34.0%,", evoStone: "", boost: "3", booStone: "Water stone", skills: "Dig, Headbutt, Rock smash, Surf"
    },
    {
        name: "Kabuto", number: 140, level: 20, ball1: "Masterball", ball2: "nenhuma", clan1: "Seavell", clan2: "Orebound", type1: "Água", type2: "Pedra", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "0", priceNpc: "20000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Kabutops", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "141", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Scratch-20,Bubbles-20,Slash-20,Mud shot-20,Night slash-20,Harden-28,Ancient power-26,Mega drain-Passiva,", loots: "(1-1)//dome fossil--Raro,(1-5)//water gem--80.0%,(1-5)//small stone--80.0%,(1-1)//stone orb--16.0%,", evoStone: "Crystal stone,Rock stone", boost: "10", booStone: "Water stone", skills: "Cut, Dig"
    },
    {
        name: "Kabutops", number: 141, level: 80, ball1: "Masterball", ball2: "nenhuma", clan1: "Seavell", clan2: "Orebound", type1: "Água", type2: "Pedra", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "0", priceNpc: "75000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Kabuto", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "140", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Ancient absorb-80,Slash-85,Rock throw-80,Rock slide-80,Mud shot-85,Night slash-80,Rock tomb-80,Ancient power-95,Fossilized shell-Passiva,", loots: "(1-1)//dome fossil--Raro,(1-20)//water gem--80.0%,(1-20)//small stone--80.0%,(1-1)//Water stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//stone orb--34.0%,", evoStone: "", boost: "3", booStone: "Rock stone", skills: "Rock smash, Dig, Cut, Surf, Headbutt"
    },
    {
        name: "Aerodactyl", number: 142, level: 150, ball1: "nenhuma", ball2: "nenhuma", clan1: "Orebound", clan2: "Wingeon", type1: "Pedra", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Roar-160,Super sonic-150,Bite-150,Crunch-150,Rock throw-150,Rock slide-150,Air cutter-158,Wing attack-150,Falling rocks-155,Hyper beam-160,Ancient power-165,", loots: "(1-1)//old amber--Raro,(1-25)//small stone--80.0%,(1-25)//straw--80.0%,(1-1)//Rock stone--3.0%,(1-1)//Ancient stone--Raro,(1-1)//stone orb--40.0%,", evoStone: "", boost: "30", booStone: "Ancient stone", skills: "Fly, Rock smash, Headbutt"
    },
    {
        name: "Snorlax", number: 143, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "650000", priceNpc: "200000", shiny: "yes", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Lick-100,Bite-100,Crunch-100,Mega punch-100,Body slam-104,Giga impact-105,Hyper beam-105,Crusher stomp-110,Rest-106,", loots: "(1-1)//bitten apple--20.0% (80.0%),(1-1)//Heart stone--Raro,(1-1)//pizza--30.0%,(1-1)//hamburguer--30.0%,(1-1)//hotdog--30.0%,", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Articuno", number: 144, level: 200, ball1: "nenhuma", ball2: "nenhuma", clan1: "Seavell", clan2: "Wingeon", type1: "Gelo", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Peck-200,Ice shards-200,Ice beam-200,Drill peck-200,Ancient power-200,Frost breath-200,Air cutter-200,Pluck-200,Powder snow-200,Aerial ace-200,Aurora beam-200,Blizzard-200,Iceshock-200,Frost tornado-200,", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Zapdos", number: 145, level: 200, ball1: "nenhuma", ball2: "nenhuma", clan1: "Raibolt", clan2: "Wingeon", type1: "Elétrico", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Peck-200,Thunder shock-200,Thunder bolt-200,Drill peck-200,Ancient power-200,Thunder wave-200,Wing attack-200,Charge beam-200,Electro ball-200,Aerial ace-200,Thunder-200,Electric storm-200,Electro field-200,Lightning hell-200,", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Moltres", number: 146, level: 200, ball1: "nenhuma", ball2: "nenhuma", clan1: "Volcanic", clan2: "Wingeon", type1: "Fogo", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Peck-200,Ember-200,Flamethrower-200,Drill peck-200,Ancient power-200,Air slash-200,Eruption-200,Solar beam-200,Aerial ace-200,Fire blast-200,Blast burn-200,Magma storm-200,Inferno-200,Hell fire-200,", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Dratini", number: 147, level: 30, ball1: "Superball", ball2: "Ultraball", clan1: "Wingeon", clan2: "Nenhum", type1: "Dragão", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "50000", priceNpc: "15000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Dragonair", evo2: "Dragonite", npreEvo2: "no", npreEvo1: "no", nevo1: "148", nevo2: "149",
        maps: 'no', vip: "yes", moves: "Aqua tail-30,Thunder wave-30,Slam-30,Twister-31,Hyper beam-38,Dragon breath-35,Dragon rage-Passiva,", loots: "(1-1)//dragon tail--Raro,(1-10)//dragon scale--80.0%,(1-1)//dragon tooth--Raro,", evoStone: "Crystal stone", boost: "50", booStone: "Crystal stone", skills: "Headbutt"
    },
    {
        name: "Dragonair", number: 148, level: 60, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Wingeon", clan2: "Nenhum", type1: "Dragão", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "500000", priceNpc: "65000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Dratini", evo1: "Dragonite", evo2: "no", npreEvo2: "no", npreEvo1: "147", nevo1: "149", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Aqua tail-60,Thunder wave-60,Slam-60,Wrap-60,Dragon tail-60,Dragon breath-62,Twister-64,Hyper beam-68,Dragon rage-Passiva,", loots: "(1-1)//dragon tail--2.4% (2.4%),(1-30)//dragon scale--80.0%,(1-1)//Crystal stone--Raro,(1-1)//dragon tooth--2.0% (4.0%),(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone: "Crystal stone (x2)", boost: "50", booStone: "Crystal stone", skills: "Fly, Headbutt"
    },
    {
        name: "Dragonite", number: 149, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Wingeon", clan2: "Nenhum", type1: "Dragão", type2: "Voador", region: "Kanto", generation: "1", difficulty: "Difícil", xpCaught: "650000", priceNpc: "125000", shiny: "no", fast: "no", heavy: "yes", preEvo2: "Dratini", preEvo1: "Dragonair", evo1: "no", evo2: "no", npreEvo2: "147", npreEvo1: "148", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Aqua tail-100,Thunder wave-100,Slam-100,Dragon claw-100,Dragon breath-102,Twister-104,Wing attack-106,Hyper beam-108,Draco meteor-115,Dragon rage-Passiva,", loots: "(1-1)//dragon tail--2.4% (2.4%),(1-25)//dragon scale--80.0%,(1-25)//straw--80.0%,(1-1)//Crystal stone--Raro,(1-1)//dragon tooth--3.0% (30%),(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone: "", boost: "30", booStone: "Crystal stone", skills: "Fly, Rock smash, Headbutt"
    },
    {
        name: "Mewtwo", number: 150, level: 500, ball1: "nenhuma", ball2: "nenhuma", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Swift-500,Shadow ball-500,Psybeam-500,Psywave-500,Confusion-500,Psychic-500,Psystrike-500,Recover-500,Barrier-500,Fear-500,Reflect-500,Miracle eye-500,", loots: "(1-1)//future orb--100.0%,(1-1)//Mewtwo helmet--Raro,(1-1)//Enigma stone--10.0%,", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Mew", number: 151, level: 200, ball1: "nenhuma", ball2: "nenhuma", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum", region: "Kanto", generation: "1", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Shadow ball-200,Brine-200,Flamethrower-200,Thunder bolt-200,Psychic-200,Instant teleportation-200,Hydro cannon-200,Solar beam-200,Ancient power-200,Metroname-200,Barrier-200,Reflect-200,Recover-200,", loots: "(1-1)//future orb--100.0%,(1-1)//Enigma stone--100.0%,", evoStone: "", boost: "", booStone: "", skills: ""
    },
    ///////// INICIO generation 2
    {
        name: "Chikorita", number: 152, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Bayleef", evo2: "Meganium", npreEvo2: "no", npreEvo1: "no", nevo1: "153", nevo2: "154",
        maps: 'no', vip: "no", moves: "Body slam-20,Razor leaf-20,Magical leaf-20,Synthesis-25,Solar beam-26,Sleep powder-28,Poison powder-20,Aromatherapy-20,", loots: "(1-1)//great petal--Raro,(1-10)//seed--80.0%,(1-1)//leaves--26.0%,(1-1)//bag of pollem--6.0%,", evoStone: "Leaf stone", boost: "10", booStone: "Leaf stone", skills: "Headbutt"
    },
    {
        name: "Bayleef", number: 153, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Chikorita", evo1: "Meganium", evo2: "no", npreEvo2: "no", npreEvo1: "152", nevo1: "154", nevo2: "no",
        maps: 'no', vip: "no", moves: "Body slam-40,Razor leaf-40,Magical leaf-40,Petal dance-45,Synthesis-40,Leaf tornado-48,Sleep powder-44,Poison powder-40,Light screen-40,", loots: "(1-1)//great petal--2.0%,(1-20)//seed--80.0%,(1-1)//Leaf stone--Raro,(1-1)//leaves--32.0%,(1-1)//bag of pollem--12.0%,", evoStone: "Leaf stone (x2)", boost: "7", booStone: "Leaf stone", skills: "Ride, Headbutt"
    },
    {
        name: "Meganium", number: 154, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000", shiny: "yes", fast: "no", heavy: "yes", preEvo2: "Chikorita", preEvo1: "Bayleef", evo1: "no", evo2: "no", npreEvo2: "152", npreEvo1: "153", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Razor leaf-80,Magical leaf-80,Petal dance-80,Leaf tornado-90,Ingrain-90,Sleep powder-80,Light screen-80,Aromatherapy-84,", loots: "(1-1)//great petal--4.3% (38.3%),(1-43)//seed--80.0%,(1-1)//Leaf stone--Raro,(1-1)//leaves--45.5% (91.0%),(1-1)//bag of pollem--25.5% (76.5%),", evoStone: "", boost: "3", booStone: "Leaf stone", skills: "Cut, Ride, Headbutt"
    },
    {
        name: "Cyndaquil", number: 155, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Quilava", evo2: "Typhlosion", npreEvo2: "no", npreEvo1: "no", nevo1: "156", nevo2: "157",
        maps: 'no', vip: "yes", moves: "Quick attack-20,Swift-22,Ember-20,Flamethrower-20,Smokescreen-24,Eruption-26,Defense curl-25,", loots: "(1-1)//hot fur--Raro,(1-10)//essence of fire--80.0%,(1-1)//pot of lava--16.0%,(1-1)//fur--6.0%,", evoStone: "Fire stone", boost: "10", booStone: "Fire stone", skills: "Dig, Cut, Headbutt"
    },
    {
        name: "Quilava", number: 156, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Cyndaquil", evo1: "Typhlosion", evo2: "no", npreEvo2: "no", npreEvo1: "155", nevo1: "157", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-40,Swift-40,Ember-40,Flamethrower-40,Flame circle-40,Smokescreen-40,Eruption-45,Defense curl-40,", loots: "(1-1)//hot fur--2.0%,(1-20)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--22.0%,(1-1)//fur--12.0%,", evoStone: "Fire stone (x2)", boost: "7", booStone: "Fire stone", skills: "Dig, Cut, Headbutt"
    },
    {
        name: "Typhlosion", number: 157, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "Cyndaquil", preEvo1: "Quilava", evo1: "no", evo2: "no", npreEvo2: "155", npreEvo1: "156", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-80,Swift-80,Ember-80,Flamethrower-80,Flame circle-80,Smokescreen-80,Eruption-80,Lava plume-85,Inferno-90,Defense curl-80,", loots: "(1-1)//hot fur--6.0% (48.0%),(1-43)//essence of fire--80.0%,(1-1)//Fire stone--Raro,(1-1)//pot of lava--35.5% (71.0%),(1-1)//fur--25.5% (76.5%),", evoStone: "", boost: "3", booStone: "Fire stone", skills: "Dig, Rock smash, Cut, Headbutt"
    },
    {
        name: "Totodile", number: 158, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Croconaw", evo2: "Feraligatr", npreEvo2: "no", npreEvo1: "no", nevo1: "159", nevo2: "160",
        maps: 'no', vip: "yes", moves: "Bite-20,Crunch-20,Water gun-20,Ice fang-24,Aqua tail-22,Waterfall-26,Agility-28,", loots: "(1-1)//red scale--Raro,(1-10)//water gem--80.0%,(1-1)//water pendant--21.0%,(1-1)//nail--6.0%,", evoStone: "Water stone", boost: "10", booStone: "Water stone", skills: "Surf, Cut, Headbutt"
    },
    {
        name: "Croconaw", number: 159, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Totodile", evo1: "Feraligatr", evo2: "no", npreEvo2: "no", npreEvo1: "158", nevo1: "160", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-40,Crunch-40,Bubbles-40,Water gun-40,Ice fang-40,Water pulse-40,Hydro cannon-48,Waterfall-45,Scary face-42,Agility-40,", loots: "(1-1)//red scale--2.0%,(1-20)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--27.0%,(1-1)//nail--12.0%,", evoStone: "Water stone (x2)", boost: "7", booStone: "Water stone", skills: "Surf, Cut, Headbutt"
    },
    {
        name: "Feraligatr", number: 160, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "Totodile", preEvo1: "Croconaw", evo1: "no", evo2: "no", npreEvo2: "158", npreEvo1: "159", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Crunch-80,Bubbles-80,Water pulse-80,Ice fang-80,Trash-80,Hydro cannon-80,Waterfall-80,Water spout-90,Scary face-82,Agility-80,", loots: "(1-1)//red scale--4.3% (55.3%),(1-43)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--40.5% (81.0%),(1-1)//nail--25.5% (100.0%),", evoStone: "", boost: "3", booStone: "Water stone", skills: "Surf, Cut, Headbutt"
    },
    {
        name: "Sentret", number: 161, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "3000", priceNpc: "250", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Furret", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "162", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-10,Scratch-10,Fury swipes-10,Hyper voice-13,Rest-17,", loots: "(1-1)//squirrel tail--1.9%,(1-8)//rubber ball--80.0%,(1-1)//fur--5.5%,", evoStone: "Heart stone", boost: "15", booStone: "Heart stone", skills: "Dig"
    },
    {
        name: "Furret", number: 162, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Sentret", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "161", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-40,Scratch-40,Fury swipes-40,Hyper voice-40,Sucker punch-43,Rest-43,", loots: "(1-1)//squirrel tail--4.3%,(1-18)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//fur--11.5%,", evoStone: "", boost: "8", booStone: "Heart stone", skills: "Dig"
    },
    {
        name: "Hoothoot", number: 163, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Gardestrike", clan2: "Wingeon", type1: "Normal", type2: "Voador", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "1500", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Noctowl", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "164", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-20,Peck-20,Confusion-20,Drill peck-20,Dream eater-25,Hypnosis-25,Roost-25,", loots: "(1-1)//owl feather--1.3%,(1-5)//straw--80.0%,(1-5)//rubber ball--80.0%,(1-1)//feather--31.0%,", evoStone: "Feather stone (x2)", boost: "10", booStone: "Feather stone", skills: ""
    },
    {
        name: "Noctowl", number: 164, level: 60, ball1: "Superball", ball2: "Ultraball", clan1: "Gardestrike", clan2: "Wingeon", type1: "Normal", type2: "Voador", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "100000", priceNpc: "11500", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Hoothoot", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "163", nevo1: "no", nevo2: "no",
        maps: '"top":76,"left":23,"text":"Kabuto island (VIP)";"top":8,"left":13,"text":"Outland South - Saida a direita, suba a escada ao sul (VIP)"', vip: "yes", moves: "Quick attack-60,Peck-60,Drill peck-60,Confusion-60,Echoed voice-65,Air slash-63,Dream eater-60,Hypnosis-60,Roost-65,", loots: "(1-1)//owl feather--4.3% (59.5%),(1-16)//straw--80.0%,(1-16)//rubber ball--80.0%,(1-1)//Feather stone--Raro,(1-1)//Heart stone--Raro,(1-1)//feather--44.5% (89.0%),", evoStone: "", boost: "4", booStone: "Feather stone", skills: "Fly"
    },
    {
        name: "Ledyba", number: 165, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Wingeon", type1: "Inseto", type2: "Voador", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "3000", priceNpc: "250", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Ledian", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "166", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-10,Super sonic-10,Swift-10,Silver wind-13,Agility-17,Evasion-Passiva,", loots: "(1-1)//ladybug wing--1.9%,(1-4)//bug gosme--80.0%,(1-4)//straw--80.0%,(1-1)//pot of moss bug--19.5%,", evoStone: "Cocoon stone", boost: "15", booStone: "Cocoon stone", skills: "Cut"
    },
    {
        name: "Ledian", number: 166, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Wingeon", type1: "Inseto", type2: "Voador", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Ledyba", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "165", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-40,Super sonic-40,Swift-40,Silver wind-40,Struggle bug-48,Bug buzz-42,Reflect-48,Agility-42,Evasion-Passiva,", loots: "(1-1)//ladybug wing--4.3%,(1-9)//bug gosme--80.0%,(1-9)//straw--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--25.5%,", evoStone: "", boost: "8", booStone: "Cocoon stone", skills: "Cut"
    },
    {
        name: "Spinarak", number: 167, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Malefic", type1: "Inseto", type2: "Venenoso", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "3000", priceNpc: "250", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Ariados", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "168", nevo2: "no",
        maps: 'no', vip: "no", moves: "String shot-10,Poison sting-10,Fury swipes-10,Poison jab-15,", loots: "(1-1)//spider leg--1.2%,(1-4)//bug gosme--80.0%,(1-4)//bottle of poison--80.0%,(1-1)//pot of moss bug--18.0%,", evoStone: "Cocoon stone", boost: "20", booStone: "Cocoon stone", skills: ""
    },
    {
        name: "Ariados", number: 168, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Malefic", type1: "Inseto", type2: "Venenoso", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Spinarak", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "167", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "String shot-40,Bug bite-40,Poison sting-40,Fury swipes-40,Poison jab-40,Pin missile-43,Spider web-50,Psychic-47,", loots: "(1-1)//spider leg--8.3%,(1-9)//bug gosme--80.0%,(1-9)//bottle of poison--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--25.5%,", evoStone: "", boost: "8", booStone: "Cocoon stone", skills: ""
    },
    {
        name: "Crobat", number: 169, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Malefic", clan2: "Wingeon", type1: "Venenoso", type2: "Voador", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "500000", priceNpc: "58000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "Zubat", preEvo1: "Golbat", evo1: "no", evo2: "no", npreEvo2: "41", npreEvo1: "42", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Super sonic-80,Bite-80,Poison fang-80,Toxic-80,Air slash-83,Wing attack-80,Air cutter-88,Cross poison-84,Venom gale-95,Lifesteal-Passiva,", loots: "(1-1)//giant bat wing--4.3% (12.8%),(1-20)//bottle of poison--80.0%,(1-20)//straw--80.0%,(1-1)//Venom stone--Raro,(1-1)//Ancient stone--Raro,(1-1)//tooth--39.0% (39.0%),", evoStone: "", boost: "3", booStone: "Venom stone", skills: "Fly"
    },
    {
        name: "Chinchou", number: 170, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Raibolt", type1: "Água", type2: "Elétrico", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "3000", priceNpc: "1000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Lanturn", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "171", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Super sonic-15,Bubbles-10,Spark-10,Water gun-10,Thunder wave-13,", loots: "(1-1)//point of light--1.3%,(1-4)//water gem--80.0%,(1-4)//screw--80.0%,(1-1)//water pendant--19.5%,(1-1)//electric box--4.5%,", evoStone: "Water stone,Thunder stone", boost: "15", booStone: "Water stone", skills: "Light"
    },
    {
        name: "Lanturn", number: 171, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Seavell", clan2: "Raibolt", type1: "Água", type2: "Elétrico", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "100000", priceNpc: "6000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Chinchou", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "170", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Super sonic-80,Bubbles-80,Bubblebeam-80,Spark-80,Thunder wave-80,Water pulse-80,Surf-85,Wild charge-85,Hydropump-90,Bright light-90,", loots: "(1-1)//point of light--8.3%,(1-13)//water gem--80.0%,(1-13)//screw--80.0%,(1-1)//Water stone--Raro,(1-1)//Thunder stone--Raro,(1-1)//water pendant--30.0%,(1-1)//electric box--15.0%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone: "", boost: "3", booStone: "Thunder stone", skills: "Light"
    },
    {
        name: "Pichu", number: 172, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Pikachu", evo2: "Raichu", npreEvo2: "no", npreEvo1: "no", nevo1: "25", nevo2: "26",
        maps: 'no', vip: "yes", moves: "Quick attack-20,Thunder shock-20,Thunder bolt-22,Thunder wave-24,Iron tail-26,Thunder-26,Agility-28,Electric charge-Passiva,", loots: "(1-1)//electric rat tail--Raro,(1-10)//screw--80.0%,(1-1)//electric box--11.0%,", evoStone: "Thunder stone", boost: "10", booStone: "Thunder stone", skills: "Light"
    },
    {
        name: "Cleffa", number: 173, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Psycraft", clan2: "Nenhum", type1: "Fada", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Clefairy", evo2: "Clefable", npreEvo2: "no", npreEvo1: "no", nevo1: "35", nevo2: "36",
        maps: 'no', vip: "no", moves: "Doubleslap-20,Body slam-24,Sing-30,Multi slap-22,Metroname-30,", loots: "(1-1)//topknot--1.3%,(1-10)//rubber ball--80.0%,(1-1)//comb--6.5%,", evoStone: "Heart stone", boost: "10", booStone: "Heart stone", skills: ""
    },
    {
        name: "Igglybuff", number: 174, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Psycraft", clan2: "Gardestrike", type1: "Fada", type2: "Normal", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Jigglypuff", evo2: "Wigglytuff", npreEvo2: "no", npreEvo1: "no", nevo1: "39", nevo2: "40",
        maps: 'no', vip: "no", moves: "Doubleslap-20,Body slam-24,Sing-20,Hyper voice-20,Softboiled-25,Charm-20,", loots: "(1-1)//microphone--Raro,(1-10)//rubber ball--80.0%,(1-1)//comb--6.5%,", evoStone: "", boost: "10", booStone: "Heart stone", skills: ""
    },
    {
        name: "Togepi", number: 175, level: 1, ball1: "Superball", ball2: "Ultraball", clan1: "Psycraft", clan2: "Nenhum", type1: "Fada", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "50000", priceNpc: "15000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Togetic", evo2: "Togekiss", npreEvo2: "no", npreEvo1: "no", nevo1: "176", nevo2: "468",
        maps: 'no', vip: "yes", moves: "Lovely kiss-1,Charm-11,Doubleslap-1,Softboiled-1,Last resort-6,Metroname-11,", loots: "(1-1)//eggshell--Raro,(1-3)//rubber ball--80.0%,(1-1)//feather--26.5%,", evoStone: "Heart stone (x2)", boost: "10", booStone: "Heart stone", skills: ""
    },
    {
        name: "Togetic", number: 176, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Psycraft", clan2: "Wingeon", type1: "Fada", type2: "Voador", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "500000", priceNpc: "25000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Togepi", evo1: "Togekiss", evo2: "no", npreEvo2: "no", npreEvo1: "175", nevo1: "468", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Lovely kiss-80,Charm-80,Doubleslap-80,Fairy wind-88,Softboiled-90,Great love-87,Last resort-85,Ancient power-95,Metroname-80,", loots: "(1-1)//eggshell--4.3%,(1-15)//rubber ball--80.0%,(1-15)//straw--80.0%,(1-1)//Heart stone--Raro,(1-1)//feather--43.0%,(1-1)//Shiny stone--Raro,", evoStone: "Shiny stone", boost: "3", booStone: "Feather stone", skills: ""
    },
    {
        name: "Natu", number: 177, level: 30, ball1: "Pokeball", ball2: "Greatball", clan1: "Psycraft", clan2: "Wingeon", type1: "Psiquico", type2: "Voador", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "15000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Xatu", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "178", nevo2: "no",
        maps: 'no', vip: "no", moves: "Peck-30,Feather dance-30,Confuse ray-30,Psy pulse-30,Night shade-34,Psychic-36,", loots: "(1-1)//strange wing--1.5%,(1-6)//straw--80.0%,(1-6)//enchanted gem--80.0%,(1-1)//feather--32.5%,", evoStone: "Feather stone,Enigma stone", boost: "10", booStone: "Feather stone", skills: "Teleport, Light, Blink"
    },
    {
        name: "Xatu", number: 178, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Psycraft", clan2: "Wingeon", type1: "Psiquico", type2: "Voador", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Natu", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "177", nevo1: "no", nevo2: "no",
        maps: '"top":4,"left":7,"text":"Outland North - Saída da esquerda, dentro da pirâmide (VIP)";"top":59,"left":34,"text":"Shamouti - Ao sul da ilha, necessário Squirtle bottle pra passar o caminho (FREE)";"top":88,"left":31,"text":"Deserto de Mandarim - Subterrâneo (FREE)"',
        vip: "no",
        moves: "Peck-80,Feather dance-80,Confuse ray-82,Shadow ball-80,Night shade-85,Astonish-80,Tailwind-80,Predict-85,Double team-82,", loots: "(1-1)//strange wing--4.3% (46.8%),(1-19)//straw--80.0%,(1-19)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//Feather stone--Raro,(1-1)//feather--47.5% (95.0%),", evoStone: "", boost: "3", booStone: "Feather stone", skills: "Teleport, Light, Fly, Blink"
    },
    {
        name: "Mareep", number: 179, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Flaaffy", evo2: "Ampharos", npreEvo2: "no", npreEvo1: "no", nevo1: "180", nevo2: "181",
        maps: 'no', vip: "no", moves: "Charge-28,Tackle-20,Fire punch-20,Cotton spore-22,Thunder shock-20,Thunder bolt-22,Thunder punch-24,Signal beam-26,", loots: "(1-1)//sheep wool--Raro,(1-10)//screw--80.0%,(1-1)//electric box--11.0%,", evoStone: "Thunder stone", boost: "10", booStone: "Thunder stone", skills: "Light, Ride, Headbutt"
    },
    {
        name: "Flaaffy", number: 180, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Mareep", evo1: "Ampharos", evo2: "no", npreEvo2: "no", npreEvo1: "179", nevo1: "181", nevo2: "no",
        maps: 'no', vip: "no", moves: "Charge-40,Tackle-40,Fire punch-40,Cotton spore-40,Thunder shock-40,Thunder bolt-40,Thunder punch-44,Thunder-48,Signal beam-46,", loots: "(1-1)//sheep wool--2.0%,(1-20)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--17.0%,", evoStone: "Thunder stone (x2)", boost: "7", booStone: "Thunder stone", skills: "Light, Headbutt"
    },
    {
        name: "Ampharos", number: 181, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "Mareep", preEvo1: "Flaaffy", evo1: "no", evo2: "no", npreEvo2: "179", npreEvo1: "180", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Charge-80,Dragon tail-80,Cotton spore-80,Thunder bolt-80,Thunder shock-80,Confuse ray-82,Fire punch-80,Dragon pulse-85,Electro field-90,Signal beam-80,Cotton guard-80,", loots: "(1-1)//sheep wool--4.3% (59.5%),(1-43)//screw--80.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--30.5% (61.0%),", evoStone: "", boost: "3", booStone: "Thunder stone", skills: "Light, Headbutt"
    },
    {
        name: "Bellossom", number: 182, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "50000", priceNpc: "12000", shiny: "no", fast: "no", heavy: "no", preEvo2: "Oddish", preEvo1: "Gloom", evo1: "no", evo2: "no", npreEvo2: "43", npreEvo1: "44", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Absorb-50,Leech seed-50,Leaf blade-50,Magical leaf-50,Poison gas-50,Petal dance-55,Leaf storm-58,Sleep powder-50,Stun spore-50,Poison powder-50,Spores reaction-Passiva,Mega drain-Passiva,", loots: "(1-1)//strange flower--4.3%,(1-25)//seed--80.0%,(1-1)//Leaf stone--Raro,(1-1)//leaves--35.0%,", evoStone: "", boost: "4", booStone: "Leaf stone", skills: "Cut"
    },
    {
        name: "Maril", number: 183, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Psycraft", type1: "Água", type2: "Fada", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Azumarill", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "184", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Tackle-20,Aqua tail-20,Water gun-20,Waterfall-24,Bubblebeam-26,Rain dance-22,Defense curl-28,", loots: "(1-1)//blue ball--1.3%,(1-10)//water gem--80.0%,(1-1)//water pendant--21.0%,", evoStone: "Water stone (x2)", boost: "10", booStone: "Water stone", skills: "Surf"
    },
    {
        name: "Azumarill", number: 184, level: 60, ball1: "Superball", ball2: "Ultraball", clan1: "Seavell", clan2: "Psycraft", type1: "Água", type2: "Fada", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "100000", priceNpc: "13000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Maril", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "183", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Play rough-60,Aqua tail-60,Water gun-60,Water ball-60,Waterfall-65,Bubblebeam-60,Hydropump-68,Rain dance-60,Defense curl-60,", loots: "(1-1)//blue ball--4.3%,(1-33)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--34.5%,", evoStone: "", boost: "4", booStone: "Water stone", skills: "Surf"
    },
    {
        name: "Sudowoodo", number: 185, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Orebound", clan2: "Nenhum", type1: "Pedra", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Sem sistema", xpCaught: "1000000", priceNpc: "120000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Rock throw-100,Rock slide-100,Rock tomb-100,Stone edge-100,Low kick-100,Sucker punch-102,Mimic-105,Rock wrecker-105,Hammer arm-100,Sturdy-Passiva,", loots: "(1-1)//branch of stone--4.3%,(1-40)//small stone--80.0%,(1-1)//Rock stone--Raro,(1-1)//stone orb--34.0%,", evoStone: "", boost: "3", booStone: "Rock stone", skills: "Dig, Rock smash, Cut, Headbutt"
    },
    {
        name: "Politoed", number: 186, level: 70, ball1: "Superball", ball2: "Ultraball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "100000", priceNpc: "8000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "Poliwag", preEvo1: "Poliwhirl", evo1: "no", evo2: "no", npreEvo2: "60", npreEvo1: "61", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Mud shot-70,Doubleslap-70,Bubblebeam-70,Water gun-70,Hyper voice-70,Whirlpool-72,Tongue hook-75,Tongue grap-78,Hypnosis-70,", loots: "(1-1)//strange thing--8.3%,(1-33)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--34.5%,", evoStone: "", boost: "4", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Hoppip", number: 187, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Wingeon", type1: "Grama", type2: "Voador", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "500", priceNpc: "80", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Skiploom", evo2: "Jumpluff", npreEvo2: "no", npreEvo1: "no", nevo1: "188", nevo2: "189",
        maps: 'no', vip: "no", moves: "Tackle-1,Leech seed-1,U turn-5,Synthesis-10,Sleep powder-7,Cotton spore-8,Poison powder-1,Mega drain-Passiva,", loots: "(1-1)//yellow flower--Raro,(1-3)//seed--80.0%,(1-3)//straw--80.0%,(1-1)//bag of pollem--1.5%,", evoStone: "Leaf stone", boost: "30", booStone: "Leaf stone", skills: ""
    },
    {
        name: "Skiploom", number: 188, level: 30, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Wingeon", type1: "Grama", type2: "Voador", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "2250", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Hoppip", evo1: "Jumpluff", evo2: "no", npreEvo2: "no", npreEvo1: "187", nevo1: "189", nevo2: "no",
        maps: 'no', vip: "no", moves: "Tackle-30,Leech seed-30,U turn-30,Synthesis-33,Bullet seed-36,Sleep powder-30,Cotton spore-30,Poison powder-30,Mega drain-Passiva,", loots: "(1-1)//yellow flower--2.1%,(1-6)//seed--80.0%,(1-6)//straw--80.0%,(1-1)//bag of pollem--7.5%,", evoStone: "Leaf stone (x2)", boost: "10", booStone: "Leaf stone", skills: ""
    },
    {
        name: "Jumpluff", number: 189, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Wingeon", type1: "Grama", type2: "Voador", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "50000", priceNpc: "12000", shiny: "no", fast: "no", heavy: "no", preEvo2: "Hoppip", preEvo1: "Skiploom", evo1: "no", evo2: "no", npreEvo2: "187", npreEvo1: "188", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Tackle-50,Leech seed-50,U turn-50,Synthesis-55,Bullet seed-50,Giga drain-60,Sleep powder-50,Cotton spore-50,Poison powder-50,Mega drain-Passiva,", loots: "(1-1)//yellow flower--4.3%,(1-13)//seed--80.0%,(1-13)//straw--80.0%,(1-1)//Leaf stone--Raro,(1-1)//bag of pollem--7.5%,", evoStone: "", boost: "4", booStone: "Leaf stone", skills: ""
    },
    {
        name: "Aipom", number: 190, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-40,Doubleslap-40,Scratch-40,Swift-40,Fury swipes-44,Last resort-46,Agility-45,", loots: "(1-1)//monkey paw--4.3%,(1-20)//rubber ball--80.0%,(1-1)//bitten apple--37.0%,", evoStone: "", boost: "7", booStone: "Heart stone", skills: "Dig, Cut, Headbutt"
    },
    {
        name: "Sunkern", number: 191, level: 1, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "500", priceNpc: "5", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Sunflora", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "192", nevo2: "no",
        maps: 'no', vip: "no", moves: "Headbutt-1,Leech seed-1,Razor leaf-1,", loots: "(1-1)//helicopter leave--1.4%,(1-5)//seed--80.0%,(1-1)//leaves--20.3%,", evoStone: "Leaf stone", boost: "30", booStone: "Leaf stone", skills: ""
    },
    {
        name: "Sunflora", number: 192, level: 30, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "15000", priceNpc: "5000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Sunkern", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "191", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Leech seed-30,Razor leaf-30,Petal dance-32,Bullet seed-34,Sunny day-36,Solar beam-38,Mega drain-Passiva,", loots: "(1-1)//helicopter leave--4.3%,(1-15)//seed--80.0%,(1-1)//Leaf stone--Raro,(1-1)//leaves--29.0%,", evoStone: "", boost: "9", booStone: "Leaf stone", skills: "Cut, Light"
    },
    {
        name: "Yanma", number: 193, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Wingeon", type1: "Inseto", type2: "Voador", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "50000", priceNpc: "9000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Super sonic-50,Tackle-50,Quick attack-50,U turn-50,Double team-52,Wing attack-50,Air slash-58,Bug buzz-56,", loots: "(1-1)//insect tail--4.3%,(1-13)//bug gosme--80.0%,(1-13)//straw--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--30.0%,", evoStone: "", boost: "5", booStone: "Cocoon stone", skills: "Cut"
    },
    {
        name: "Wooper", number: 194, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Orebound", type1: "Água", type2: "Terra", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "2000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Quagsire", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "195", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Slam-20,Mud shot-20,Aqua tail-20,Water gun-20,Waterball-24,Muddy water-28,Earthquake-30,Amnesia-Passiva,", loots: "(1-1)//wooper horn--1.3%,(1-5)//water gem--80.0%,(1-5)//earth ball--80.0%,(1-1)//water pendant--21.0%,(1-1)//sandbag--6.0%,", evoStone: "Water stone,Earth stone", boost: "10", booStone: "Earth stone", skills: "Dig, Rock smash, Cut, Headbutt"
    },
    {
        name: "Quagsire", number: 195, level: 60, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Orebound", type1: "Água", type2: "Terra", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "100000", priceNpc: "12000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Wooper", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "194", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Slam-60,Mud shot-60,Aqua tail-60,Water gun-60,Waterball-60,Sand tomb-62,Muddy water-65,Earthquake-66,Amnesia-Passiva,", loots: "(1-1)//wooper horn--8.3%,(1-16)//water gem--80.0%,(1-16)//earth ball--80.0%,(1-1)//Water stone--Raro,(1-1)//Earth stone--Raro,(1-1)//water pendant--34.5%,(1-1)//sandbag--19.5%,", evoStone: "", boost: "4", booStone: "Earth stone", skills: "Dig, Rock smash, Surf, Headbutt"
    },
    {
        name: "Espeon", number: 196, level: 60, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "50000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Eevee", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "133", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Swift-60,Bite-60,Psywave-60,Psybeam-60,Psy pulse-60,Confusion-60,Psychic-64,Psyshock-68,Miracle eye-1000,", loots: "(1-60)//enchanted gem--80.0%,(1-1)//Enigma stone--5.0%,(1-1)//vaporeon bag--1.5%,(1-1)//jolteon bag--1.5%,(1-1)//eevee bag--1.5%,(1-1)//flareon bag--1.5%,(1-1)//umbreon bag--1.5%,(1-1)//espeon bag--1.5%,(1-1)//glaceon bag--Raro,(1-1)//leafeon bag--Raro,(1-1)//sylveon bag--Raro,", evoStone: "", boost: "5", booStone: "Enigma stone", skills: "Dig, Teleport, Headbutt, Blink"
    },
    {
        name: "Umbreon", number: 197, level: 60, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Malefic", clan2: "Nenhum", type1: "Noturno", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "50000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Eevee", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "133", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-60,Bite-60,Shadowave-60,Pursuit-60,Dark pulse-60,Confuse ray-64,Last resort-60,Night daze-66,", loots: "(1-60)//dark gem--80.0%,(1-1)//Darkness stone--5.0%,(1-1)//vaporeon bag--1.5%,(1-1)//jolteon bag--1.5%,(1-1)//eevee bag--1.5%,(1-1)//flareon bag--1.5%,(1-1)//umbreon bag--1.5%,(1-1)//espeon bag--1.5%,(1-1)//glaceon bag--Raro,(1-1)//leafeon bag--Raro,(1-1)//sylveon bag--Raro,", evoStone: "", boost: "5", booStone: "Darkness stone", skills: "Dig, Headbutt, Blink"
    },
    {
        name: "Murkrow", number: 198, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Malefic", clan2: "Wingeon", type1: "Noturno", type2: "Voador", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "50000", priceNpc: "10000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Honchkrow", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "430", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Peck-50,Pursuit-50,Night shade-50,Wing attack-53,Sucker punch-57,Tailwind-50,Dark pulse-50,Torment-55,", loots: "(1-1)//dark beak--4.3%,(1-14)//dark gem--80.0%,(1-14)//straw--80.0%,(1-1)//Darkness stone--Raro,(1-1)//feather--41.5%,", evoStone: "", boost: "5", booStone: "Darkness stone", skills: ""
    },
    {
        name: "Slowking", number: 199, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Seavell", clan2: "Psycraft", type1: "Água", type2: "Psiquico", region: "Johto", generation: "2", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "110000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Slowpoke", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "79", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Waterball-100,Water pulse-100,Psy ball-100,Confusion-100,Surf-105,Psy impact-115,Calm mind-105,Future sight-110,Nasty plot-100,Miracle eye-1000,Zen mind-Passiva,", loots: "(1-1)//slow tail--14.3%,(1-25)//enchanted gem--80.0%,(1-25)//water gem--80.0%,(1-1)//Ancient stone--Raro,(1-1)//future orb--40.0%,(1-1)//water pendant--30.0%,", evoStone: "", boost: "30", booStone: "Ancient stone", skills: "Teleport, Light, Blink, Headbutt, Control mind"
    },
    {
        name: "Misdreavus", number: 200, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Malefic", clan2: "Nenhum", type1: "Fantasma", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Sem sistema", xpCaught: "1000000", priceNpc: "200000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Shadow ball-100,Dark pulse-100,Cursed hollow-100,Black blow-100,Black box-100,Night daze-106,Fear-100,Dark accurate-1020,Illusion-Passiva,Ghost trick-Passiva,Fear lust-Passiva,Levitate-Passiva,", loots: "(1-1)//miss trace--4.1% (20.5%),(1-40)//ghost essence--80.0%,(1-1)//Darkness stone--Raro,(1-1)//future orb--34.0% (100.0%),", evoStone: "", boost: "3", booStone: "Darkness stone", skills: "Teleport, Dark portal"
    },
    {
        name: "Unown", number: 201, level: 10, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Sem sistema", xpCaught: "200000", priceNpc: "unseleable", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Invisible-10,Hidden power-15,Levitate-Passiva,", loots: "no", evoStone: "", boost: "20", booStone: "Enigma stone", skills: "Blink"
    },
    {
        name: "Wobbuffet", number: 202, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Sem sistema", xpCaught: "1000000", priceNpc: "200000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Wynaut", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "360", nevo1: "no", nevo2: "no",
        maps: '"top":87,"left":31,"text":"Deserto Mandarin - (FREE)"', vip: "no", moves: "Destiny bond-100,Safeguard-110,Mirror coat-Passiva,Stunning confusion-Passiva,", loots: "(1-1)//strange tail--4.3%,(1-40)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//future orb--34.0%,", evoStone: "", boost: "3", booStone: "Enigma stone", skills: "Headbutt"
    },
    {
        name: "Girafarig", number: 203, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Psycraft", clan2: "Gardestrike", type1: "Psiquico", type2: "Normal", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "500000", priceNpc: "120000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Tackle-80,Crunch-80,Shadow ball-80,Shockwave-80,Astonish-80,Psychic-80,Assurance-85,Nasty plot-95,Agility-80,", loots: "(1-1)//strange antenna--4.3% (38.3%),(1-20)//rubber ball--80.0%,(1-20)//enchanted gem--80.0%,(1-1)//Enigma stone--Raro,(1-1)//Heart stone--Raro,(1-1)//future orb--34.0% (68.0%),", evoStone: "", boost: "3", booStone: "Enigma stone", skills: "Teleport, Ride, Light, Headbutt"
    },
    {
        name: "Pineco", number: 204, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Nenhum", type1: "Inseto", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "3000", priceNpc: "300", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Forretress", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "205", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Tackle-10,Bug bite-10,Toxic spikes-10,Gyro ball-18,Harden-12,Selfdestruction-10,", loots: "(1-1)//piece of shell--Raro,(1-8)//bug gosme--80.0%,(1-1)//pot of moss bug--19.5%,", evoStone: "Cocoon stone (x2)", boost: "15", booStone: "Cocoon stone", skills: "Dig, Headbutt"
    },
    {
        name: "Forretress", number: 205, level: 80, ball1: "Ultraball", ball2: "Netball", clan1: "Naturia", clan2: "Ironhard", type1: "Inseto", type2: "Metal", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "100000", priceNpc: "10000", shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Pineco", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "204", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron head-80,Bug bite-80,Pin missile-85,Heavy slam-80,Spikes-90,Stealth rock-90,Follow me-80,Harden-82,", loots: "(1-1)//piece of shell--8.3%,(1-16)//bug gosme--80.0%,(1-16)//piece of steel--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--34.5%,", evoStone: "", boost: "3", booStone: "Cocoon stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Dunsparce", number: 206, level: 30, ball1: "Pokeball", ball2: "Greatball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Yawn-30,Pursuit-30,Take down-30,Ancient power-42,Roost-35,Rage-32,Defense curl-32,", loots: "(1-1)//small wing--4.3%,(1-15)//rubber ball--80.0%,", evoStone: "", boost: "9", booStone: "Heart stone", skills: "Dig, Headbutt"
    },
    {
        name: "Gligar", number: 207, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Orebound", clan2: "Wingeon", type1: "Terra", type2: "Voador", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Gliscor", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "472", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Sand attack-40,Slash-40,Dig-42,U turn-40,X scissor-45,Fury cutter-48,Guillotine-50,Harden-42,Shadow slice-Passiva,", loots: "(1-1)//Gligar claw--4.3%,(1-10)//earth ball--80.0%,(1-10)//straw--80.0%,(1-1)//sandbag--17.0%,(1-1)//tooth--12.0%,", evoStone: "", boost: "7", booStone: "Earth stone", skills: "Rock smash, Headbutt, Cut"
    },
    {
        name: "Steelix", number: 208, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Orebound", clan2: "Ironhard", type1: "Terra", type2: "Metal", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "650000", priceNpc: "110000", shiny: "yes", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Onix", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "95", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron tail-100,Iron head-100,Sand tomb-102,Rock tomb-100,Stone edge-100,Earth power-105,Fissure-110,Earthquake-107,Harden-100,Iron defense-104,", loots: "(1-1)//steelix tail--Raro,(1-25)//piece of steel--80.0%,(1-25)//earth ball--80.0%,(1-1)//Metal stone--Raro,(1-1)//Earth stone--Raro,(1-1)//sandbag--35.0% (70.0%),", evoStone: "", boost: "30", booStone: "Metal stone", skills: "Ride, Strenght"
    },
    {
        name: "Snubbull", number: 209, level: 30, ball1: "Pokeball", ball2: "Greatball", clan1: "Psycraft", clan2: "Nenhum", type1: "Fada", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "2500", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Granbull", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "210", nevo2: "no",
        maps: 'no', vip: "no", moves: "Lick-30,Bite-30,Crunch-30,Play rough-30,Fire fang-32,Ice fang-34,Rage-30,", loots: "(1-1)//dog ear--2.0%,(1-15)//rubber ball--80.0%,", evoStone: "Heart stone (x2)", boost: "9", booStone: "Heart stone", skills: "Headbutt"
    },
    {
        name: "Granbull", number: 210, level: 80, ball1: "Superball", ball2: "Ultraball", clan1: "Psycraft", clan2: "Nenhum", type1: "Fada", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "50000", priceNpc: "12500", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Snubbull", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "209", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Tackle-80,Ice fang-82,Dazzling gleam-84,Play rough-80,Close combat-80,Take down-80,Hyper beam-85,War dog-86,Rest-88,Pixilate-Passiva,", loots: "(1-1)//dog ear--8.1% (56.4%),(1-33)//rubber ball--80.0%,(1-1)//Heart stone--Raro,", evoStone: "", boost: "4", booStone: "Heart stone", skills: "Headbutt, Rock smash"
    },
    {
        name: "Qwilfish", number: 211, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Malefic", type1: "Água", type2: "Venenoso", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "100000", priceNpc: "10000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Tackle-50,Poison sting-50,Toxic spikes-52,Water gun-50,Aqua tail-50,Harden-54,Minimize-58,Spike skin-Passiva,", loots: "(1-1)//small tail--4.3%,(1-14)//water gem--80.0%,(1-14)//bottle of poison--80.0%,(1-1)//Water stone--Raro,(1-1)//Venom stone--Raro,(1-1)//water pendant--31.5%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone: "", boost: "5", booStone: "Water stone", skills: "Headbutt"
    },
    {
        name: "Scizor", number: 212, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Naturia", clan2: "Ironhard", type1: "Inseto", type2: "Metal", region: "Johto", generation: "2", difficulty: "Sem sistema", xpCaught: "650000", priceNpc: "220000", shiny: "yes", fast: "yes", heavy: "yes", preEvo2: "no", preEvo1: "Scyther", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "123", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-100,Iron head-100,Wing blade-100,Red fury-104,Shredder team-110,X scissor-100,Agility-100,Team claw-115,Swords dance-108,Counter claw-Passiva,Evasion-Passiva,", loots: "(1-1)//scizor claw--Raro,(1-25)//piece of steel--80.0%,(1-25)//bug gosme--80.0%,(1-1)//Metal stone--Raro,(1-1)//Cocoon stone--Raro,(1-1)//pot of moss bug--45.0% (90.0%),", evoStone: "", boost: "30", booStone: "Metal stone", skills: "Rock smash, Cut, Headbutt"
    },
    {
        name: "Shuckle", number: 213, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Orebound", type1: "Inseto", type2: "Pedra", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "3500", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Bug bite-40,Wrap-40,Shell attack-40,Struggle bug-48,Safeguard-40,Rest-44,", loots: "(1-1)//small shell--4.3%,(1-8)//bug gosme--80.0%,(1-8)//small stone--80.0%,(1-1)//pot of moss bug--24.0%,", evoStone: "", boost: "9", booStone: "Cocoon stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Heracross", number: 214, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Naturia", clan2: "Gardestrike", type1: "Inseto", type2: "Lutador", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "500000", priceNpc: "120000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Low kick-100,Horn attack-100,Arm thrust-106,Mega punch-100,Close combat-100,Revenge-112,Megahorn-107,Bug fighter-110,Foresight-Passiva,Swarm-Passiva,", loots: "(1-1)//insect claw--10.1% (40.2%),(1-20)//bug gosme--80.0%,(1-20)//band aid--80.0%,(1-1)//Cocoon stone--Raro,(1-1)//Punch stone--Raro,(1-1)//pot of moss bug--39.0% (78.0%),", evoStone: "", boost: "3", booStone: "Cocoon stone", skills: "Rock smash, Cut, Fly, Headbutt"
    },
    {
        name: "Sneasel", number: 215, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Malefic", clan2: "Seavell", type1: "Noturno", type2: "Gelo", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "50000", priceNpc: "10000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Scratch-50,Bite-50,Faint attack-50,Ice shards-50,Icy wind-55,Metal claw-57,Shadow claw-50,Agility-50,Evasion-Passiva,", loots: "(1-1)//cat ear--4.3%,(1-14)//dark gem--80.0%,(1-14)//snowball--80.0%,(1-1)//wool ball--24.3% (72.8%),(1-1)//Ice stone--Raro,(1-1)//Darkness stone--raro,(1-1)//ice orb--24.5%,", evoStone: "", boost: "5", booStone: "Ice stone", skills: "Cut, Headbutt"
    },
    {
        name: "Teddiursa", number: 216, level: 30, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "500000", priceNpc: "80000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Ursaring", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "217", nevo2: "no",
        maps: 'no', vip: "no", moves: "Scratch-30,Slash-30,Hammer arm-32,Fury swipes-30,Body slam-34,Scary face-34,Rest-40,", loots: "(1-1)//bear paw--Raro,(1-10)//rubber ball--80.0%,(1-1)//fur--7.0%,", evoStone: "Ancient stone,Heart stone", boost: "10", booStone: "Heart stone", skills: "Rock smash, Cut, Headbutt"
    },
    {
        name: "Ursaring", number: 217, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "650000", priceNpc: "150000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Teddiursa", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "216", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Scratch-100,Slash-100,Hammer arm-100,Fury swipes-100,Body slam-104,Thrash-105,Hyper beam-105,Magnitude-110,Quick feet-Passiva,", loots: "(1-1)//bear paw--4.3% (17.0%),(1-45)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//Ancient stone--Raro,(1-1)//fur--28.0% (56.0%),", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Rock smash, Cut, Headbutt"
    },
    {
        name: "Slugma", number: 218, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "3000", priceNpc: "1000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Magcargo", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "219", nevo2: "no",
        maps: '"top":51,"left":33,"text":"Magma Island - Subsolo (VIP)";"top":42,"left":66,"text":"Ascorbia - Subsolo, entrada na montanha caminho pro mark (VIP)"', vip: "yes", moves: "Ember-10,Flamethrower-12,Rock throw-10,Rock slide-10,Harden-15,Yawn-15,", loots: "(1-1)//fire ear--2.0%,(1-8)//essence of fire--80.0%,(1-1)//pot of lava--14.5%,", evoStone: "Fire stone,Rock stone", boost: "15", booStone: "Fire stone", skills: "Rock smash"
    },
    {
        name: "Magcargo", number: 219, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Orebound", type1: "Fogo", type2: "Pedra", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "100000", priceNpc: "11000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Slugma", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "218", nevo1: "no", nevo2: "no",
        maps: '"top":51,"left":33,"text":"Magma Island - Subsolo (VIP)";"top":42,"left":66,"text":"Ascorbia - Subsolo, entrada na montanha caminho pro mark (VIP)"', vip: "yes", moves: "Ember-80,Rock throw-80,Rock slide-80,Flamethrower-80,Flame burst-80,Stone edge-80,Ancient power-88,Inferno-90,Harden-80,Yawn-86,Amnesia-Passiva,", loots: "(1-1)//fire ear--8.3%,(1-15)//essence of fire--80.0%,(1-15)//small stone--80.0%,(1-1)//Fire stone--Raro,(1-1)//Rock stone--Raro,(1-1)//pot of lava--28.0%,", evoStone: "", boost: "3", booStone: "Fire stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Swinub", number: 220, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Orebound", type1: "Gelo", type2: "Terra", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "3000", priceNpc: "1000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Piloswine", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "221", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Tackle-10,Mud slap-10,Mud bomb-10,Ice fang-10,Icy wind-15,Frost breath-18,Amnesia-Passiva,", loots: "(1-1)//tusk--Raro,(1-4)//snowball--80.0%,(1-4)//earth ball--80.0%,(1-1)//fur--5.5%,(1-1)//ice orb--4.5%,", evoStone: "Earth stone,Ice stone", boost: "15", booStone: "Earth stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Piloswine", number: 221, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Seavell", clan2: "Orebound", type1: "Gelo", type2: "Terra", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "200000", priceNpc: "11000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Swinub", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "220", nevo1: "no", nevo2: "no",
        maps: '"top":37,"left":43,"text":"Seafon Island - Ilha menor a esquerda (VIP)";"top":10,"left":5,"text":"Outland South - Acima da montanha a esquerda do respawn de Cloyster e dewgong"', vip: "yes", moves: "Mud slap-80,Mud bomb-80,Ice fang-80,Icy wind-80,Powder snow-80,Frost breath-82,Bulldoze-80,Earthquake-90,Blizzard-88,Amnesia-Passiva,", loots: "(1-1)//tusk--4.3% (21.3%),(1-20)//snowball--80.0%,(1-20)//earth ball--80.0%,(1-1)//Ice stone--Raro,(1-1)//Earth stone--Raro,(1-1)//fur--25.0% (100.0%),(1-1)//ice orb--24.0% (96.0%),(1-1)//ski poles--Raro,(1-1)//snow skis--Raro,(1-1)//goggles--Raro,", evoStone: "", boost: "3", booStone: "Earth stone", skills: "Dig, Rock smash, Ride, Headbutt"
    },
    {
        name: "Corsola", number: 222, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Orebound", type1: "Água", type2: "Pedra", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "50000", priceNpc: "9000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Tackle-50,Bubbles-50,Bubblebeam-50,Rock blast-50,Power gem-50,Ancient power-58,Recover-55,Harden-55,", loots: "(1-1)//piece of coral--4.3%,(1-13)//water gem--80.0%,(1-13)//small stone--80.0%,(1-1)//Water stone--Raro,(1-1)//Rock stone--Raro,(1-1)//water pendant--30.0%,(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone: "", boost: "5", booStone: "Water stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Remoraid", number: 223, level: 10, ball1: "Pokeball", ball2: "Greatball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "3000", priceNpc: "200", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Octillery", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "224", nevo2: "no",
        maps: 'no', vip: "no", moves: "Aqua tail-12,Ice beam-10,Water gun-12,Water ball-10,Bubblebeam-16,", loots: "(1-1)//tentacle--Raro,(1-5)//water gem--80.0%,(1-1)//water pendant--18.0%,", evoStone: "Water stone (x2)", boost: "20", booStone: "Water stone", skills: ""
    },
    {
        name: "Octillery", number: 224, level: 70, ball1: "Ultraball", ball2: "Netball", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "100000", priceNpc: "10000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Remoraid", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "223", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Swift-70,Bubblebeam-70,Water gun-70,Water ball-70,Muddy water-70,Hyper beam-76,Scald-72,Octazooka-74,", loots: "(1-1)//tentacle--4.3% (17.0%),(1-35)//water gem--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--36.0% (72.0%),(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone: "", boost: "4", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Delibird", number: 225, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Wingeon", type1: "Gelo", type2: "Voador", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "10000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Present-40,Doubleslap-40,Pluck-45,Frost breath-42,Ice beam-40,Blizzard-50,Rest-45,", loots: "(1-1)//gift bag--4.3%,(1-10)//snowball--80.0%,(1-10)//straw--80.0%,(1-1)//ice orb--20.0%,", evoStone: "", boost: "7", booStone: "Ice stone", skills: ""
    },
    {
        name: "Mantine", number: 226, level: 100, ball1: "Ultraball", ball2: "Netball", clan1: "Seavell", clan2: "Wingeon", type1: "Água", type2: "Voador", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "500000", priceNpc: "120000", shiny: "no", fast: "yes", heavy: "yes", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Headbutt-100,Aqua tail-100,Bubblebeam-102,Wing attack-105,Air slash-103,Air cutter-108,Bounce-102,Aerial ace-104,Aqua ring-100,Green guard-Passiva,", loots: "(1-1)//streak tail--4.3% (29.8%),(1-20)//water gem--80.0%,(1-20)//straw--80.0%,(1-1)//Water stone--Raro,(1-1)//water pendant--39.0% (78.0%),(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone: "", boost: "3", booStone: "Water stone", skills: "Cut, Headbutt, Surf"
    },
    {
        name: "Skarmory", number: 227, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Ironhard", clan2: "Wingeon", type1: "Metal", type2: "Voador", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "500000", priceNpc: "120000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Peck-100,Iron head-100,Metal burst-100,Metal claw-107,Air slash-103,Sky attack-110,Steel wing-108,Flash cannon-108,Brave bird-100,", loots: "(1-1)//steel wing--4.3% (8.5%),(1-21)//piece of steel--80.0%,(1-21)//straw--80.0%,(1-1)//Metal stone--Raro,(1-1)//Feather stone--Raro,(1-1)//bird beak--25.6% (25.6%),", evoStone: "", boost: "2", booStone: "Feather stone", skills: "Cut, Fly"
    },
    {
        name: "Houndour", number: 228, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Volcanic", clan2: "Malefic", type1: "Fogo", type2: "Noturno", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3500", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Houndoom", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "229", nevo2: "no",
        maps: '"top":49,"left":33,"text":"Magma Island - Parte Sul da ilha (VIP)";"top":39,"left":66,"text":"Ascorbia"',
        vip: "yes",
        moves: "Roar-23,Bite-20,Crunch-20,Ember-20,Faint attack-22,Shadowave-20,Flamethrower-24,Incinerate-26,", loots: "(1-1)//strange bone--Raro,(1-5)//essence of fire--80.0%,(1-5)//dark gem--80.0%,(1-1)//pot of lava--16.0%,", evoStone: "Darkness stone,Fire stone", boost: "10", booStone: "Darkness stone", skills: "Dig, Headbutt"
    },
    {
        name: "Houndoom", number: 229, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Malefic", type1: "Fogo", type2: "Noturno", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13500", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Houndour", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "228", nevo1: "no", nevo2: "no",
        maps: '"top":49,"left":33,"text":"Magma Island - Parte Sul da ilha (VIP)";"top":39,"left":66,"text":"Ascorbia"',
        vip: "yes",
        moves: "Roar-110,Bite-100,Crunch-100,Ember-100,Faint attack-100,Shadowave-100,Flamethrower-100,Incinerate-100,Fire blast-102,Inferno-110,", loots: "(1-1)//strange bone--8.3%,(1-20)//essence of fire--80.0%,(1-20)//dark gem--80.0%,(1-1)//Fire stone--Raro,(1-1)//Darkness stone--Raro,(1-1)//pot of lava--34.0%,", evoStone: "", boost: "3", booStone: "Darkness stone", skills: "Dig, Headbutt, Ride"
    },
    {
        name: "Kingdra", number: 230, level: 100, ball1: "Ultraball", ball2: "Taleball", clan1: "Seavell", clan2: "Wingeon", type1: "Água", type2: "Dragão", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "500000", priceNpc: "60000", shiny: "no", fast: "no", heavy: "yes", preEvo2: "Horsea", preEvo1: "Seadra", evo1: "no", evo2: "no", npreEvo2: "116", npreEvo1: "117", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Mud shot-100,Smokescreen-100,Bubbles-100,Bubblebeam-100,Scald-102,Water pulse-100,Twister-104,Dragon pulse-105,Surf-105,Dragon dance-106,", loots: "(1-1)//seahorse tail--4.3% (8.5%),(1-23)//dragon scale--80.0%,(1-23)//water gem--80.0%,(1-1)//Crystal stone--Raro,(1-1)//Water stone--Raro,(1-1)//water pendant--42.0% (84.0%),(1-1)//diving mask--Raro,(1-1)//air tank--Raro,(1-1)//fins--Raro,", evoStone: "", boost: "30", booStone: "Crystal stone", skills: "Surf, Headbutt"
    },
    {
        name: "Phanpy", number: 231, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Donphan", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "232", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Tackle-20,Take down-24,Horn attack-20,Rollout-26,Defense curl-28,", loots: "(1-1)//elephant foot--Raro,(1-10)//earth ball--80.0%,(1-1)//sandbag--11.0%,", evoStone: "Earth stone (x2)", boost: "10", booStone: "Earth stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Donphan", number: 232, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13000", shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Phanpy", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "231", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Mud slap-80,Fire fang-82,Horn attack-80,Rollout-80,Cannon ball-80,Bulldoze-80,Scary face-82,Earthquake-86,Defense curl-86,", loots: "(1-1)//elephant foot--4.3% (38.3%),(1-40)//earth ball--80.0%,(1-1)//Earth stone--Raro,(1-1)//sandbag--29.0% (58.0%),", evoStone: "", boost: "3", booStone: "Earth stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Porygon2", number: 233, level: 80, ball1: "Nenhuma", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Não capturável", xpCaught: "0", priceNpc: "120000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Porygon", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "137", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "", moves: "Ice beam-80,Electroweb-80,Zap cannon-84,Lock on-80,Thunder bolt-80,Hyper beam-90,Discharge-85,Tri attack-95,Magic coat-88,Restore-80,Gravity-Passiva,", loots: "no", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Teleport, Light, Fly, Blink"
    },
    {
        name: "Stantler", number: 234, level: 50, ball1: "Greatball", ball2: "Superball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "50000", priceNpc: "10000", shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-50,Tackle-50,Stomp-58,Take down-50,Confuse ray-54,Calm mind-50,Jump kick-56,Last resort-56,", loots: "(1-1)//reindeer horn--4.3%,(1-28)//rubber ball--80.0%,(1-1)//Heart stone--Raro,", evoStone: "", boost: "5", booStone: "Heart stone", skills: "Ride, Headbutt"
    },
    {
        name: "Smeargle", number: 235, level: "1-100", ball1: "Superball", ball2: "Ultraball", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Sem sistema", xpCaught: "15000", priceNpc: "0", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sketch-Especial,", loots: "(1-1)//brush--4.3%,(1-20)//rubber ball--80.0%,", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Tyrogue", number: 236, level: 30, ball1: "Masterball", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "0", priceNpc: "150000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Hitmonlee,Hitmonchan,Hitmontop", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "106,107,237", nevo2: "no",
        maps: 'no', vip: "no", moves: "Triple punch-30,Mega punch-32,Focus punch-36,Triple kick-30,Mega kick-32,Hi jump kick-36,Evasion-Passiva,Foresight-Passiva,", loots: "(1-15)//band aid--80.0%,", evoStone: "Kicking CD=Hitmonlee, Punching CD=Hitmonchan, Spinning CD=Hitmontop", boost: "9", booStone: "Punch stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Hitmontop", number: 237, level: 60, ball1: "Masterball", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "0", priceNpc: "500000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Tyrogue", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "236", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Triple kick-60,Rolling kick-65,Revenge-60,Focus energy-67,Counter spin-Passiva,Foresight-Passiva,", loots: "(1-1)//spin machine--4.3% (21.3%),(1-1)//martial arts scroll--5.0% (25.0%),(1-30)//band aid--80.0%,(1-1)//Punch stone--raro,", evoStone: "", boost: "4", booStone: "Punch stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Smoochum", number: 238, level: 30, ball1: "Greatball", ball2: "Superball", clan1: "Seavell", clan2: "Psycraft", type1: "Gelo", type2: "Psiquico", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "4500", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Jynx", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "124", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Lovely kiss-30,Draining kiss-30,Psywave-30,Psy pulse-30,Ice ball-30,Ice beam-30,Icy wind-34,", loots: "(1-1)//ice bra--raro,(1-8)//snowball--80.0%,(1-8)//enchanted gem--80.0%,(1-1)//ice orb--17.0%,", evoStone: "Ancient stone (x2)", boost: "9", booStone: "Ice stone", skills: "Teleport, Blink"
    },
    {
        name: "Elekid", number: 239, level: 30, ball1: "Greatball", ball2: "Superball", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "4500", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Electabuzz", evo2: "Electivire", npreEvo2: "no", npreEvo1: "no", nevo1: "125", nevo2: "466",
        maps: 'no', vip: "yes", moves: "Quick attack-30,Thunder punch-30,Thunder shock-30,Thunder bolt-30,Thunder wave-30,Thunder-36,Electricity-Passiva,", loots: "(1-1)//electric tail--Raro,(1-15)//screw--80.0%,(1-1)//electric box--14.0%,", evoStone: "Ancient stone (x2)", boost: "9", booStone: "Thunder stone", skills: "Rock smash, Light, Headbutt"
    },
    {
        name: "Magby", number: 240, level: 30, ball1: "Greatball", ball2: "Superball", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Médio", xpCaught: "15000", priceNpc: "4500", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Magmar", evo2: "Magmortar", npreEvo2: "no", npreEvo1: "no", nevo1: "126", nevo2: "467",
        maps: 'no', vip: "yes", moves: "Scratch-30,Fire punch-32,Ember-30,Flamethrower-30,Fireball-30,Fire blast-36,Lava counter-Passiva,", loots: "(1-1)//magma foot--Raro,(1-15)//essence of fire--80.0%,(1-1)//pot of lava--19.0%,", evoStone: "Ancient stone (x2)", boost: "9", booStone: "Fire stone", skills: "Headbutt"
    },
    {
        name: "Miltank", number: 241, level: 80, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "500000", priceNpc: "120000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Tackle-80,Body slam-85,Stomp-85,Rollout-80,Cannon ball-80,Milk drink-80,Heal bell-80,Defense curl-80,Thick fat-Passiva,", loots: "(1-1)//cow tail--8.1% (40.3%),(1-40)//rubber ball--80.0%,(1-1)//Heart stone--Raro,", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Headbutt"
    },
    {
        name: "Blissey", number: 242, level: 100, ball1: "Nenhuma", ball2: "Nenhuma", clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Não capturável", xpCaught: "0", priceNpc: "140000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Chansey", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "113", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "", moves: "Doubleslap-100,Egg bomb-100,Great love-108,Sing-100,Healing wish-102,Emergency call-100,Protection-106,Egg rain-110,Helping hand-100,Follow me-100,", loots: "(1-1)//Chansey egg--2.0%,(1-1)//Chansey doll--10.0%,", evoStone: "", boost: "2", booStone: "Heart stone", skills: "Headbutt"
    },
    {
        name: "Raikou", number: 243, level: 200, ball1: "Nenhuma", ball2: "Nenhuma", clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Roar-210,Thunder shock-200,Thunder bolt-200,Bite-200,Quick attack-200,Thunder wave-200,Thunder fang-200,Charge beam-200,Electro ball-200,Crunch-200,Thunder-200,Electric storm-200,Electro field-200,Calm mind-200,", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Entei", number: 244, level: 200, ball1: "Nenhuma", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Roar-210,Ember-200,Flamethrower-200,Bite-200,Ancient power-200,Lava plume-200,Eruption-200,Stomp-205,Crunch-200,Fire blast-200,Blast burn-215,Magma storm-200,Inferno-210,Calm mind-200,", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Suicune", number: 245, level: 200, ball1: "Nenhuma", ball2: "Nenhuma", clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum", region: "Johto", generation: "2", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Rain dance-200,Ice shards-200,Ice beam-200,Bite-200,Waterfall-200,Frost breath-200,Ice fang-204,Bubblebeam-200,Powder snow-200,Hydropump-210,Aurora beam-200,Blizzard-200,Iceshock-200,Calm mind-200,", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Larvitar", number: 246, level: 30, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Pedra", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "50000", priceNpc: "15000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Pupitar", evo2: "Tyranitar", npreEvo2: "no", npreEvo1: "no", nevo1: "247", nevo2: "248",
        maps: 'no', vip: "yes", moves: "Bite-30,Crunch-30,Dark pulse-30,Rock slide-30,Stone edge-30,Hyper beam-38,Sandstorm-35,", loots: "(1-1)//lizard tail--Raro,(1-5)//small stone--80.0%,(1-5)//earth ball--80.0%,(1-1)//stone orb--16.0%,(1-1)//sandbag--6.0%,", evoStone: "Ancient stone", boost: "10", booStone: "Earth stone", skills: "Dig, Rock smash, Cut, Headbutt"
    },
    {
        name: "Pupitar", number: 247, level: 60, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Pedra", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "500000", priceNpc: "65000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Larvitar", evo1: "Tyranitar", evo2: "no", npreEvo2: "no", npreEvo1: "246", nevo1: "248", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-60,Crunch-60,Dark pulse-60,Rock slide-60,Stone edge-60,Earthquake-65,Ancient power-68,Sandstorm-60,", loots: "(1-1)//lizard tail--1.3% (2.6%),(1-16)//small stone--80.0%,(1-16)//earth ball--80.0%,(1-1)//Ancient stone--Raro,(1-1)//Rock stone--Raro,(1-1)//stone orb--29.5% (59.0%),(1-1)//sandbag--21.5% (43.0%),", evoStone: "Ancient stone (x4)", boost: "4", booStone: "Earth stone", skills: "Dig, Rock smash, Cut, Headbutt"
    },
    {
        name: "Tyranitar", number: 248, level: 100, ball1: "Ultraball", ball2: "Nenhuma", clan1: "Orebound", clan2: "Malefic", type1: "Pedra", type2: "Noturno", region: "Johto", generation: "2", difficulty: "Difícil", xpCaught: "650000", priceNpc: "125000", shiny: "yes", fast: "no", heavy: "no", preEvo2: "Larvitar", preEvo1: "Pupitar", evo1: "no", evo2: "no", npreEvo2: "246", npreEvo1: "247", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-100,Shadowave-100,Dark pulse-100,Rock tomb-100,Rock slide-100,Stone edge-100,Ancient power-115,Hyper beam-108,Assurance-108,Sandstorm-100,", loots: "(1-1)//lizard tail--4.3% (17.0%),(1-25)//small stone--80.0%,(1-25)//dark gem--80.0%,(1-1)//Ancient stone--Raro,(1-1)//Rock stone--Raro,(1-1)//stone orb--40.0% (80.0%),(1-1)//sandbag--30.0% (60.0%),", evoStone: "", boost: "30", booStone: "Ancient stone", skills: "Dig, Rock smash, Cut, Headbutt"
    },
    {
        name: "Lugia", number: 249, level: 200, ball1: "Nenhuma", ball2: "Nenhuma", clan1: "Psycraft", clan2: "Wingeon", type1: "Psiquico", type2: "Voador", region: "Johto", generation: "2", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "no", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Ho-Oh", number: 250, level: 200, ball1: "Nenhuma", ball2: "Nenhuma", clan1: "Volcanic", clan2: "Wingeon", type1: "Fogo", type2: "Voador", region: "Johto", generation: "2", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "no", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Celebi", number: 251, level: 200, ball1: "nenhuma", ball2: "nenhuma", clan1: "Psycraft", clan2: "Naturia", type1: "Psiquico", type2: "Grama", region: "Johto", generation: "2", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "no", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    ///////// INICIO generation 3
    {
        name: "Treecko", number: 252, level: 20, ball1: "Pokeball", ball2: "Greatball", clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum", region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000", shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Grovyle", evo2: "Sceptile", npreEvo2: "no", npreEvo1: "no", nevo1: "253", nevo2: "254",
        maps: 'no', vip: "yes", moves: "Quick attack-20,Leaf blade-20,Fury cutter-25,X scissor-20,Giga drain-26,Agility-20,", loots: "(1-10)//seed--80.0% (100.0%),(1-1)//leaves--26.0% (78.0%),(1-1)//greens--Raro,", evoStone: "Leaf stone", boost: "10", booStone: "Leaf stone", skills: "Rock smash, Headbutt, Cut"
    },
    {
        name: "Grovyle", number: 253, level: 40, ball1: "Greatball", ball2: "Superball", clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum", region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000", shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Treecko", evo1: "Sceptile", evo2: "no", npreEvo2: "no", npreEvo1: "252", nevo1: "254", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-40,Leaf blade-40,Magical leaf-40,Fury cutter-45,Pursuit-40,Night slash-40,X scissor-40,Giga drain-45,Agility-40,", loots: "(1-20)//seed--80.0% (100.0%),(1-1)//Leaf stone--Raro,(1-1)//leaves--32.0% (96.0%),(1-1)//greens--2.0% (10.0%),", evoStone: "Leaf stone (x2)", boost: "7", booStone: "Leaf stone", skills: "Rock smash, Headbutt, Cut"
    },
    {
        name: "Sceptile", number: 254, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000",
        shiny: "yes", fast: "yes", heavy: "no", preEvo2: "Treecko", preEvo1: "Grovyle", evo1: "no", evo2: "no", npreEvo2: "252", npreEvo1: "253", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-80,Leaf blade-80,Magical leaf-80,Fury cutter-85,Pursuit-80,Night slash-80,X scissor-80,Dual chop-80,Frenzy plant-90,Agility-80,", loots: "(1-43)//seed--80.0% (100.0%),(1-1)//Leaf stone--Raro,(1-1)//leaves--45.5% (100.0%),(1-1)//greens--4.3% (68.0%),", evoStone: "", boost: "3", booStone: "Leaf stone", skills: "Rock smash, Headbutt, Cut"
    },
    {
        name: "Torchic", number: 255, level: 20, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Combusken", evo2: "Blaziken", npreEvo2: "no", npreEvo1: "no", nevo1: "256", nevo2: "257",
        maps: 'no', vip: "yes", moves: "Quick attack-20,Ember-20,Flamethrower-20,Drill peck-25,Overheat-26,Double team-22,", loots: "(1-1)//fire feather--Raro,(1-10)//essence of fire--80.0% (100.0%),(1-1)//pot of lava--21.0% (63.0%),", evoStone: "Fire stone", boost: "10", booStone: "Fire stone", skills: "Cut, Headbutt"
    },
    {
        name: "Combusken", number: 256, level: 40, ball1: "Greatball", ball2: "Superball",
        clan1: "Volcanic", clan2: "Gardestrike", type1: "Fogo", type2: "Lutador",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Torchic", evo1: "Blaziken", evo2: "no", npreEvo2: "no", npreEvo1: "255", nevo1: "257", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-40,Ember-40,Mega kick-40,Fire punch-40,Blaze kick-40,Flare blitz-48,Sky uppercut-46,Bulk up-40,", loots: "(1-1)//fire feather--2.0% (10.0%),(1-10)//band aid--80.0% (100.0%),(1-10)//essence of fire--80.0% (100.0%),(1-1)//Fire stone--Raro,(1-1)//Punch stone--Raro,(1-1)//pot of lava--32.0% (96.0%),", evoStone: "Fire stone,Punch stone", boost: "7", booStone: "Fire stone", skills: "Dig, Rock smash, Headbutt, Cut"
    },
    {
        name: "Blaziken", number: 257, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Gardestrike", type1: "Fogo", type2: "Lutador",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000",
        shiny: "yes", fast: "yes", heavy: "no", preEvo2: "Torchic", preEvo1: "Combusken", evo1: "no", evo2: "no", npreEvo2: "255", npreEvo1: "256", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Low kick-80,Ember-80,Mega kick-80,Double kick-80,Blaze kick-80,Hi jump kick-80,Sky uppercut-88,Blast burn-95,Flare blitz-90,Bulk up-80,Evasion-Passiva,", loots: "(1-1)//fire feather--4.3% (59.5%),(1-21)//band aid--80.0% (100.0%),(1-21)//essence of fire--80.0% (100.0%),(1-1)//Fire stone--Raro,(1-1)//Punch stone--Raro,(1-1)//pot of lava--45.5% (100.0%),", evoStone: "", boost: "3", booStone: "Punch stone", skills: "Dig, Rock smash, Cut, Headbutt"
    },
    {
        name: "Mudkip", number: 258, level: 20, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Marshtomp", evo2: "Swampert", npreEvo2: "no", npreEvo1: "no", nevo1: "259", nevo2: "260",
        maps: 'no', vip: "yes", moves: "Aqua tail-20,Mud slap-20,Water gun-20,Waterball-22,Hydropump-26,Protect-20,", loots: "(1-1)//black fins--Raro,(1-10)//water gem--80% (100.0%),(1-1)//water pendant--21.0% (63.0%),", evoStone: "", boost: "10", booStone: "Water stone", skills: "Dig, Headbutt"
    },
    {
        name: "Marshtomp", number: 259, level: 40, ball1: "Greatball", ball2: "Superball",
        clan1: "Seavell", clan2: "Orebound", type1: "Água", type2: "Terra",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Mudkip", evo1: "Swampert", evo2: "no", npreEvo2: "no", npreEvo1: "258", nevo1: "260", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Mud slap-40,Water gun-40,Waterball-40,Aqua tail-40,Muddy water-40,Hydropump-48,Protect-40,", loots: "(1-1)//black fins--2.0% (10.0%),(1-10)//earth ball--80.0% (100.0%),(1-10)//water gem--80% (100.0%),(1-1)//Water stone--Raro,(1-1)//Earth stone--Raro,(1-1)//water pendant--16.0% (48.0%),(1-1)//sandbag--16.0% (48.0%),", evoStone: "Water stone,Earth stone", boost: "7", booStone: "Water stone", skills: "Rock smash, Dig, Headbutt"
    },
    {
        name: "Swampert", number: 260, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Orebound", type1: "Água", type2: "Terra",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "Mudkip", preEvo1: "Marshtomp", evo1: "no", evo2: "no", npreEvo2: "258", npreEvo1: "259", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Aqua tail-80,Mud slap-80,Water gun-80,Waterball-80,Hammer arm-80,Muddy water-80,Earth power-80,Earthquake-87,Hydropump-90,Protect-80,", loots: "(1-1)//black fins--4.3% (55.3%),(1-21)//earth ball--80.0% (100.0%),(1-21)//water gem--80% (100.0%),(1-1)//Water stone--Raro,(1-1)//Earth stone--Raro,(1-1)//water pendant--22.8% (68.3%),(1-1)//sandbag--22.8% (68.3%),", evoStone: "", boost: "3", booStone: "Earth stone", skills: "Rock smash, Dig, Headbutt, Surf"
    },
    {
        name: "Poochyena", number: 261, level: 30, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Nenhum", type1: "Noturno", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "5000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Mightyena", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "262", nevo2: "no",
        maps: 'no', vip: "no", moves: "Roar-40,Bite-30,Crunch-30,Shadow claw-30,Night slash-30,", loots: "no", evoStone: "Mirror stone (x10)", boost: "10", booStone: "Mirror stone", skills: "Dig"
    },
    {
        name: "Mightyena", number: 262, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Nenhum", type1: "Noturno", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Poochyena", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "261", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Roar-90,Bite-80,Crunch-80,Take down-80,Shadow claw-80,Astonish-80,Night slash-80,Night daze-86,Taunt-80,Snarl-Passiva,", loots: "no", evoStone: "", boost: "5", booStone: "Mirror stone", skills: "Dig"
    },
    {
        name: "Lotad", number: 270, level: 20, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Seavell", clan2: "Naturia", type1: "Água", type2: "Grama",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Lombre", evo2: "Ludicolo", npreEvo2: "no", npreEvo1: "no", nevo1: "271", nevo2: "272",
        maps: 'no', vip: "yes", moves: "Absorb-20,Fury swipes-20,Bubblebeam-20,Scald-28,Rain dance-25,Mega drain-Passiva,Swift swim-Passiva,", loots: "(1-1)//water plant--1.1% (5.5%),(1-5)//seed--80.0% (100.0%),(1-5)//water gem--80.0% (100.0%),(1-1)//leaves--13.0% (39.0%),(1-1)//water pendant--13.0% (39.0%),", evoStone: "Water stone", boost: "10", booStone: "Leaf stone", skills: "Headbutt"
    },
    {
        name: "Lombre", number: 271, level: 50, ball1: "Greatball", ball2: "Superball",
        clan1: "Seavell", clan2: "Naturia", type1: "Água", type2: "Grama",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Lotad", evo1: "Ludicolo", evo2: "no", npreEvo2: "no", npreEvo1: "270", nevo1: "272", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Absorb-100,Fury swipes-100,Water pulse-100,Bubblebeam-100,Waterfall-100,Scald-102,Hydropump-102,Rain dance-100,Energy ball-100,Swift swim-Passiva,", loots: "(1-1)//water plant--2.2% (11.0%),(1-10)//seed--80.0% (100.0%),(1-10)//water gem--80.0% (100.0%),(1-1)//leaves--16.0% (48.0%),(1-1)//water pendant--16.0% (48.0%),(1-1)//Leaf stone--Raro,(1-1)//Water stone--Raro,", evoStone: "Leaf stone,Water stone", boost: "7", booStone: "Leaf stone", skills: "Surf"
    },
    {
        name: "Ludicolo", number: 272, level: 100, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Naturia", type1: "Água", type2: "Grama",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Lotad", preEvo1: "Lombre", evo1: "no", evo2: "no", npreEvo2: "270", npreEvo1: "271", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Absorb-80,Fury swipes-80,Water pulse-80,Bubblebeam-80,Waterfall-80,Scald-82,Hydropump-88,Rain dance-80,Energy ball-80,Swift swim-Passiva,Water sport-Passiva,Rain dish-Passiva,", loots: "(1-1)//water plant--4.5% (72.0%),(1-21)//seed--80.0% (100.0%),(1-21)//water gem--80.0% (100.0%),(1-1)//leaves--22.8% (68.3%),(1-1)//water pendant--22.8% (68.3%),(1-1)//Leaf stone--Raro,(1-1)//Water stone--Raro,", evoStone: "", boost: "3", booStone: "Leaf stone", skills: "Rock smash, Headbutt, Surf"
    },
    {
        name: "Seedot", number: 273, level: 10, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Nuzleaf", evo2: "Shiftry", npreEvo2: "no", npreEvo1: "no", nevo1: "274", nevo2: "275",
        maps: 'no', vip: "yes", moves: "Leech seed-10,Pound-10,Razor leaf-10,Dark pulse-10,Faint attack-10,", loots: "(1-1)//big seed--1.1% (5.5%),(1-10)//seed--80.0% (100.0%),(1-1)//leaves--26.0% (78.0%),", evoStone: "Leaf stone", boost: "10", booStone: "Leaf stone", skills: "Cut, Headbutt"
    },
    {
        name: "Nuzleaf", number: 274, level: 30, ball1: "Greatball", ball2: "Superball",
        clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Noturno",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Seedot", evo1: "Shiftry", evo2: "no", npreEvo2: "no", npreEvo1: "273", nevo1: "275", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Pound-30,Razor leaf-30,Dark pulse-30,Faint attack-30,Bamboo spikes-40,Sunny day-42,Chlorophyll-Passiva,", loots: "(1-1)//big seed--2.2% (11.0%),(1-10)//seed--80.0% (100.0%),(1-10)//dark gem--80.0% (100.0%),(1-1)//leaves--32.0% (96.0%),(1-1)//Darkness stone--Raro,", evoStone: "Leaf stone,Darkness stone", boost: "7", booStone: "Darkness stone", skills: "Cut, Headbutt"
    },
    {
        name: "Shiftry", number: 275, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Noturno",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Seedot", preEvo1: "Nuzleaf", evo1: "no", evo2: "no", npreEvo2: "273", npreEvo1: "274", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Pound-80,Razor leaf-80,Dark pulse-80,Faint attack-80,Bamboo spikes-90,Grassy terrain-90,Leaf tornado-90,Sunny day-92,Chlorophyll-Passiva,", loots: "(1-1)//sharp leaves--4.5% (90.0%),(1-21)//seed--80.0% (100.0%),(1-21)//dark gem--80.0% (100.0%),(1-1)//leaves--45.5% (100.0%),(1-1)//Leaf stone--Raro,(1-1)//Darkness stone--Raro,", evoStone: "", boost: "3", booStone: "Darkness stone", skills: "Cut, headbutt"
    },
    {
        name: "Taillow", number: 276, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Gardestrike", clan2: "Wingeon", type1: "Normal", type2: "Voador",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Swellow", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "277", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Peck-30,Pluck-30,Feather dance-30,Air slash-33,Tailwind-30,Roost-35,", loots: "(1-1)//crimson feather--1.1% (5.5%),(1-5)//straw--80.0% (100.0%),(1-5)//rubber ball--80.0% (100.0%),(1-1)//feather--13.0% (39.0%),(1-1)//bird beak--6.0% (18.0%),", evoStone: "Feather stone (x2)", boost: "10", booStone: "Feather stone", skills: ""
    },
    {
        name: "Swellow", number: 277, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Wingeon", type1: "Normal", type2: "Voador",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Taillow", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "276", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Peck-80,Feather dance-80,Pluck-85,Wing attack-82,Air slash-83,Boomburst-95,Sky attack-90,Tailwind-80,Brave bird-80,Guts-Passiva,", loots: "(1-1)//crimson feather--4.5% (49.5%),(1-21)//straw--80.0% (100.0%),(1-21)//rubber ball--80.0% (100.0%),(1-1)//feather--13.0% (65.0%),(1-1)//bird beak--2.5% (76.5%),(1-1)//Feather stone--Raro,(1-1)//Heart stone--Raro,", evoStone: "", boost: "3", booStone: "Feather stone", skills: "Fly"
    },
    {
        name: "Wingull", number: 278, level: 30, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Wingeon", type1: "Água", type2: "Voador",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "5000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Pelipper", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "279", nevo2: "no",
        maps: 'no',
        vip: "no",
        moves: "Super sonic-30,Gust-32,Bubbles-35,Wing attack-32,Scald-32,Rain dance-30,", loots: "no", evoStone: "Dimensional stone (x10)", boost: "10", booStone: "Dimensional stone", skills: ""
    },
    {
        name: "Pelipper", number: 279, level: 80, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Wingeon", type1: "Água", type2: "Voador",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Wingull", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "278", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Super sonic-80,Gust-82,Wing attack-82,Fly-82,Scald-82,Surf-85,Swallow-83,Stockpile-83,Rain dance-80,Protect-80,", loots: "no", evoStone: "", boost: "5", booStone: "Dimensional stone", skills: "Fly"
    },
    {
        name: "Ralts", number: 280, level: 30, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Fada",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "15000", priceNpc: "30000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Kirlia", evo2: "Gardevoir", npreEvo2: "no", npreEvo1: "no", nevo1: "281", nevo2: "282",
        maps: 'no', vip: "yes", moves: "Charm-30,Dazzling gleam-34,Instant teleportation-30,Confusion-32,Psychic-35,Healing wish-32,Miracle eye-1000,", loots: "(1-1)//cure flower--Raro,(1-1)//comb--Raro,(1-10)//enchanted gem--80.0% (100.0%),(1-1)//future orb--20.0% (60.0%),", evoStone: "Enigma stone", boost: "10", booStone: "Enigma stone", skills: "Teleport, Blink"
    },
    {
        name: "Kirlia", number: 281, level: 60, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Fada",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "50000", priceNpc: "35000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Ralts", evo1: "Gardevoir", evo2: "no", npreEvo2: "no", npreEvo1: "280", nevo1: "282", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Charm-60,Dazzling gleam-64,Instant teleportation-60,Confusion-60,Psychic-60,Healing wish-62,Draining kiss-60,Miracle eye-1000,", loots: "(1-1)//cure flower--2.0% (10.0%),(1-1)//comb--1.5% (7.5%),(1-20)//enchanted gem--80.0% (100.0%),(1-1)//future orb--30.0% (90.0%),(1-1)//Enigma stone--Raro,", evoStone: "Crystal stone,Enigma stone", boost: "5", booStone: "Enigma stone", skills: "Teleport, Blink"
    },
    {
        name: "Gardevoir", number: 282, level: 100, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Fada",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "85000",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "Ralts", preEvo1: "Kirlia", evo1: "no", evo2: "no", npreEvo2: "280", npreEvo1: "281", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Charm-100,Dazzling gleam-104,Instant teleportation-100,Confusion-100,Psychic-100,Stored power-110,Healing wish-102,Moonblast-112,Miracle eye-1010,", loots: "(1-1)//cure flower--4.3% (10.0%),(1-1)//comb--2.5% (25.0%),(1-43)//enchanted gem--80.0% (100.0%),(1-1)//future orb--40.0% (100.0%),(1-1)//Enigma stone--Raro,(1-1)//Crystal stone--Raro,", evoStone: "", boost: "30", booStone: "Crystal stone", skills: "Teleport, Blink"
    },
    {
        name: "Shroomish", number: 285, level: 20, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "5000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Breloom", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "286", nevo2: "no",
        maps: 'no', vip: "no", moves: "Leech seed-20,Seed bomb-20,Energy ball-20,Growth-20,Poison powder-27,Sleep powder-28,", loots: "no", evoStone: "Dimensional stone (x10)", boost: "10", booStone: "Dimensional stone", skills: "Cut"
    },
    {
        name: "Breloom", number: 286, level: 80, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Gardestrike", type1: "Grama", type2: "Lutador",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Shroomish", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "285", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Leech seed-80,Bullet seed-80,Energy ball-80,Force palm-80,Sky uppercut-88,Dynamicpunch-80,Sleep plague-80,Giga drain-85,Growth-80,Spores reaction-Passiva,", loots: "no", evoStone: "", boost: "5", booStone: "Dimensional stone", skills: "Rock smash, Headbutt, Cut"
    },
    {
        name: "Slakoth", number: 287, level: 40, ball1: "Greatball", ball2: "Superball",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Vigoroth", evo2: "Slaking", npreEvo2: "no", npreEvo1: "no", nevo1: "288", nevo2: "289",
        maps: 'no', vip: "yes", moves: "Yawn-40,Scratch-40,Hammer arm-40,Fury swipes-40,Focus punch-40,Focus blast-40,", loots: "(1-1)//fur ball--1.3% (6.5%),(1-10)//rubber ball--80.0% (100.0%),(1-1)//fur--26.0% (78.0%),", evoStone: "Heart stone (x2)", boost: "7", booStone: "Heart stone", skills: "Cut, Headbutt"
    },
    {
        name: "Vigoroth", number: 288, level: 70, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Slakoth", evo1: "Slaking", evo2: "no", npreEvo2: "no", npreEvo1: "287", nevo1: "289", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Yawn-70,Scratch-70,Faint attack-70,Hammer arm-70,Fury swipes-70,Focus punch-70,Focus blast-70,", loots: "(1-1)//fur ball--5.0% (100.0%),(1-43)//rubber ball--80.0% (100.0%),(1-1)//fur--45.5% (100.0%),(1-1)//Heart stone--Raro,", evoStone: "Power banana (x10)", boost: "4", booStone: "Heart stone", skills: "Rock smash, Cut, Headbutt"
    },
    {
        name: "Slaking", number: 289, level: 150, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "1000000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Slakoth", preEvo1: "Vigoroth", evo1: "no", evo2: "no", npreEvo2: "287", npreEvo1: "288", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Slash-150,Scratch-150,Faint attack-150,Hammer arm-150,Fury swipes-150,Focus punch-150,Focus blast-150,Slack off-155,Truant-Passiva,", loots: "(1-80)//rubber ball--90.0%,(1-1)//fur ball--90.0%,(1-1)//Gardestrike backpack--2.4%,(1-1)//Power Banana--1.4%,", evoStone: "", boost: "10", booStone: "Mystic star", skills: "Rock smash, Headbutt, Cut"
    },
    {
        name: "Nincada", number: 290, level: 10, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Naturia", clan2: "Orebound", type1: "Inseto", type2: "Terra",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "3000", priceNpc: "300",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Ninjask,Shedinja", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "291,292", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-10,Leech life-15,Fury swipes-10,Mud slap-12,Dig-12,", loots: "(1-1)//bug legs--1.1% (5.5%),(1-5)//bug gosme--80.0% (100.0%),(1-1)//earth ball--80.0% (100.0%),(1-1)//pot of moss bug--13.0% (39.0%),(1-1)//sandbag--13.0% (39.0%),", evoStone: "Ancient stone (x2)=Ninjask ou Darkness stone (x2)=Shedinja", boost: "10", booStone: "Cocoon stone", skills: "Dig, Cut"
    },
    {
        name: "Ninjask", number: 291, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Wingeon", type1: "Inseto", type2: "Voador",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Nincada", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "290", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bug bite-80,Silver wind-80,Fury swipes-80,X scissor-84,Swords dance-86,Substitute-80,Baton pass-90,Evasion-Passiva,Speed boost-Passiva,Ninja slice-Passiva,", loots: "(1-1)//bug legs--4.5% (22.5%),(1-21)//bug gosme--80.0% (100.0%),(1-21)//straw--80.0% (100.0%),(1-1)//pot of moss bug--22.5% (67.5%),(1-1)//feather--22.5% (67.5%),(1-1)//Cocoon stone--Raro,(1-1)//Ancient stone--raro,", evoStone: "", boost: "3", booStone: "Cocoon stone", skills: "Cut"
    },
    {
        name: "Shedinja", number: 292, level: 60, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Malefic", type1: "Inseto", type2: "Noturno",
        region: "Hoen", generation: "3", difficulty: "Não capturável", xpCaught: "0", priceNpc: "12000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Nincada", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "290", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Leech life-65,Silver wind-60,Shadow ball-60,Confuse ray-60,Bug buzz-66,Shadow counter-Passiva,Wonder guard-Passiva,", loots: "(1-1)//bug legs--3.0% (15.0%),(1-15)//bug gosme--80.0% (100.0%),(1-15)//ghost essence--80.0% (100.0%),(1-1)//pot of moss bug--32.0% (96.0%),(1-1)//Cocoon stone--Raro,(1-1)//Darkness stone--raro,", evoStone: "", boost: "4", booStone: "Cocoon stone", skills: "Cut"
    },
    {
        name: "Whismur", number: 293, level: 20, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Loudred", evo2: "Exploud", npreEvo2: "no", npreEvo1: "no", nevo1: "294", nevo2: "295",
        maps: 'no', vip: "yes", moves: "Super sonic-20,Tackle-20,Pound-20,Hyper voice-20,Hyper beam-26,Uproar-Passiva,", loots: "(1-1)//cute ball--2.0% (10.0%),(1-10)//rubber ball--80.0% (100.0%),(1-1)//nail--20.0% (60.0%),", evoStone: "Heart stone", boost: "10", booStone: "Heart stone", skills: "Headbutt"
    },
    {
        name: "Loudred", number: 294, level: 50, ball1: "Greatball", ball2: "Superball",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Whismur", evo1: "Exploud", evo2: "no", npreEvo2: "no", npreEvo1: "293", nevo1: "295", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Super sonic-50,Bite-50,Crunch-50,Hyper voice-50,Hyper beam-50,Uproar-Passiva,", loots: "(1-1)//cute ball--4.0% (20.0%),(1-20)//rubber ball--80.0% (100.0%),(1-1)//eruption ears--2.1% (10.5%),(1-1)//Heart stone--Raro,(1-1)//nail--35.0% (100.0%),", evoStone: "Heart stone (x2)", boost: "5", booStone: "Heart stone", skills: "Dig, Headbutt, Rock smash"
    },
    {
        name: "Exploud", number: 295, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Whismur", preEvo1: "Loudred", evo1: "no", evo2: "no", npreEvo2: "293", npreEvo1: "294", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Super sonic-80,Bite-80,Crunch-80,Pound-80,Fire fang-80,Echoed voice-85,Boomburst-95,Hyper voice-80,Hyper beam-90,Uproar-Passiva,Leftovers-Passiva,", loots: "(1-1)//cute ball--8.5% (51.0%),(1-43)//rubber ball--80.0% (100.0%),(1-1)//eruption ears--4.5% (54.0%),(1-1)//Heart stone--Raro,(1-1)//nail--50.0% (100.0%),", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Dig, Headbutt, Rock smash"
    },
    {
        name: "Makuhita", number: 296, level: 40, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "80000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Hariyama", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "297", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Tackle-40,Low kick-40,Leap strike-45,Cross chop-44,Close combat-40,Arm thrust-46,Smellingsalt-40,Foresight-Passiva,", loots: "(1-1)//samurai hair--1.3% (6.5%),(1-10)//band aid--80.0% (100.0%),", evoStone: "Punch stone (x2)", boost: "8", booStone: "Punch stone", skills: "Rock smash, Cut, Headbutt"
    },
    {
        name: "Hariyama", number: 297, level: 100, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "90000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Makuhita", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "296", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Tackle-100,Low kick-100,Leap strike-105,Rock tomb-100,Stone edge-100,Close combat-100,Arm thrust-106,Vital throw-108,Smellingsalt-100,Foresight-Passiva,Thick fat-Passiva,", loots: "(1-1)//samurai hair--5.0% (75.0%),(1-1)//big hands--3.5% (35.0%),(1-43)//band aid--80.0% (100.0%),(1-1)//Punch stone--Raro,(1-1)//Ancient stone--Raro,", evoStone: "", boost: "30", booStone: "Ancient stone", skills: "Rock smash, Cut, Headbutt"
    },
    {
        name: "Nosepass", number: 299, level: 40, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Nenhum", type1: "Pedra", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Probopass", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "476", nevo2: "no",
        maps: 'no', vip: "no", moves: "Iron head-40,Tackle-40,Rock throw-40,Stone edge-40,Power gem-40,Rock blast-40,Harden-40,", loots: "no", evoStone: "Mirror stone (x10)", boost: "8", booStone: "Mirror stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Sableye", number: 302, level: 60, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Nenhum", type1: "Noturno", type2: "Fantasma",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "22000",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Scratch-60,Fury swipes-60,Shadow sphere-60,Faint attack-60,Night shade-60,Shadow claw-60,Agility-60,Recover-65,", loots: "(1-1)//big crystal--1.7% (8.5%),(1-1)//ruby--3.6% (18.3%),(1-39)//ghost essence--80.0% (100.0%),(1-1)//Darkness stone--Raro,", evoStone: "", boost: "5", booStone: "Darkness stone", skills: "Cut"
    },
    {
        name: "Mawile", number: 303, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Ironhard", clan2: "Psycraft", type1: "Metal", type2: "Fada",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "80000",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron head-80,Bite-80,Play rough-80,Impale-83,Flash cannon-88,Spit up-83,Swallow-83,Stockpile-83,Fake tears-86,Clear pile-Passiva,", loots: "(1-1)//metal jaw--5.7% (28.5%),(1-11)//piece of steel--80.0% (100.0%),(1-1)//Metal stone--Raro,", evoStone: "", boost: "50", booStone: "Metal stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Aron", number: 304, level: 30, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Ironhard", clan2: "Orebound", type1: "Metal", type2: "Pedra",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "100000", priceNpc: "15000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Lairon", evo2: "Aggron", npreEvo2: "no", npreEvo1: "no", nevo1: "305", nevo2: "306",
        maps: 'no', vip: "yes", moves: "Iron head-30,Mud slap-30,Stone edge-30,Metal burst-30,Metal claw-34,Harden-30,", loots: "(1-1)//metal hull--Raro,(1-5)//piece of steel--80.0% (100.0%),(1-5)//small stone--80.0% (100.0%),(1-1)//stone orb--20.0% (60.0%),", evoStone: "Rock stone", boost: "10", booStone: "Rock stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Lairon", number: 305, level: 60, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Ironhard", clan2: "Orebound", type1: "Metal", type2: "Pedra",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "20000",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Aron", evo1: "Aggron", evo2: "no", npreEvo2: "no", npreEvo1: "304", nevo1: "306", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron head-60,Iron tail-60,Mud slap-60,Stone edge-60,Metal burst-60,Metal claw-67,Meteor mash-60,Harden-60,", loots: "(1-1)//metal hull--2.5% (12.5%),(1-15)//piece of steel--80.0% (100.0%),(1-15)//small stone--80.0% (100.0%),(1-1)//Rock stone--Raro,(1-1)//stone orb--35.0% (100.0%),", evoStone: "Metal stone,Rock stone", boost: "5", booStone: "Rock stone", skills: "Ride, Rock smash, Headbutt"
    },
    {
        name: "Aggron", number: 306, level: 100, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Ironhard", clan2: "Orebound", type1: "Metal", type2: "Pedra",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "75000",
        shiny: "yes", fast: "no", heavy: "yes", preEvo2: "Aron", preEvo1: "Lairon", evo1: "no", evo2: "no", npreEvo2: "304", npreEvo1: "305", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron head-100,Iron tail-100,Mud slap-100,Stone edge-100,Metal burst-100,Metal claw-107,Meteor mash-100,Flash cannon-108,Harden-100,Sturdy-Passiva,", loots: "(1-1)//metal hull--4.3% (63.8%),(1-21)//piece of steel--80.0% (100.0%),(1-21)//small stone--80.0% (100.0%),(1-1)//Rock stone--Raro,(1-1)//Metal stone--Raro,(1-1)//stone orb--50.0% (100.0%),(1-1)//Aggronite--Raro,", evoStone: "", boost: "30", booStone: "Metal stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Meditite", number: 307, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Gardestrike", clan2: "Psycraft", type1: "Lutador", type2: "Psiquico",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3500",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Medicham", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "308", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Low kick-30,Mega kick-30,Drain punch-30,Confusion-30,Psychic-30,Hi jump kick-35,", loots: "(1-1)//mediling--Raro,(1-5)//band aid--80.0% (100.0%),(1-5)//enchanted gem--80.0% (100.0%),(1-1)//future orb--20.0% (60.0%),", evoStone: "Punch stone,Enigma stone", boost: "10", booStone: "Punch stone", skills: "Rock smash"
    },
    {
        name: "Medicham", number: 308, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Psycraft", type1: "Lutador", type2: "Psiquico",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Meditite", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "307", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Low kick-80,Mega kick-80,Drain punch-80,Confusion-80,Psychic-80,Hi jump kick-80,Meditate-90,Focus energy-90,Miracle eye-1000,Evasion-Passiva,Foresight-Passiva,", loots: "(1-1)//mediling--4.3% (93.5%),(1-21)//band aid--80.0% (100.0%),(1-21)//enchanted gem--80.0% (100.0%),(1-1)//future orb--30.0% (90.0%),(1-1)//Punch stone--Raro,(1-1)//Enigma stone--Raro,", evoStone: "", boost: "3", booStone: "Punch stone", skills: "Rock smash"
    },
    {
        name: "Electrike", number: 309, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3500",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Manectric", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "310", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Swift-30,Bite-30,Thunder wave-30,Spark-30,Thunder fang-30,Thunder-40,Charge-Passiva,", loots: "(1-1)//shock topknot--Raro,(1-10)//screw--80.0% (100.0%),(1-1)//electric box--20.0% (60.0%),", evoStone: "Thunder stone (x2)", boost: "10", booStone: "Thunder stone", skills: "Light, Dig"
    },
    {
        name: "Manectric", number: 310, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13000",
        shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Electrike", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "309", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Roar-90,Swift-80,Bite-80,Spark-80,Thunder fang-80,Thunder-80,Discharge-85,Wild charge-85,Magnetic flux-80,", loots: "(1-1)//shock topknot--4.3% (59.5%),(1-43)//screw--80.0% (100.0%),(1-1)//electric box--20.0% (60.0%),(1-1)//Thunder stone--Raro,", evoStone: "", boost: "3", booStone: "Thunder stone", skills: "Light, Dig, Ride"
    },
    {
        name: "Plusle", number: 311, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "15000", priceNpc: "4500",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Sweet kiss-30,Spark-30,Thunder wrath-38,Wish-30,", loots: "(1-1)//electric rat tail--2.0%,(1-20)//screw--80.0%,(1-1)//electric box--17.0%,", evoStone: "", boost: "9", booStone: "Thunder stone", skills: "Light"
    },
    {
        name: "Minun", number: 312, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "15000", priceNpc: "4500",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Spark-30Nuzzle-35,Helping hand-30,Fake tears-36,Wish-30,", loots: "(1-1)//electric rat tail--2.0%,(1-20)//screw--80.0%,(1-1)//electric box--17.0%,", evoStone: "", boost: "9", booStone: "Thunder stone", skills: "Light"
    },
    {
        name: "Roselia", number: 315, level: 70, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Malefic", type1: "Grama", type2: "Venenoso",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "200000", priceNpc: "Unseleable",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Magical leaf-70,Petal dance-70,Toxic-70,Leaf tornado-80,Synthesis-70,Petal blizzard-70,Grass whistle-70,Growth-70,", loots: "no", evoStone: "", boost: "7", booStone: "Mirror stone", skills: "Cut"
    },
    {
        name: "Numel", number: 322, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Volcanic", clan2: "Orebound", type1: "Fogo", type2: "Terra",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3500",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Camerupt", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "323", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Volcano shot-30,Ember-30,Rock slide-30,Flame burst-30,Lava plume-36,Scary face-32,", loots: "(1-1)//Nu ball--1.1 (5.5%),(1-5)//essence of fire--80.0% (100.0%),(1-1)//pot of lava--13.0% (39.0%),(1-1)//sandbag--13.0% (39.0%),", evoStone: "Fire stone,Earth stone", boost: "10", booStone: "Earth stone", skills: "Rock smash, Dig, Headbutt"
    },
    {
        name: "Camerupt", number: 323, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Orebound", type1: "Fogo", type2: "Terra",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13000",
        shiny: "yes", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Numel", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "322", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Volcano shot-80,Ember-80,Mud bomb-80,Flame burst-80,Lava plume-82,Earthquake-90,Fissure-90,Scary face-82,Solid rock-Passiva,", loots: "(1-1)//Nu ball--4.5% (18.0%),(1-21)//essence of fire--80.0% (100.0%),(1-21)//earth ball--80.0% (100.0%),(1-1)//pot of lava--22.0% (22.0%),(1-1)//sandbag--22.0% (22.0%),(1-1)//Fire stone--Raro,(1-1)//Earth stone--Raro,(1-1)//mini volcano--Raro,", evoStone: "", boost: "3", booStone: "Earth stone", skills: "Rock smash, Dig, Ride, Headbutt"
    },
    {
        name: "Torkoal", number: 324, level: 100, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "1000000", priceNpc: "120000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Ember-100,Flamethrower-100,Withdraw-104,Smokescreen-100,White smoke-100,Fireball-100,Inferno-110,Heat wave-104,Heatzone-110,", loots: "(1-1)//black hull--10.0% (100.0%),(1-63)//essence of fire--100.0% (100.0%),(1-1)//pot of lava--50.0% (100.0%),(1-1)//Fire stone--Raro,(1-1)//Ancient stone--Raro,", evoStone: "", boost: "30", booStone: "Ancient stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Spoink", number: 325, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3500",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Grumpig", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "326", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Headbutt-30,Psywave-30,Psy pulse-30,Psychic-30,Confuse ray-34,Magic coat-38,", loots: "(1-1)//springs--1.3% (6.5%),(1-10)//enchanted gem--80.0% (100.0%),(1-1)//future orb--20.0% (60.0%),", evoStone: "Enigma stone (x2)", boost: "10", booStone: "Enigma stone", skills: ""
    },
    {
        name: "Grumpig", number: 326, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13500",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Spoink", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "325", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Headbutt-80,Shadowave-80,Psy pulse-80,Psychic-80,Teeter dance-85,Power gem-80,Bulldoze-80,Rest-86,Miracle eye-1000,Thick fat-Passiva,", loots: "(1-1)//springs--5.0% (90.0%),(1-43)//enchanted gem--80.0% (100.0%),(1-1)//future orb--20.0% (60.0%),(1-1)//Enigma stone--Raro,", evoStone: "", boost: "3", booStone: "Enigma stone", skills: "Teleport, Light"
    },
    {
        name: "Trapinch", number: 328, level: 20, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Vibrava", evo2: "Flygon", npreEvo2: "no", npreEvo1: "no", nevo1: "329", nevo2: "330",
        maps: 'no', vip: "yes", moves: "Sand attack-20,Bite-20,Mud shot-20,Mud slap-22,Dig-25,Earth power-25,", loots: "(1-1)//strange ball--Raro,(1-10)//earth ball--80.0% (100.0%),(1-1)//sandbag--20.0% (60.0%),", evoStone: "Earth stone", boost: "10", booStone: "Earth stone", skills: "Dig, Rock smash"
    },
    {
        name: "Vibrava", number: 329, level: 50, ball1: "Greatball", ball2: "Superball",
        clan1: "Orebound", clan2: "Wingeon", type1: "Terra", type2: "Dragão",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Trapinch", evo1: "Flygon", evo2: "no", npreEvo2: "no", npreEvo1: "328", nevo1: "330", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Super sonic-50,Rock slide-50,Sand tomb-52,Bulldoze-50,Earthquake-56,Levitate-Passiva,", loots: "(1-1)//sand tail--2.0% (10.0%),(1-10)//dragon scale--80.0% (100.0%),(1-10)//earth ball--80.0% (100.0%),(1-1)//sandbag--30.0% (90.0%),(1-1)//Earth stone--Raro,", evoStone: "Crystal stone,Earth stone", boost: "5", booStone: "Earth stone", skills: "Dig, Rock smash"
    },
    {
        name: "Flygon", number: 330, level: 80, ball1: "Ultraball", ball2: "Maguball",
        clan1: "Orebound", clan2: "Wingeon", type1: "Terra", type2: "Dragão",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "500000", priceNpc: "58000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "Trapinch", preEvo1: "Vibrava", evo1: "no", evo2: "no", npreEvo2: "328", npreEvo1: "329", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Super sonic-80,Rock slide-80,Sand tomb-82,Dragon flight-80,Dragon breath-82,Fissure-90,Hyper beam-88,Earthquake-90,Levitate-Passiva,", loots: "(1-1)//sand tail--4.3% (17.0%),(1-21)//dragon scale--80.0% (100.0%),(1-21)//earth ball--80.0% (100.0%),(1-1)//sandbag--50.0% (50.0%),(1-1)//Earth stone--Raro,(1-1)//Crystal stone--Raro,", evoStone: "", boost: "30", booStone: "Crystal stone", skills: "Fly, Dig, Rock smash"
    },
    {
        name: "Swablu", number: 333, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Gardestrike", clan2: "Wingeon", type1: "Normal", type2: "Voador",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "15000", priceNpc: "5000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Altaria", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "334", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Peck-30,Pluck-30,Sing-30,Dragon breath-30,Dragon mist-32,Roost-36,Tailwind-30,Safeguard-38,", loots: "(1-1)//cloud--Raro,(1-5)//rubber ball--80.0% (100.0%),(1-5)//straw--80.0% (100.0%),(1-1)//feather--13.0% (39.0%),", evoStone: "Crystal stone,Feather stone", boost: "10", booStone: "Feather stone", skills: ""
    },
    {
        name: "Altaria", number: 334, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Wingeon", clan2: "Nenhum", type1: "Dragão", type2: "Voador",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "500000", priceNpc: "60000",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Swablu", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "333", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Attract-80,Pluck-85,Sing-80,Dragon breath-82,Dragon mist-85,Sky attack-90,Roost-85,Tailwind-80,Safeguard-90,Mirror move-86,Cloud nine-Passiva,", loots: "(1-1)//cloud--4.3% (21.3%),(1-21)//dragon scale--80.0% (100.0%),(1-21)//straw--80.0% (100.0%),(1-1)//feather--25.5% (76.5%),(1-1)//Feather stone--Raro,(1-1)//Crystal stone--Raro,", evoStone: "", boost: "3", booStone: "Feather stone", skills: "Fly"
    },
    {
        name: "Zangoose", number: 335, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "22000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-80,Slash-80,Dig-82,Pursuit-80,Razor wind-88,Fury swipes-80,Last resort-85,Swords dance-88,Taunt-80,Toxic boost-Passiva,Immunity-Passiva,", loots: "(1-1)//tribe mark--4.3% (59.5%,(1-1)//wool ball--24.3% (72.8%),(1-43)//rubber ball--80.0% (100.0%),(1-1)//Heart stone--Raro,", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Dig, Rock smash, Headbutt, Cut"
    },
    {
        name: "Seviper", number: 336, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "50000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-80,Poison tail-80,Acid-80,Toxic-80,Gastro acid-82,Venomous gale-85,Venoshock-80,Shed skin-Passiva,Vipers fang-Passiva,", loots: "(1-1)//poisonous tail--4.3% (72.3%),(1-43)//bottle of poison--80.0% (100.0%),(1-1)//Venom stone--Raro,(1-1)//tooth--60.0% (100.0%),", evoStone: "", boost: "3", booStone: "Venom stone", skills: "Dig, Headbutt"
    },
    {
        name: "Corphish", number: 341, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3500",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Crawdaunt", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "342", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bubbles-35,Bubblebeam-30,Crabhammer-30,Dark pulse-30,Night slash-38,Harden-40,Swords dance-38,", loots: "(1-1)//lobster claw--Raro,(1-10)//water gem--80.0% (100.0%),(1-1)//water pendant--21.0% (63.0%),", evoStone: "Water stone, Darkness stone", boost: "10", booStone: "Water stone", skills: "Dig, Rock smash, Cut"
    },
    {
        name: "Crawdaunt", number: 342, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Malefic", type1: "Água", type2: "Noturno",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13500",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Corphish", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "341", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bubbles-85,Bubblebeam-80,Dark pulse-80,Dig-82,Crabhammer-80,Guillotine-82,Night slash-80,Swords dance-88,Protect-80,", loots: "(1-1)//lobster claw--4.3% (51.0%),(1-21)//dark gem--80.0% (100.0%),(1-21)//water gem--80.0% (100.0%),(1-1)//Darkness stone--Raro,(1-1)//Water stone--Raro,(1-1)//water pendant--45.0% (100.0%),", evoStone: "", boost: "3", booStone: "Water stone", skills: "Dig, Rock smash, Cut, Surf"
    },
    {
        name: "Baltoy", number: 343, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Orebound", clan2: "Psycraft", type1: "Terra", type2: "Psiquico",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3500",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Claydol", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "344", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Mud slap-30,Extrasensory-30,Psybeam-30,Psychic-30,Earth power-33,Guard split-30,Levitate-Passiva,", loots: "(1-1)//pawn--Raro,(1-5)//earth ball--80.0% (100.0%),(1-5)//enchanted gem--80.0% (100.0%),(1-1)//future orb--13.0% (39.0%),(1-1)//sandbag--13.0% (39.0%),", evoStone: "Earth stone,Enigma stone", boost: "10", booStone: "Earth stone", skills: "Rock smash, Dig, Headbutt"
    },
    {
        name: "Claydol", number: 344, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Psycraft", type1: "Terra", type2: "Psiquico",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13500",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Baltoy", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "343", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Mud sport-80,Extrasensory-80,Psybeam-80,Psyshock-88,Earth power-83,Earthquake-86,Sandstorm-80,Heal block-80,Guard split-80,Protect-80,Levitate-Passiva,", loots: "(1-1)//pawn--4.3% (85.0%),(1-21)//earth ball--80.0% (100.0%),(1-21)//enchanted gem--80.0% (100.0%),(1-1)//future orb--22.5% (90.0%),(1-1)//sandbag--22.5% (90.0%),(1-1)//Enigma stone--Raro,(1-1)//Earth stone--Raro,", evoStone: "", boost: "3", booStone: "Earth stone", skills: "Rock smash, Dig, Headbutt, Teleport"
    },
    {
        name: "Lileep", number: 345, level: 20, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Naturia", type1: "Pedra", type2: "Grama",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "20000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Cradily", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "346", nevo2: "no",
        maps: 'no', vip: "no", moves: "Grass knot-20,Bind-20,Energy ball-20,Rock tomb-20,Giga drain-25,Barrier-30,", loots: "no", evoStone: "Mirror stone (x25)", boost: "10", booStone: "Mirror stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Cradily", number: 346, level: 100, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Naturia", type1: "Pedra", type2: "Grama",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "270000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Lileep", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "345", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Wring out-100,Bind-100,Energy ball-100,Grass knot-100,Rock tomb-100,Solar beam-100,Giga drain-105,Frenzy plant-110,Magic coat-106,Barrier-120,", loots: "no", evoStone: "", boost: "3", booStone: "Mirror stone", skills: "Dig, Rock smash, Cut, Headbutt"
    },
    {
        name: "Anorith", number: 347, level: 20, ball1: "Masterball", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Naturia", type1: "Pedra", type2: "Inseto",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "0", priceNpc: "20000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Armaldo", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "348", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Rock throw-20,Rock slide-20,Rock tomb-20,Fury cutter-25,Stone edge-20,Hunter mark-20,X scissor-25,", loots: "(1-12)//bug gosme--80.0%,(1-12)//small stone--80.0%,(1-1)//stone orb--31.0%,(1-1)//pot of moss bug--39.0%,(1-1)//claw fossil--Raro,", evoStone: "Rock stone,Crystal stone", boost: "10", booStone: "Cocoon stone", skills: "Dig, Rock smash, Cut"
    },
    {
        name: "Armaldo", number: 348, level: 80, ball1: "Masterball", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Naturia", type1: "Pedra", type2: "Inseto",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "0", priceNpc: "75000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Anorith", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "347", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Rock throw-100,Rock slide-100,Rock tomb-100,Fury cutter-105,Crush claw-100,Stone edge-100,Hunter mark-100,X scissor-105,Rock blast-100,Protect-100,", loots: "(1-20)//bug gosme--80.0%,(1-20)//small stone--80.0%,(1-1)//Rock stone--Raro,(1-1)//Cocoon stone--Raro,(1-1)//stone orb--31.0% (62.0%),(1-1)//pot of moss bug--39.0% (78.0%),(1-1)//claw fossil--Raro,", evoStone: "", boost: "3", booStone: "Cocoon stone", skills: "Dig, Rock smash, Cut, Headbutt"
    },
    {
        name: "Feebas", number: 349, level: 10, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "3000", priceNpc: "300",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Milotic", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "350", nevo2: "no",
        maps: 'no', vip: "no", moves: "Tackle-10,Splash-10,", loots: "(1-10)//water gem--80.0% (100.0%),(1-1)//water pendant--21.0% (63.0%),", evoStone: "Prism scale (x10)", boost: "20", booStone: "Water stone", skills: ""
    },
    {
        name: "Milotic", number: 350, level: 150, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Nenhum", type1: "Água", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "1000000",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Feebas", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "349", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Aqua tail-150,Wrap-150,Water gun-150,Water pulse-150,Twister-154,Waterfall-150,Hydropump-158,Rain dance-150,Aqua ring-150,", loots: "(1-80)//water gem--90.0% (100.0%),(1-1)//beautiful scales--60.0%,(1-1)//Seavell backpack--2.4%,(1-1)//Prism scale--1.4%,", evoStone: "", boost: "10", booStone: "Mystic star", skills: "Surf"
    },
    {
        name: "Castform", number: 351, level: 100, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "120000",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Forecast-Passiva,", loots: "(1-20)//essence of fire--80.0%,(1-20)//snowball--80.0%,(1-20)//water gem--80.0%,(1-1)//pot of lava--80.0%,(1-1)//ice orb--80.0%,(1-1)//water pendant--80.0%,(1-1)//Water stone--1.3%,(1-1)//Fire stone--1.3%,(1-1)//Ice stone--1.3%,", evoStone: "", boost: "50", booStone: "Mystic star", skills: ""
    },
    {
        name: "Kecleon", number: 352, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "500000", priceNpc: "80000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Lick-80,Shadow ball-80,Fury swipes-80,Sucker punch-83,Camouflage-80,Shadow sneak-85,Shadow claw-80,Ancient power-95,Color change-Passiva,", loots: "(1-1)//bitten apple--80.0%,(1-1)//Heart stone--20.0%,(1-1)//pizza--30.0%,(1-1)//hamburguer--30.0%,(1-1)//hotdog--30.0%,", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Dig, Headbutt, Cut"
    },
    {
        name: "Shuppet", number: 353, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Malefic", clan2: "Nenhum", type1: "Fantasma", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3500",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Banette", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "354", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Shadow ball-30,Shadow sphere-30,Faint attack-30,Night shade-35,Invisible-30,Dark accurate-1000,", loots: "(1-10)//ghost essence--80.0% (100.0%),(1-1)//doll star--1.5% (7.5%),", evoStone: "Darkness stone (x2)", boost: "10", booStone: "Darkness stone", skills: ""
    },
    {
        name: "Banette", number: 354, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Nenhum", type1: "Fantasma", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Shuppet", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "353", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Shadow ball-80,Shadow sphere-80,Shadow punch-84,Ominous wind-85,Shadow storm-86,Invisible-80,Curse-86,Torment-85,Dark accurate-1000,Cursed body-Passiva,Insomnia-Passiva,", loots: "(1-43)//ghost essence--80.0% (100.0%),(1-1)//doll star--5.0% (60.0%),(1-1)//Darkness stone--Raro,", evoStone: "", boost: "3", booStone: "Darkness stone", skills: "Headbutt"
    },
    {
        name: "Duskull", number: 355, level: 40, ball1: "Greatball", ball2: "Superball",
        clan1: "Malefic", clan2: "Nenhum", type1: "Fantasma", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "15000", priceNpc: "8000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Dusclops", evo2: "Dusknoir", npreEvo2: "no", npreEvo1: "no", nevo1: "356", nevo2: "477",
        maps: 'no', vip: "yes", moves: "Shadow ball-40,Shadow punch-44,Night shade-40,Confuse ray-40,Dark accurate-1000,", loots: "(1-20)//ghost essence--80.0% (100.0%),(1-1)//ghost skull--2.0% (10.0%),", evoStone: "Darkness stone", boost: "7", booStone: "Darkness stone", skills: "Headbutt"
    },
    {
        name: "Dusclops", number: 356, level: 70, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Nenhum", type1: "Fantasma", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Duskull", evo1: "Dusknoir", evo2: "no", npreEvo2: "no", npreEvo1: "355", nevo1: "477", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Shadow ball-70,Shadow punch-74,Night shade-70,Confuse ray-70,Hex-75,Curse-76,Dark accurate-1000,", loots: "(1-43)//ghost essence--80.0% (100.0%),(1-1)//ghost skull--5.0% (30.0%),(1-1)//Darkness stone--Raro,(1-1)//creepy eye--Raro,", evoStone: "Reaper cloth (x10)", boost: "4", booStone: "Darkness stone", skills: "Headbutt"
    },
    {
        name: "Tropius", number: 357, level: 100, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Wingeon", type1: "Grama", type2: "Voador",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "1000000", priceNpc: "120000",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Seed bomb-100,Body slam-100,Razor leaf-100,Magical leaf-100,Air slash-103,Stomp-105,Leaf tornado-110,Leaf storm-110,Growth-100,", loots: "(1-1)//palm leaves--4.3% (63.8%),(1-21)//straw--80.0% (100.0%),(1-21)//seed--80.0% (100.0%),(1-1)//feather--13.0% (100.0%),(1-1)//bird beak--25.5% (100.0%),(1-1)//Feather stone--Raro,(1-1)//Leaf stone--Raro,(1-1)//Ancient stone--Raro,", evoStone: "", boost: "30", booStone: "Ancient stone", skills: "Rock smash, Cut, Headbutt, Fly"
    },
    {
        name: "Absol", number: 359, level: 100, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Nenhum", type1: "Noturno", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "1000000", priceNpc: "120000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-100,Shadowave-100,Pursuit-100,Dark pulse-100,Night slash-100,Sucker punch-103,Razor wind-108,Assurance-108,Swords dance-108,Taunt-100,Justified-Passiva,", loots: "(1-1)//dark moon--Raro,(1-43)//dark gem--80.0% (100.0%),(1-1)//Darkness stone--Raro,(1-1)//Ancient stone--Raro,", evoStone: "", boost: "30", booStone: "Ancient stone", skills: "Rock smash, Dig, Headbutt, Cut, Ride"
    },
    {
        name: "Wynaut", number: 360, level: 70, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Psycraft", clan2: "Nenhum", type1: "Psiquico", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "0",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Woobuffet", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "202", nevo2: "no",
        maps: 'no', vip: "no", moves: "Safeguard-80,Stunning confusion-Passiva,", loots: "no", evoStone: "Ancient stone (x2)", boost: "7", booStone: "Mirror stone", skills: "Headbutt, Blink"
    },
    {
        name: "Snorunt", number: 361, level: 30, ball1: "Pokeball", ball2: "Greatball",
        clan1: "Seavell", clan2: "Nenhum", type1: "Gelo", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "10000", priceNpc: "3500",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Glalie,Froslass", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "362,478", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-30,Ice shards-30,Ice fang-30,Icy wind-30,Ice beam-32,Frost power-36,", loots: "(1-1)//ice blocks--Raro,(1-10)//snowball--80.0% (100.0%),(1-1)//ice orb--10.0% (30.0%),", evoStone: "Ice stone (x2)=Glalie ou Dawn stone=Froslass", boost: "10", booStone: "Ice stone", skills: ""
    },
    {
        name: "Glalie", number: 362, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Nenhum", type1: "Gelo", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "200000", priceNpc: "13500",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Snorunt", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "361", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-80,Ice shards-80,Ice fang-80,Icy wind-80,Powder snow-80,Frost power-80,Sheer cold-90,Blizzard-86,Absolute zero-Passiva,", loots: "(1-1)//ice blocks--4.3% (85.0%),(1-43)//snowball--80.0% (100.0%),(1-1)//ice orb--25.0% (75.0%),(1-1)//Ice stone--Raro,", evoStone: "", boost: "3", booStone: "Ice stone", skills: "Headbutt"
    },
    {
        name: "Spheal", number: 363, level: 30, ball1: "Greatball", ball2: "Superball",
        clan1: "Seavell", clan2: "Nenhum", type1: "Gelo", type2: "Água",
        region: "Hoen", generation: "3", difficulty: "Fácil", xpCaught: "15000", priceNpc: "6000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Sealeo", evo2: "Walrein", npreEvo2: "no", npreEvo1: "no", nevo1: "364", nevo2: "365",
        maps: 'no', vip: "yes", moves: "Ice shards-30,Ice fang-30,Ice beam-30,Ice ball-30,Frost breath-32,Powder snow-38,Defense curl-30,", loots: "(1-1)//seal mustache--Raro,(1-5)//snowball--80.0% (100.0%),(1-5)//water gem--80.0% (100.0%),(1-1)//ice orb--5.0% (15.0%),(1-1)//water pendant--13.0% (39.0%),(1-1)//nail--20.0% (60.0%),", evoStone: "Ice stone", boost: "10", booStone: "Ice stone", skills: "Headbutt"
    },
    {
        name: "Sealeo", number: 364, level: 60, ball1: "Greatball", ball2: "Superball",
        clan1: "Seavell", clan2: "Nenhum", type1: "Gelo", type2: "Água",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "50000", priceNpc: "11000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Spheal", evo1: "Walrein", evo2: "no", npreEvo2: "no", npreEvo1: "363", nevo1: "365", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Ice shards-60,Ice fang-60,Ice beam-60,Ice ball-60,Frost breath-62,Powder snow-60,Aurora beam-64,Hail-65,Defense curl-60,", loots: "(1-1)//seal mustache--2.0 (10.0%),(1-10)//snowball--80.0% (100.0%),(1-10)//water gem--80.0% (100.0%),(1-1)//ice orb--1.2% (3.6%),(1-1)//water pendant--18.0% (54.0%),(1-1)//Ice stone--Raro,(1-1)//Water stone--Raro,(1-1)//nail--35.0% (100.0%),", evoStone: "Crystal stone,Ice stone", boost: "5", booStone: "Ice stone", skills: "Surf, Headbutt"
    },
    {
        name: "Walrein", number: 365, level: 100, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Nenhum", type1: "Gelo", type2: "Água",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "500000", priceNpc: "66000",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "Spheal", preEvo1: "Sealeo", evo1: "no", evo2: "no", npreEvo2: "363", npreEvo1: "364", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Ice shards-100,Ice fang-100,Ice beam-100,Ice ball-100,Frost breath-102,Powder snow-100,Aurora beam-104,Hail-108,Rest-106,", loots: "(1-1)//seal mustache--4.3 (63.8%),(1-21)//snowball--80.0% (100.0%),(1-21)//water gem--80.0% (100.0%),(1-1)//ice orb--3.0% (30.0%),(1-1)//water pendant--25.5% (100.0%),(1-1)//Ice stone--Raro,(1-1)//Crystal stone--Raro,(1-1)//nail--50.0% (100.0%),", evoStone: "", boost: "30", booStone: "Crystal stone", skills: "Surf, Headbutt"
    },
    {
        name: "Bagon", number: 371, level: 40, ball1: "Superball", ball2: "Ultraball",
        clan1: "Wingeon", clan2: "Nenhum", type1: "Dragão", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Médio", xpCaught: "100000", priceNpc: "15000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Shelgon", evo2: "Salamence", npreEvo2: "no", npreEvo1: "no", nevo1: "372", nevo2: "373",
        maps: 'no', vip: "yes", moves: "Bite-40,Crunch-40,Dragon tail-40,Dragon claw-40,Dragon breath-42,Dragon pulse-45,Scary face-42,", loots: "(1-1)//mini wings--Raro,(1-10)//dragon scale--80.0% (100.0%),", evoStone: "Crystal stone", boost: "50", booStone: "Crystal stone", skills: "Headbutt"
    },
    {
        name: "Shelgon", number: 372, level: 70, ball1: "Ultraball", ball2: "Taleball",
        clan1: "Wingeon", clan2: "Nenhum", type1: "Dragão", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "500000", priceNpc: "65000",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Bagon", evo1: "Salamence", evo2: "no", npreEvo2: "no", npreEvo1: "371", nevo1: "373", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-70,Crunch-70,Dragon tail-70,Dragon claw-70,Dragon breath-72,Dragon pulse-74,Draco meteor-76,", loots: "(1-1)//mini wings--Raro,(1-20)//dragon scale--80.0% (100.0%),(1-1)//Crystal stone--Raro,", evoStone: "Bloody wing (x10)", boost: "50", booStone: "Crystal stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Salamence", number: 373, level: 150, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Wingeon", clan2: "Nenhum", type1: "Dragão", type2: "Voador",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "1000000",
        shiny: "no", fast: "yes", heavy: "yes", preEvo2: "Bagon", preEvo1: "Shelgon", evo1: "no", evo2: "no", npreEvo2: "371", npreEvo1: "372", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-150,Crunch-150,Dragon tail-150,Dragon claw-150,Dragon breath-152,Dragon pulse-155,Hyper beam-158,Draco meteor-165,Outrage-165,", loots: "(1-80)//dragon scale--80.0% (100.0%),(1-1)//mini wings--90.0%,(1-1)//dragon tooth--90.0%,(1-1)//Wingeon backpack--2.4%,(1-1)//Bloody wings--1.4%,", evoStone: "", boost: "10", booStone: "Mystic star", skills: "Rock smash, Cut, Headbutt, Fly"
    },
    {
        name: "Beldum", number: 374, level: 50, ball1: "Superball", ball2: "Ultraball",
        clan1: "Ironhard", clan2: "Psycraft", type1: "Metal", type2: "Psiquico",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "100000", priceNpc: "15000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Metang", evo2: "Metagross", npreEvo2: "no", npreEvo1: "no", nevo1: "375", nevo2: "376",
        maps: 'no', vip: "yes", moves: "Iron head-50,Psy pulse-50,Hammer arm-50,Psychic-50,Metal claw-57,", loots: "(1-1)//tech ball--Raro,(1-10)//piece of steel--80.0% (100.0%),", evoStone: "Metal stone,Enigma stone", boost: "5", booStone: "Enigma stone", skills: "Rock smash, Headbutt, Teleport"
    },
    {
        name: "Metang", number: 375, level: 80, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Ironhard", clan2: "Psycraft", type1: "Metal", type2: "Psiquico",
        region: "Hoen", generation: "3", difficulty: "Difícil", xpCaught: "500000", priceNpc: "70000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Beldum", evo1: "Metagross", evo2: "no", npreEvo2: "no", npreEvo1: "374", nevo1: "376", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron head-80,Psy pulse-80,Hammer arm-80,Confusion-80,Psychic-80,Metal claw-87,Meteor mash-80,Flash cannon-88,Iron defense-84,Miracle eye-1000,", loots: "(1-1)//tech ball--Raro,(1-20)//piece of steel--80.0% (100.0%),(1-1)//Metal stone--Raro,(1-1)//Enigma stone--Raro,", evoStone: "Metal coat (x10)", boost: "3", booStone: "Enigma stone", skills: "Rock smash, Teleport, Headbutt, Cut"
    },
    {
        name: "Metagross", number: 376, level: 150, ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Ironhard", clan2: "Psycraft", type1: "Metal", type2: "Psiquico",
        region: "Hoen", generation: "3", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "1000000",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "Beldum", preEvo1: "Metang", evo1: "no", evo2: "no", npreEvo2: "374", npreEvo1: "375", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron head-150,Psy pulse-150,Hammer arm-150,Confusion-150,Psychic-150,Metal claw-157,Meteor mash-150,Flash cannon-158,Iron defense-154,Miracle eye-1000,", loots: "(1-1)//tech ball--90.0%,(1-80)//piece of steel--90.0%,(1-1)//Metal coat--1.4%,(1-1)//Ironhard backpack--1.2%,(1-1)//Psycraft backpack--1.2%,", evoStone: "", boost: "10", booStone: "Mystic star", skills: "Rock smash, Dig, Cut, Teleport, Headbutt, Ride"
    },
    {
        name: "Regirock", number: 377, level: 500, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Nenhum", type1: "Pedra", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Rock throw-500,Rock slide-500,Rock tomb-500,Stone edge-500,Hammer arm-500,Ancient power-515,Rock wrecker-505,Hyper beam-510,Harden-500,Groundshock-Passiva,", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Regice", number: 378, level: 500, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Nenhum", type1: "Gelo", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "no", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Registeel", number: 379, level: 500, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Ironhard", clan2: "Nenhum", type1: "Metal", type2: "Nenhum",
        region: "Hoen", generation: "3", difficulty: "Não capturável", xpCaught: "0", priceNpc: "unseleable",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron spiner-500,Iron head-500,Iron tail-500,Hammer arm-500,Ancient power-515,Metal burst-500,Metal claw-507,Meteor mash-500,Flash cannon-508,Hyper beam-510,Harden-500,", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    ///////// INICIO generation 4
    {
        name: "Torterra", number: 389, level: "100", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Orebound", type1: "Grama", type2: "Terra",
        region: "Sinoh", generation: "4", difficulty: "Não capturável", xpCaught: "0", priceNpc: "800000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Bite-100,Grass knot-100,Razor leaf-100,Rock tomb-100,Synthesis-100,Wood hammer-100,Ground colapse-103,Giga drain-105,Earthquake-107,Frenzy plant-110,Fossilized shell-Passiva,", loots: "no", evoStone: "", boost: "2", booStone: "Earth stone", skills: "Dig, Rock smash, Cut, Headbutt"
    },
    {
        name: "Infernape", number: 392, level: "100", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Gardestrike", type1: "Fogo", type2: "Lutador",
        region: "Sinoh", generation: "4", difficulty: "Não capturável", xpCaught: "0", priceNpc: "800000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Low kick-100,Ember-100,Fire punch-100,Close combat-100,Acrobatics-105,Mach punch-100,Magma fist-100,Focus blast-100,Flare blitz-110,Evasion-Passiva,", loots: "no", evoStone: "", boost: "2", booStone: "Punch stone", skills: "Rock smash, Dig, Cut, Headbutt"
    },
    {
        name: "Empoleon", number: 395, level: "100", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Ironhard", type1: "Água", type2: "Metal",
        region: "Sinoh", generation: "4", difficulty: "Não capturável", xpCaught: "0", priceNpc: "800000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron head-100,Bubbles-100,Bubblebeam-100,Metal claw-100,Impale-103,Scald-102,Aqua jet-100,Flash cannon-108,Hydropump-100,Swords dance-100,Water sport-Passiva,", loots: "no", evoStone: "", boost: "2", booStone: "Water stone", skills: "Surf, Headbutt"
    },
    {
        name: "Luxray", number: 405, level: "100", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Não capturável", xpCaught: "0", priceNpc: "800000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Roar-110,Spark-100,Bite-100,Ice fang-100,Shredder team-110,Volt kiten-100,Raigoh-105,Volt fang-115,Charge-100,Guts-Passiva,", loots: "no", evoStone: "", boost: "2", booStone: "Thunder stone", skills: "Light, Ride, Dig, Headbutt"
    },
    //  {name:"Budew",  number:406, 
    //  {name:"Roserade",  number:407, 
    {
        name: "Cranidos", number: 408, level: "30", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Nenhum", type1: "Pedra", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Nightmare World", xpCaught: "0", priceNpc: "0",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Rampardos", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "409", nevo2: "no",
        maps: 'no', vip: "yes", moves: "no", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Rampardos", number: 409, level: "100", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Nenhum", type1: "Pedra", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Nightmare World", xpCaught: "0", priceNpc: "0",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Cranidos", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "408", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Headbutt-100,Rock slide-100,Stone edge-100,Hammer arm-100,Falling rocks-100,Head smash-105,Rock wrecker-105,Ancient power-115,", loots: "(1-10)//big stone--80%,(1-1)//orebound essence--10%,(1-1)//Rock stone--10%,(1-1)//solid head--5.8%,(1-1)//cyan nightmare gem--Raro,", evoStone: "", boost: "2", booStone: "Rock stone", skills: "Dig,Rock smash,Headbutt"
    },
    {
        name: "Shieldon", number: 410, level: "30", ball1: "Masterball", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Ironhard", type1: "Pedra", type2: "Metal",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "0", priceNpc: "80000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Bastiodon", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "411", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron head-30,Stone edge-30,Meteor mash-30,Heavy slam-30,Rock blast-35,Rock wrecker-40,", loots: "(1-21)//piece of steel--100.0%,(1-21)//small stone--100.0%,(1-1)//stone orb--30.0% (100.0%),(1-1)//armor fossil--Raro,", evoStone: "Metal stone,Crystal stone", boost: "9", booStone: "Rock stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Bastiodon", number: 411, level: "100", ball1: "Masterball", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Ironhard", type1: "Pedra", type2: "Metal",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "0", priceNpc: "120000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Shieldon", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "410", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron head-100,Stone edge-100,Meteor mash-100,Heavy slam-100,Rock slide-100,Rock blast-100,Rock wrecker-105,Stealth rock-110,Shield-Passiva,", loots: "(1-1)//bone shield--Raro,(1-21)//piece of steel--100.0%,(1-21)//small stone--100.0%,(1-1)//stone orb--30.0% (100.0%),(1-1)//Rock stone--3.1%,(1-1)//Metal stone--Raro,(1-1)//armor fossil--Raro,", evoStone: "", boost: "3", booStone: "Rock stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Wormadam", number: 413, level: "80", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Nenhum", type1: "Inseto", type2: "Grama",
        region: "Sinoh", generation: "4", difficulty: "Nightmare World", xpCaught: "0", priceNpc: "0",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Shadow ball-80,Razor leaf-80,Grass knot-80,Signal beam-80,Solar beam-80,Leaf storm-90,Infestation-87,Quiver dance-87,", loots: "(1-10)//pile of seeds--80%,(1-1)//naturia essence--10%,(1-1)//Cocoon stone--10%,(1-1)//bagworm green leaves--40%,(1-1)//Harlequin shard--Raro,(1-1)//cyan nightmare gem--Raro,", evoStone: "", boost: "3", booStone: "Leaf stone", skills: ""
    },
    {
        name: "Pachirisu", number: 417, level: "100", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "200000", priceNpc: "15000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Ion deluge-100,Charm-100,Spark-100,Swift-100,Nuzzle-105,Grass knot-100,Shockwave-100,Super fang-100,Charge-100,Volt switch-100,Volt absorb-Passiva,Magnet rise-Passiva,", loots: "(1-43)//piece of steel--80.0%,(1-1)//Thunder stone--1.0%,(1-1)//electric box--90.5%,", evoStone: "", boost: "3", booStone: "Thunder stone", skills: "Dig, Light"
    },
    {
        name: "Ambipom", number: 424, level: "80", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Aipom", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "190", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-80,Doubleslap-80,Swift-80,Pursuit-80,Last resort-80,Double hit-82,Fury swipes-80,Agility-80,Double team-82,", loots: "no", evoStone: "", boost: "5", booStone: "Mirror stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Buneary", number: 427, level: "30", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Eventos", xpCaught: "0", priceNpc: "Unselleable",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Lopunny", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "428", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-30,Charm-30,Dizzy punch-30,Healing wish-32,Double hit-32,Agility-30,Double team-32,", loots: "no", evoStone: "Heart stone (x2)", boost: "10", booStone: "Heart stone", skills: "Headbutt"
    },
    {
        name: "Lopunny", number: 428, level: "80", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Eventos", xpCaught: "0", priceNpc: "Unselleable",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Buneary", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "427", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Charm-80,Dizzy punch-80,Hi jump kick-80,Ice punch-80,Teeter dance-85,Double hit-82,Healing wish-82,Agility-80,Double team-82,", loots: "(1-1)//Easter coin--3.0%,", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Mismagius", number: 429, level: "400", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Nenhum", type1: "Fantasma", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Não capturável", xpCaught: "0", priceNpc: "0",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Shadow ball-400,Dark pulse-400,Cursed hollow-400,Black blow-400,Black box-400,Night daze-406,Fear-400,Mystical fire-410,Double team-402,Dark accurate-1320,Seismic toss-Passiva,", loots: "no", evoStone: "", boost: "", booStone: "", skills: "Teleport, Blink"
    },
    {
        name: "Honchkrow", number: 430, level: "100", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Wingeon", type1: "Noturno", type2: "Voador",
        region: "Sinoh", generation: "4", difficulty: "Não capturável", xpCaught: "0", priceNpc: "800000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Murkrow", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "198", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Peck-100,Pursuit-100,Night shade-100,Wing attack-103,Sucker punch-107,Dark pulse-100,Assurance-105,Torment-105,Crow swarm-105,Tailwind-100,Insomnia-Passiva,", loots: "no", evoStone: "", boost: "2", booStone: "Darkness stone", skills: "Fly"
    },
    {
        name: "Glameow", number: 431, level: "30", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "100000", priceNpc: "Unseleable",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Purugly", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "432", nevo2: "no",
        maps: 'no', vip: "no", moves: "Hone claws-30,Faint attack-30,Fury swipes-34,Bite-30,Last resort-30,Sucker punch-33,", loots: "no", evoStone: "Heart stone (x2)", boost: "10", booStone: "Heart stone", skills: "Dig"
    },
    {
        name: "Purugly", number: 432, level: "80", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "200000", priceNpc: "Unseleable",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Glameow", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "431", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Scratch-80,Faint attack-80,Bite-80,Body slam-84,Payback-80,Fury swipes-80,Last resort-85,Assurance-88,Own tempo-Passiva,", loots: "no", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Dig, Headbutt"
    },
    {
        name: "Bronzor", number: 436, level: "30", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Ironhard", clan2: "Psycraft", type1: "Metal", type2: "Psiquico",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "10000", priceNpc: "15000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Bronzong", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "437", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron spiner-30,Extrasensory-30,Heavy slam-30,Psychic-30,Levitate-Passiva,", loots: "(1-1)//tech ball--Raro,(1-10)//piece of steel--80.0% (100.0%),", evoStone: "Enigma stone (x2)", boost: "5", booStone: "Enigma stone", skills: "Teleport, Blink"
    },
    {
        name: "Bronzong", number: 437, level: "80", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Ironhard", clan2: "Psycraft", type1: "Metal", type2: "Psiquico",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "200000", priceNpc: "25000",
        shiny: "yes", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Bronzor", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "436", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Iron spiner-80,Extrasensory-80,Heavy slam-80,Psychic-80,Metal sound-110,Psy impact-90,Levitate-Passiva,Iron body-Passiva,", loots: "(1-1)//tech ball--Raro,(1-20)//piece of steel--80.0% (100.0%),(1-1)//Metal stone--Raro,(1-1)//Enigma stone--Raro,", evoStone: "", boost: "3", booStone: "Enigma stone", skills: "Teleport, Light, Blink"
    },
    {
        name: "Riolu", number: 447, level: "50", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "100000", priceNpc: "15000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Lucario", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "448", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Low kick-50,Quick attack-50,Iron head-50,Close combat-50,Focus blast-50,Bullet punch-50,Evasion-Passiva,Superpower-Passiva,", loots: "(1-13)//band aid--80.0% (100.0%),(1-13)//piece of steel--80.0% (100.0%),", evoStone: "Metal stone,Punch stone", boost: "5", booStone: "Punch stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Lucario", number: 448, level: "80", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Ironhard", type1: "Lutador", type2: "Metal",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "500000", priceNpc: "65000",
        shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Riolu", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "447", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Quick attack-80,Iron head-80,Close combat-80,Metal claw-80,Bullet punch-80,Bone rush-80,Aura sphere-80,Swords dance-80,Evasion-Passiva,Superpower-Passiva,Foresight-Passiva,", loots: "(1-21)//band aid--80.0% (100.0%),(1-21)//piece of steel--80.0% (100.0%),(1-1)//Punch stone--Raro,(1-1)//Metal stone--Raro,(1-1)//Lucarionite--Raro,", evoStone: "", boost: "3", booStone: "Punch stone", skills: "Rock smash, Light, Headbutt"
    },
    {
        name: "Hippopotas", number: 449, level: "30", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "20000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Hippowdon", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "450", nevo2: "no",
        maps: 'no', vip: "no", moves: "Sand attack-30,Iron tail-30,Sand tomb-32,Dig-32,Earth power-30,Earthquake-38,", loots: "no", evoStone: "Dimensional stone (x10)", boost: "7", booStone: "Dimensional stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Hippowdon", number: 450, level: "100", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "270000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Hippopotas", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "449", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Body slam-104,Stone edge-100,Sand tomb-102,Dig-102,Sand field-110,Fissure-110,Earthquake-107,Slack off-105,Sandstorm-100,Sand force-Passiva,Sand stream-Passiva,", loots: "no", evoStone: "", boost: "3", booStone: "Dimensional stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Skorupi", number: 451, level: "50", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Naturia", type1: "Venenoso", type2: "Inseto",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "20000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Drapion", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "452", nevo2: "no",
        maps: 'no', vip: "no", moves: "Bite-50,Poison tail-50,Acid-50,Poison fang-50,Poison bomb-55,Pin missile-52,Cross poison-54,", loots: "no", evoStone: "Mirror stone (x10)", boost: "10", booStone: "Mirror stone", skills: "Dig"
    },
    {
        name: "Drapion", number: 452, level: "100", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Nenhum", type1: "Venenoso", type2: "Noturno",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "270000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Skorupi", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "451", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Hone claws-100,Bite-100,Crunch-100,Poison fang-100,Night slash-100,Cross poison-104,Belch-107,Deadly spikes-100,", loots: "no", evoStone: "", boost: "3", booStone: "Mirror stone", skills: "Dig, Headbutt"
    },
    {
        name: "Croagunk", number: 453, level: "40", ball1: "Superball", ball2: "Ultraball",
        clan1: "Malefic", clan2: "Gardestrike", type1: "Venenoso", type2: "Lutador",
        region: "Sinoh", generation: "4", difficulty: "Médio", xpCaught: "50000", priceNpc: "11000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Toxicroak", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "454", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Mud bomb-40,Poison jab-40,Drain punch-40,Focus blast-40,Croak hook-45,Revenge-48,", loots: "(1-25)//bottle of poison--100.0% (100.0%),(1-25)//band aid--100.0% (100.0%),", evoStone: "Crystal stone,Venom stone", boost: "5", booStone: "Venom stone", skills: "Rock smash, Dig"
    },
    {
        name: "Toxicroak", number: 454, level: "100", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Gardestrike", type1: "Venenoso", type2: "Lutador",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "500000", priceNpc: "66000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Croagunk", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "453", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Low kick-100,Gunk shot-100,Poison jab-100,Drain punch-100,Focus blast-100,Vacuum wave-115,Swamp mist-100,Croak hook-105,Revenge-112,Anticipation-Passiva,", loots: "(1-35)//bottle of poison--100.0% (100.0%),(1-35)//band aid--100.0% (100.0%),(1-1)//Venom stone--Raro,(1-1)//Punch stone--Raro,(1-1)//Crystal stone--Raro,", evoStone: "", boost: "3", booStone: "Venom stone", skills: "Rock smash, Cut, Headbutt"
    },
    {
        name: "Snover", number: 459, level: "40", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Seavell", type1: "Grama", type2: "Gelo",
        region: "Sinoh", generation: "4", difficulty: "Sem sistema", xpCaught: "400000", priceNpc: "80000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Abomasnow", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "460", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Razor leaf-40,Ice shards-40,Icy wind-40,Ice punch-40,Powder snow-40,Wood hammer-40,Grass whistle-40,", loots: "(1-21)//seed--80.0% (100.0%),(1-21)//snowball--100.0% (100.0%),(1-1)//ice orb--3.0% (30.0%),(1-1)//leaves--25.5% (100.0%),(1-1)//nail--90.0% (100.0%),", evoStone: "Ice stone (x2)", boost: "5", booStone: "Ice stone", skills: "Dig, Headbutt, Rock smash"
    },
    {
        name: "Abomasnow", number: 460, level: "100", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Seavell", type1: "Grama", type2: "Gelo",
        region: "Sinoh", generation: "4", difficulty: "Sem sistema", xpCaught: "1000000", priceNpc: "120000",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Snover", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "459", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Icicle crash-100,Ice shards-100,Rock slide-100,Ice punch-100,Powder snow-100,Wood hammer-100,Grass whistle-100,Blizzard-108,Snow warning-Passiva,", loots: "(1-1)//seal mustache--82.5%,(1-21)//seed--80.0%,(1-21)//snowball--100.0%,(1-1)//ice orb--60.0%,(1-1)//leaves--45.5%,(1-1)//Ice stone--3.1%,(1-1)//Leaf stone--3.1%,(1-1)//nail--60.0%,", evoStone: "", boost: "3", booStone: "Ice stone", skills: "Dig, Headbutt, Rock smash"
    },
    //  Weaville"461 
    {
        name: "Magnezone", number: 462, level: "100", ball1: "Ultraball", ball2: "Tinkerball",
        clan1: "Raibolt", clan2: "Ironhard", type1: "Elétrico", type2: "Metal",
        region: "Sinoh", generation: "4", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "120000",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "Magnemite", preEvo1: "Magneton", evo1: "no", evo2: "no", npreEvo2: "81", npreEvo1: "82", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Super sonic-100,Thunder shock-100,Spark-100,Thunder wave-100,Magnet bomb-115,Tri attack-115,Flash cannon-108,Magnet field-Passiva,Magnet rise-Passiva,Tri vision-Passiva,", loots: "(1-43)//piece of steel--80.0% (100.0%),(1-1)//magnet--100.0%,(1-1)//Thunder stone--1.1%,(1-1)//Metal stone--Raro,(1-1)//Data UFO--Raro,(1-1)//titanium imam--Raro,", evoStone: "", boost: "30", booStone: "Metal stone", skills: "Fly, Light, Headbutt"
    },
    {
        name: "Lickilicky", number: 463, level: 100, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Normal", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "300000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Lickitung", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "108", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Lick-100,Shadow ball-100,Power whip-108,Toxic-100,Body slam-104,Iron tail-100,Squishy licking-105,Tongue hook-105,Gyro ball-108,Defense curl-100,", loots: "no", evoStone: "", boost: "3", booStone: "Mirror stone", skills: "Headbutt"
    },
    {
        name: "Rhyperior", number: 464, level: "150", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Pedra",
        region: "Sinoh", generation: "4", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "1000000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Rhyhorn", preEvo1: "Rhydon", evo1: "no", evo2: "no", npreEvo2: "111", npreEvo1: "112", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Horn attack-150,Stone edge-150,Rock throw-150,Rock tomb-150,Bulldoze-153,Earthquake-157,Rock wrecker-155,Drill run-157,Scary face-152,Solid rock-Passiva,", loots: "(1-42)//small stone--90.0%,(1-42)//earth ball--90.0%,(1-1)//horn drill--90.0%,(1-1)//stone orb--90.0%,(1-1)//Orebound backpack--2.4%,(1-1)//Protector--1.4%,", evoStone: "", boost: "10", booStone: "Mystic star", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Tangrowth", number: 465, level: "150", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "1000000",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "no", preEvo1: "Tangela", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "114", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Leech seed-150,Vine whip-150,Power whip-158,Ancient power-165,Giga drain-155,Poison powder-150,Sleep powder-155,Stun spore-150,", loots: "(1-80)//seed--90.0%,(1-1)//massive vines--6.0%,(1-1)//blue vines--90.0%,(1-1)//Naturia backpack--2.4%,(1-1)//Gaia tentacles--1.4%,", evoStone: "", boost: "10", booStone: "Mystic star", skills: "Cut, Headbutt"
    },
    {
        name: "Electivire", number: 466, level: "150", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "1000000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Elekid", preEvo1: "Electabuzz", evo1: "no", evo2: "no", npreEvo2: "239", npreEvo1: "125", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Swift-150,Low kick-150,Thunder punch-150,Wake up slap-150,Lightning axe-150,Hammer arm-150,Cross chop-154,Focus blast-150,Earthquake-160,Magnet rise-Passiva,", loots: "(1-80)//screw--90%,(1-1)//Max volt paw--6.0%,(1-1)//electric tail--90.0%,(1-1)//Raibolt backpack--2.4%,(1-1)//Electirizer--1.4%,", evoStone: "", boost: "10", booStone: "Mystic star", skills: "Rock smash, Light, Headbutt"
    },
    {
        name: "Magmortar", number: 467, level: "150", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "1000000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Magby", preEvo1: "Magmar", evo1: "no", evo2: "no", npreEvo2: "240", npreEvo1: "126", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Volcano shot-150,Ember-150,Flamethrower-150,Smokescreen-150,Fireball-150,Fire blast-150,Magma storm-155,Hyper beam-160,Sunny day-162,Flame body-Passiva,Double cannon-Passiva,", loots: "(1-80)//essence of fire--90%,(1-1)//magmar foot--90.0%,(1-1)//Volcanic backpack--2.4%,(1-1)//Magmarizer--1.4%,", evoStone: "", boost: "10", booStone: "Mystic star", skills: "Rock smash, Headbutt"
    },
    {
        name: "Togekiss", number: 468, level: "100", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Psycraft", clan2: "Wingeon", type1: "Fada", type2: "Voador",
        region: "Sinoh", generation: "4", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "125000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Togepi", preEvo1: "Togetic", evo1: "no", evo2: "no", npreEvo2: "175", npreEvo1: "176", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Charm-100,Dazzling gleam-104,Aura sphere-100,Fairy wind-108,Extremespeed-100,Great love-107,Sky attack-110,Metroname-100,Safeguard-110,Serene Happiness-Passiva,Leftovers-Passiva,", loots: "(1-1)//eggshell--4.3%,(1-21)//rubber ball--100.0%,(1-21)//straw--100.0%,(1-1)//Feather stone--Raro,(1-1)//feather--80.0%,(1-1)//Shiny stone--Raro,", evoStone: "", boost: "2", booStone: "Feather stone", skills: "Fly"
    },
    {
        name: "Leafeon", number: 470, level: 60, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Nenhum", type1: "Grama", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Eevee", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "133", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Leech seed-60,Leaf blade-60,X scissor-64,Grassy terrain-70,Grass whistle-60,Hyper voice-60,Leaf tornado-70,Synthesis-60,Protect-60,", loots: "no", evoStone: "", boost: "7", booStone: "Mirror stone", skills: "Dig"
    },
    {
        name: "Glaceon", number: 471, level: 60, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Nenhum", type1: "Gelo", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Eevee", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "133", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Swift-60,Ice shards-60,Ice fang-60,Avalanche-60,Frost power-60,Blizzard-66,Hail-68,Ice body-Passiva,", loots: "no", evoStone: "", boost: "7", booStone: "Mirror stone", skills: "Dig"
    },
    {
        name: "Gliscor", number: 472, level: "80", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Wingeon", type1: "Terra", type2: "Voador",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "200000", priceNpc: "18000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Gligar", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "207", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Guillotine-84,Wing attack-80,Air cutter-88,Fire fang-80,Sky attack-90,Aerial ace-84,Sky uppercut-88,Swords dance-86,Agility-86,Protect-80,Evasion-Passiva,Shadow slice-Passiva,", loots: "(1-1)//Gligar claw--4.3% (85.0%),(1-1)//Earth stone--Raro,(1-1)//Feather stone--Raro,(1-10)//earth ball--80.0%,(1-10)//straw--80.0%,(1-1)//sandbag--17.0% (51.0%),(1-1)//tooth--12.0% (60.0%),", evoStone: "", boost: "3", booStone: "Earth stone", skills: "Dig, Rock smash, Headbutt, Cut"
    },
    //  Mamoswine 473 
    {
        name: "Gallade", number: 475, level: "100", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Psycraft", clan2: "Gardestrike", type1: "Psiquico", type2: "Lutador",
        region: "Sinoh", generation: "4", difficulty: "Não capturável", xpCaught: "0", priceNpc: "800000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Ralts", preEvo1: "Kirlia", evo1: "no", evo2: "no", npreEvo2: "280", npreEvo1: "281", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes",
        moves: "Psycho cut-108,Low kick-100,Close combat-100,Zen headbutt-100,Brick break-100,Focus blast-100,Revenge-112,Double team-102,Power up punch-100,Miracle eye-1010,", loots: "no", evoStone: "", boost: "2", booStone: "Enigma stone", skills: "Teleport, Cut, Headbutt, Blink"
    },
    {
        name: "Probopass", number: 476, level: "80", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Ironhard", type1: "Pedra", type2: "Metal",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Nosepass", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "299", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Iron head-80,Tackle-80,Rock throw-80,Stone edge-80,Power gem-80,Bulldoze-80,Rock blast-80,Heavy slam-80,Iron defense-84,Stealth rock-90,Magnet pull-Passiva,", loots: "no", evoStone: "Mirror stone (x10)", boost: "5", booStone: "Mirror stone", skills: "Rock smash, Headbutt, Dig"
    },
    {
        name: "Dusknoir", number: 477, level: "150", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Nenhum", type1: "Fantasma", type2: "Nenhum",
        region: "Sinoh", generation: "4", difficulty: "Sem sistema", xpCaught: "0", priceNpc: "1000000",
        shiny: "no", fast: "no", heavy: "yes", preEvo2: "Duskull", preEvo1: "Dusclops", evo1: "no", evo2: "no", npreEvo2: "355", npreEvo1: "356", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Destiny bond-150,Shadow ball-150,Shadow punch-154,Ominous wind-150,Shadow sneak-155,Hex-155,Curse-156,Dark accurate-1000,Spirit world-Passiva", loots: "(1-80)//ghost essence--90.0%,(1-1)//scary smile--6.0%,(1-1)//Malefic backpack--2.4%,(1-1)//Reaper cloth--1.4%,", evoStone: "", boost: "10", booStone: "Mystic star", skills: "Control mind"
    },
    {
        name: "Froslass", number: 478, level: "80", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Malefic", type1: "Gelo", type2: "Fantasma",
        region: "Sinoh", generation: "4", difficulty: "Difícil", xpCaught: "500000", priceNpc: "60000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Snorunt", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "361", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Destiny bond-80,Shadow ball-80,Cursed hollow-80,Powder snow-80,Frost breath-82,Avalanche-80,Ice slider-80,Dimensional wall-82,Ice block-80,Spirit world-Passiva,", loots: "(1-1)//ice blocks--4.3% (29.8%),(1-43)//snowball--80.0% (100.0%),(1-1)//ice orb--25.0% (25.0%),(1-1)//Ice stone--Raro,(1-1)//Dawn stone--Raro,", evoStone: "", boost: "3", booStone: "Ice stone", skills: "Headbutt"
    },
    {
        name: "Rotom", number: 479, level: "100", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Fantasma",
        region: "Sinoh", generation: "4", difficulty: "Sem sistema", xpCaught: "500000", priceNpc: "120000",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "Thunder shock-100,Shadow ball-100,Shadow sphere-100,Shockwave-100,Substitute-100,Assurance-105,Shadow storm-106,Morph-100,Levitate-Passiva,", loots: "(1-40)//screw--100.0%,(1-1)//Thunder stone--Raro,(1-1)//electric box--100.0% (100.0%),(1-1)//zap--5.7% (5.7%),", evoStone: "", boost: "50", booStone: "Mystic star", skills: "Light"
    },
    {
        name: "Heatran", number: 485, level: 150, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Ironhard", type1: "Fogo", type2: "Metal",
        region: "Sinoh", generation: "4", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "unseleable",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Volcano shot-150,Iron head-150,Crunch-150,Stone edge-150,Ancient power-150,Rock slide-150,Magma storm-150,Heat wave-150,Hyper beam-150,Flash cannon-150,Flash fire-Passiva,", loots: "no", evoStone: "", boost: "", booStone: "", skills: "Dig, Rock smash, Light, Headbutt"
    },
    ///////// INICIO generation 5
    {
        name: "Simisear", number: 514, level: 0, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Nightmare World", xpCaught: "0", priceNpc: "0",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "yes", moves: "no", loots: "no", evoStone: "", boost: "", booStone: "", skills: ""
    },
    {
        name: "Blitzle", number: 522, level: 60, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "20000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Zebstrika", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "523", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-60,Thunder bolt-60,Shockwave-60,Flame charge-60,Stomp-65,Thunder-65,Wild charge-65,", loots: "no", evoStone: "Dimensional stone (x25)", boost: "3", booStone: "Dimensional stone", skills: "Dig"
    },
    {
        name: "Zebstrika", number: 523, level: 100, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Raibolt", clan2: "Nenhum", type1: "Elétrico", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "270000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Blitzle", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "522", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Lightning horn-100,Double kick-100,Shockwave-100,Flame charge-100,Overheat-100,Flare blitz-110,Thrash-105,Rain dance-100,Volt switch-100,", loots: "no", evoStone: "", boost: "3", booStone: "Dimensional stone", skills: "Dig, Ride"
    },
    {
        name: "Drilbur", number: 529, level: 50, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Nenhum", type1: "Terra", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "20000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Excadrill", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "530", nevo2: "no",
        maps: 'no', vip: "no", moves: "Mud shot-50,Fury swipes-50,Dig-52,Metal claw-57,Drill run-57,Earthquake-57,Sandstorm-50,", loots: "no", evoStone: "Mirror stone (x25)", boost: "10", booStone: "Mirror stone", skills: "Dig, Rock smash"
    },
    {
        name: "Excadrill", number: 530, level: 100, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Orebound", clan2: "Ironhard", type1: "Terra", type2: "Metal",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "270000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Drilbur", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "529", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Mud sport-100,Fury swipes-100,Iron head-100,Dig-102,Metal claw-107,Drill run-107,Earthquake-107,Sandstorm-100,Sand rush-Passiva,Sand force-Passiva,", loots: "no", evoStone: "", boost: "3", booStone: "Mirror stone", skills: "Dig, Rock smash, Headbutt"
    },
    {
        name: "Timburr", number: 532, level: 20, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Gurdurr", evo2: "Conkeldurr", npreEvo2: "no", npreEvo1: "no", nevo1: "533", nevo2: "534",
        maps: 'no', vip: "no", moves: "Rock slide-20,Stone edge-23,Hammer arm-20,Wake up slap-20,Bulk up-20,", loots: "no", evoStone: "Dimensional stone (x2)", boost: "10", booStone: "Dimensional stone", skills: "Rock smash"
    },
    {
        name: "Gurdurr", number: 533, level: 60, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "23000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Timburr", evo1: "Conkeldurr", evo2: "no", npreEvo2: "no", npreEvo1: "532", nevo1: "534", nevo2: "no",
        maps: 'no', vip: "no", moves: "Rock throw-60,Rock slide-60,Stone edge-63,Rock tomb-60,Hammer arm-60,Wake up slap-60,Bulk up-60,", loots: "no", evoStone: "Power stone", boost: "4", booStone: "Dimensional stone", skills: "Rock smash"
    },
    {
        name: "Conkeldurr", number: 534, level: 150, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Nenhum", type1: "Lutador", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "Unseleable",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Timburr", preEvo1: "Gurdurr", evo1: "no", evo2: "no", npreEvo2: "532", npreEvo1: "533", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Rock throw-150,Drain punch-150,Rock tomb-150,Stone edge-150,Hammer arm-150,Brick break-150,Wake up slap-150,Chip away-150,Force palm-150,Bulk up-150,", loots: "no", evoStone: "", boost: "2", booStone: "Dimensional stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Darumaka", number: 554, level: 50, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "20000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Darmanitan", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "555", nevo2: "no",
        maps: 'no', vip: "no", moves: "Tackle-50,Headbutt-50,Fire punch-50,Hammer arm-50,Incinerate-50,Flare blitz-60,Rage-50,", loots: "no", evoStone: "Mirror stone (x10)", boost: "7", booStone: "Mirror stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Darmanitan", number: 555, level: 100, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "270000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Darumaka", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "554", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Headbutt-100,Fire punch-100,Flamethrower-100,Hammer arm-100,Incinerate-100,Overheat-100,Focus blast-100,Strenght-100,Flare blitz-110,Belly drum-100,Zen mode-Passiva,", loots: "no", evoStone: "", boost: "3", booStone: "Mirror stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Dwebble", number: 557, level: 20, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Orebound", type1: "Inseto", type2: "Pedra",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "5000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Crustle", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "558", nevo2: "no",
        maps: 'no', vip: "no", moves: "Rock throw-20,Rock slide-20,Stone edge-23,Rock blast-20,Harden-25,", loots: "no", evoStone: "Mirror stone (x10)", boost: "8", booStone: "Mirror stone", skills: "Dig, Cut"
    },
    {
        name: "Crustle", number: 558, level: 80, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Orebound", type1: "Inseto", type2: "Pedra",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Dwebble", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "557", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Slash-85,Rock slide-80,Rock tomb-80,X scissor-80,Spikes-90,Stone edge-80,Rock blast-80,Rock wrecker-85,Shell smash-80,Withdraw-84,", loots: "no", evoStone: "", boost: "5", booStone: "Mirror stone", skills: "Dig"
    },
    {
        name: "Emolga", number: 587, level: 80, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Raibolt", clan2: "Wingeon", type1: "Elétrico", type2: "Voador",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Charm-80,Feather dance-80,Pursuit-80,Air slash-83,Nuzzle-85,Roost-85,Aerial ace-84,Light screen-80,", loots: "no", evoStone: "", boost: "5", booStone: "Mirror stone", skills: ""
    },
    {
        name: "Joltik", number: 595, level: "20", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Raibolt", type1: "Inseto", type2: "Elétrico",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Galvantula", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "596", nevo2: "no",
        maps: 'no', vip: "no", moves: "Bug bite-20,Electroweb-20,Thunder fang-20,Shockwave-20,Electro ball-20,", loots: "no", evoStone: "Dimensional stone (x10)", boost: "10", booStone: "Dimensional stone", skills: "Dig, Cut"
    },
    {
        name: "Galvantula", number: 596, level: "80", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Raibolt", type1: "Inseto", type2: "Elétrico",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "yes", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "Joltik", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "595", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Bug bite-80,Electroweb-80,Thunder fang-80,Fury cutter-80,Shockwave-80,Electro ball-80,Electro field-80,Discharge-80,", loots: "no", evoStone: "", boost: "5", booStone: "Dimensional stone", skills: "Dig, Cut, Light"
    },
    {
        name: "Ferroseed", number: 597, level: 60, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Ironhard", type1: "Grama", type2: "Metal",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Ferrothorn", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "598", nevo2: "no",
        maps: 'no', vip: "no", moves: "Iron head-60,Leech seed-60,Seed bomb-60,Spikes-70,Flash cannon-68,Bullet seed-60,Solar beam-60,", loots: "no", evoStone: "Dimensional stone (x25)", boost: "7", booStone: "Dimensional stone", skills: "Rock smash, Dig, Headbutt"
    },
    {
        name: "Ferrothorn", number: 598, level: 100, ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Naturia", clan2: "Ironhard", type1: "Grama", type2: "Metal",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "350000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Ferroseed", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "597", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Iron head-100,Leech seed-100,Grass knot-100,Power whip-108,Thunder bolt-100,Spikes-110,Bullet seed-100,Giga drain-105,Solar beam-100,Iron barbs-Passiva,", loots: "no", evoStone: "", boost: "3", booStone: "Dimensional stone", skills: ""
    },
    {
        name: "Litwick", number: 607, level: "20", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Volcanic", type1: "Fantasma", type2: "Fogo",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "3000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Lampent", evo2: "Chandelure", npreEvo2: "no", npreEvo1: "no", nevo1: "608", nevo2: "609",
        maps: 'no', vip: "no", moves: "Shadow ball-20,Fire spin-20,Incinerate-20,Astonish-20,Invisible-20,", loots: "no", evoStone: "Dimensional stone (x2)", boost: "10", booStone: "Dimensional stone", skills: "Light"
    },
    {
        name: "Lampent", number: 608, level: "50", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Volcanic", type1: "Fantasma", type2: "Fogo",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "100000", priceNpc: "20000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Litwick", evo1: "Chandelure", evo2: "no", npreEvo2: "no", npreEvo1: "607", nevo1: "609", nevo2: "no",
        maps: 'no', vip: "no", moves: "Shadow ball-50,Fire spin-50,Incinerate-50,Flame burst-50,Astonish-50,Invisible-50,Inferno-60,", loots: "no", evoStone: "Dimensional stone (x10)", boost: "7", booStone: "Dimensional stone", skills: "Light"
    },
    {
        name: "Chandelure", number: 609, level: "80", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Volcanic", type1: "Fantasma", type2: "Fogo",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Litwick", preEvo1: "Lampent", evo1: "no", evo2: "no", npreEvo2: "607", npreEvo1: "608", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Ember-80,Fire spin-80,Flame burst-80,Incinerate-80,Astonish-80,Hex-85,Curse-86,Inferno-90,Flame body-Passiva,", loots: "no", evoStone: "", boost: "5", booStone: "Dimensional stone", skills: ""
    },
    {
        name: "Axew", number: 610, level: "20", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Wingeon", clan2: "Nenhum", type1: "Dragão", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "20000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Fraxure", evo2: "Haxorus", npreEvo2: "no", npreEvo1: "no", nevo1: "611", nevo2: "612",
        maps: 'no', vip: "no", moves: "Dragon claw-20,Guillotine-30,Dual chop-20,Twister-21,Dragon breath-25,Lightning axe-20,", loots: "no", evoStone: "Mirror stone (x10)", boost: "10", booStone: "Mirror stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Fraxure", number: 611, level: "50", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Wingeon", clan2: "Nenhum", type1: "Dragão", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "100000", priceNpc: "30000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Axew", evo1: "Haxorus", evo2: "no", npreEvo2: "no", npreEvo1: "610", nevo1: "612", nevo2: "no",
        maps: 'no', vip: "no", moves: "Hone claws-50,Dragon claw-50,Guillotine-60,Dual chop-50,Twister-54,Bulldoze-50,Lightning axe-50,", loots: "no", evoStone: "", boost: "7", booStone: "Mirror stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Haxorus", number: 612, level: "100", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Wingeon", clan2: "Nenhum", type1: "Dragão", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "270000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "Axew", preEvo1: "Fraxure", evo1: "no", evo2: "no", npreEvo2: "610", npreEvo1: "611", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Hone claws-100,Dragon claw-100,Guillotine-110,Dual chop-100,Razor wind-108,Twister-104,Bulldoze-100,Lightning axe-100,Earthquake-107,", loots: "no", evoStone: "", boost: "3", booStone: "Mirror stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Cubchoo", number: 613, level: "50", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Nenhum", type1: "Gelo", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "5000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Beartic", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "614", nevo2: "no",
        maps: 'no', vip: "no", moves: "Slash-50,Ice punch-50,Icicle crash-50,Powder snow-50,Avalanche-50,Blizzard-56,", loots: "no", evoStone: "Dimensional stone (x10)", boost: "10", booStone: "Dimensional stone", skills: ""
    },
    {
        name: "Beartic", number: 614, level: "80", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Seavell", clan2: "Nenhum", type1: "Gelo", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Cubchoo", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "613", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Slash-80,Ice punch-80,Ice fang-80,Icicle crash-80,Powder snow-80,Avalanche-80,Blizzard-86,Hail-88,Snow cloak-Passiva,", loots: "no", evoStone: "", boost: "5", booStone: "Dimensional stone", skills: "Rock smash"
    },
    {
        name: "Pawniard", number: 624, level: "40", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Ironhard", type1: "Noturno", type2: "Metal",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "5000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Bisharp", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "625", nevo2: "no",
        maps: 'no',
        vip: "no",
        moves: "Iron head-40,Sucker punch-43,Night slash-40,Metal burst-40,Shadow claw-40,Swords dance-48,", loots: "no", evoStone: "", boost: "8", booStone: "Mirror stone", skills: "Rock smash, Cut, Headbutt"
    },
    {
        name: "Bisharp", number: 625, level: "80", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Malefic", clan2: "Ironhard", type1: "Noturno", type2: "Metal",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Pawniard", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "624", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Hone claws-80,Iron head-80,Sucker punch-80,Compass slash-80,Night slash-80,Metal burst-80,Shadow claw-80,Dual chop-80,Assurance-88,Swords dance-88,", loots: "no", evoStone: "", boost: "5", booStone: "Mirror stone", skills: "Rock smash, Headbutt"
    },
    {
        name: "Heatmor", number: 631, level: "80", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Volcanic", clan2: "Nenhum", type1: "Fogo", type2: "Nenhum",
        region: "Unova", generation: "5", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Fire spin-80,Sucker punch-83,Flamethrower-80,Incinerate-80,Shadow claw-80,Night slash-80,Swallow-83,Stockpile-83,Inferno-90,Taunt-80,", loots: "no", evoStone: "", boost: "5", booStone: "Dimensional stone", skills: "Headbutt"
    },
    ///////// INICIO generation 6
    {
        name: "Bunnelby", number: 659, level: "30", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Orebound", type1: "Normal", type2: "Terra",
        region: "Kalos", generation: "6", difficulty: "Fácil", xpCaught: "0", priceNpc: "3000",
        shiny: "no", fast: "yes", heavy: "no", preEvo2: "no", preEvo1: "no", evo1: "Diggersby", evo2: "no", npreEvo2: "no", npreEvo1: "no", nevo1: "660", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-30,Bite-30,Super fang-30,Dig-32,Double team-32,Agility-30,", loots: "(1-13)//rubber ball--80.0%,(1-1)//Red easter egg--10.0%,(1-1)//Blue easter egg--7.3%,(1-1)//Golden easter egg--4.3%,", evoStone: "Heart stone (x2)", boost: "10", booStone: "Heart stone", skills: ""
    },
    {
        name: "Diggersby", number: 660, level: "80", ball1: "Ultraball", ball2: "Nenhuma",
        clan1: "Gardestrike", clan2: "Orebound", type1: "Normal", type2: "Terra",
        region: "Kalos", generation: "6", difficulty: "Difícil", xpCaught: "0", priceNpc: "13000",
        shiny: "no", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Bunnelby", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "659", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Quick attack-80,Super fang-80,Rock tomb-80,Dig-82,Bulldoze-80,Hammer arm-80,Leap strike-85,Earthquake-86,Swords dance-88,", loots: "(1-40)//rubber ball--80.0%,(1-1)//Heart stone--Raro,(1-1)//Red easter egg--34.8%,(1-1)//Blue easter egg--21.5%,(1-1)//Golden easter egg--13.6%,(1-1)//purple carrot--Raro,", evoStone: "", boost: "3", booStone: "Heart stone", skills: "Dig, Headbutt"
    },
    {
        name: "Sylveon", number: 700, level: "60", ball1: "Nenhuma", ball2: "Nenhuma",
        clan1: "Psycraft", clan2: "Nenhum", type1: "Fada", type2: "Nenhum",
        region: "Kalos", generation: "6", difficulty: "Dimensional zone", xpCaught: "0", priceNpc: "100000",
        shiny: "yes", fast: "no", heavy: "no", preEvo2: "no", preEvo1: "Eevee", evo1: "no", evo2: "no", npreEvo2: "no", npreEvo1: "133", nevo1: "no", nevo2: "no",
        maps: 'no', vip: "no", moves: "Charm-60,Draining kiss-60,Swift-60,Take down-60,Last resort-60,Great love-68,Moonblast-66,", loots: "no", evoStone: "", boost: "7", booStone: "Mirror stone", skills: "Dig"
    }
];
module.exports = pokesarray;
