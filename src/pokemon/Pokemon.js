import MoveDB from '../moves/moveDB';

let PokemonDB = [
        {
            id: 1,
            name: "bulbasaur",
            levelMoves: [MoveDB.tackle, MoveDB.growl, MoveDB.leechSeed, MoveDB.vineWhip, MoveDB.poisonPowder, MoveDB.sleepPowder, MoveDB.takeDown, MoveDB.razorLeaf, MoveDB.sweetScent, MoveDB.growth, MoveDB.doubleEdge, MoveDB.worrySeed, MoveDB.synthesis, MoveDB.seedBomb],
            tmMoves: [MoveDB.workUp, MoveDB.toxic, MoveDB.venoshock, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.lightScreen, MoveDB.protect, MoveDB.safeguard, MoveDB.frustration, MoveDB.solarBeam, MoveDB.return, MoveDB.doubleTeam, MoveDB.sludgeBomb, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.round, MoveDB.echoedVoice, MoveDB.energyBall, MoveDB.swordsDance, MoveDB.grassKnot, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.naturePower, MoveDB.confide],
            eggMoves: [MoveDB.skullBash, MoveDB.charm, MoveDB.petalDance, MoveDB.magicalLeaf, MoveDB.grassWhistle, MoveDB.curse, MoveDB.ingrain, MoveDB.naturePower, MoveDB.amnesia, MoveDB.leafStorm, MoveDB.powerWhip, MoveDB.sludge, MoveDB.endure, MoveDB.gigaDrain, MoveDB.grassyTerrain],
            tutorMoves: [MoveDB.grassPledge, MoveDB.seedBomb, MoveDB.bind, MoveDB.snore, MoveDB.knockOff, MoveDB.synthesis, MoveDB.gigaDrain, MoveDB.worrySeed]
        },
        {
            id: 2,
            name: "ivysaur",
            levelMoves: [MoveDB.tackle, MoveDB.growl, MoveDB.leechSeed, MoveDB.growl, MoveDB.leechSeed, MoveDB.vineWhip, MoveDB.poisonPowder, MoveDB.sleepPowder, MoveDB.takeDown, MoveDB.razorLeaf, MoveDB.sweetScent, MoveDB.growth, MoveDB.doubleEdge, MoveDB.worrySeed, MoveDB.synthesis, MoveDB.solarBeam],
            tmMoves: [MoveDB.workUp, MoveDB.toxic, MoveDB.venoshock, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.lightScreen, MoveDB.protect, MoveDB.safeguard, MoveDB.frustration, MoveDB.solarBeam, MoveDB.return, MoveDB.doubleTeam, MoveDB.sludgeBomb, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.round, MoveDB.echoedVoice, MoveDB.energyBall, MoveDB.swordsDance, MoveDB.grassKnot, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.naturePower, MoveDB.confide],
            eggMoves: [MoveDB.skullBash, MoveDB.charm, MoveDB.petalDance, MoveDB.magicalLeaf, MoveDB.grassWhistle, MoveDB.curse, MoveDB.ingrain, MoveDB.naturePower, MoveDB.amnesia, MoveDB.leafStorm, MoveDB.powerWhip, MoveDB.sludge, MoveDB.endure, MoveDB.gigaDrain, MoveDB.grassyTerrain],
            tutorMoves: [MoveDB.grassPledge, MoveDB.seedBomb, MoveDB.bind, MoveDB.snore, MoveDB.knockOff, MoveDB.synthesis, MoveDB.gigaDrain, MoveDB.worrySeed]
        },
        {
            id: 3,
            name: "vensaur",
            levelMoves: [MoveDB.petalDance, MoveDB.tackle, MoveDB.growl, MoveDB.leechSeed, MoveDB.vineWhip, MoveDB.growl, MoveDB.leechSeed, MoveDB.vineWhip, MoveDB.sleepPowder, MoveDB.takeDown, MoveDB.razorLeaf, MoveDB.sweetScent, MoveDB.growth, MoveDB.doubleEdge, MoveDB.worrySeed, MoveDB.synthesis, MoveDB.petalDance, MoveDB.solarBeam],
            tmMoves: [MoveDB.workUp, MoveDB.roar, MoveDB.toxic, MoveDB.venoshock, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.hyperBeam, MoveDB.lightScreen, MoveDB.protect, MoveDB.safeguard, MoveDB.frustration, MoveDB.solarBeam, MoveDB.earthquake, MoveDB.return, MoveDB.doubleTeam, MoveDB.sludgeBomb, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.round, MoveDB.echoedVoice, MoveDB.energyBall, MoveDB.gigaImpact, MoveDB.swordsDance, MoveDB.bulldoze, MoveDB.grassKnot, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.naturePower, MoveDB.confide],
            eggMoves: [MoveDB.skullBash, MoveDB.charm, MoveDB.petalDance, MoveDB.magicalLeaf, MoveDB.grassWhistle, MoveDB.curse, MoveDB.ingrain, MoveDB.naturePower, MoveDB.amnesia, MoveDB.leafStorm, MoveDB.powerWhip, MoveDB.sludge, MoveDB.endure, MoveDB.gigaDrain, MoveDB.grassyTerrain],
            tutorMoves: [MoveDB.frenzyPlant, MoveDB.grassPledge, MoveDB.seedBomb, MoveDB.block, MoveDB.bind, MoveDB.snore, MoveDB.knockOff, MoveDB.synthesis, MoveDB.gigaDrain, MoveDB.worrySeed, MoveDB.outrage, MoveDB.stompingTantrum]
        },
        {
            id: 4,
            name: "charmander",
            levelMoves: [MoveDB.scratch, MoveDB.growl, MoveDB.ember, MoveDB.smokescreen, MoveDB.dragonRage, MoveDB.scaryFace, MoveDB.fireFang, MoveDB.flameBurst, MoveDB.slash, MoveDB.flamethrower, MoveDB.fireSpin, MoveDB.inferno],
            tmMoves: [MoveDB.workUp, MoveDB.dragonClaw, MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.protect, MoveDB.frustration, MoveDB.return, MoveDB.brickBreak, MoveDB.doubleTeam, MoveDB.flamethrower, MoveDB.fireBlast, MoveDB.rockTomb, MoveDB.aerialAce, MoveDB.facade, MoveDB.flameCharge, MoveDB.rest, MoveDB.attract, MoveDB.round, MoveDB.echoedVoice, MoveDB.overheat, MoveDB.fling, MoveDB.willOWisp, MoveDB.shadowClaw, MoveDB.swordsDance, MoveDB.rockSlide, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.bellyDrum, MoveDB.ancientPower, MoveDB.bite, MoveDB.outrage, MoveDB.beatUp, MoveDB.dragonDance, MoveDB.crunch, MoveDB.dragonRush, MoveDB.metalClaw, MoveDB.flareBlitz, MoveDB.counter, MoveDB.dragonPulse, MoveDB.focusPunch, MoveDB.airCutter],
            tutorMoves: [MoveDB.firePledge, MoveDB.thunderPunch, MoveDB.firePunch, MoveDB.dragonPulse, MoveDB.ironTail, MoveDB.snore, MoveDB.heatWave, MoveDB.focusPunch]
        },
        {
            id: 5,
            name: "charmeleon",
            levelMoves: [MoveDB.scratch, MoveDB.growl, MoveDB.ember, MoveDB.ember, MoveDB.smokescreen, MoveDB.dragonRage, MoveDB.scaryFace, MoveDB.fireFang, MoveDB.flameBurst, MoveDB.slash, MoveDB.flamethrower, MoveDB.fireSpin, MoveDB.inferno],
            tmMoves: [MoveDB.workUp, MoveDB.dragonClaw, MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.protect, MoveDB.frustration, MoveDB.return, MoveDB.brickBreak, MoveDB.doubleTeam, MoveDB.flamethrower, MoveDB.fireBlast, MoveDB.rockTomb, MoveDB.aerialAce, MoveDB.facade, MoveDB.flameCharge, MoveDB.rest, MoveDB.attract, MoveDB.round, MoveDB.echoedVoice, MoveDB.overheat, MoveDB.fling, MoveDB.willOWisp, MoveDB.shadowClaw, MoveDB.swordsDance, MoveDB.rockSlide, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.bellyDrum, MoveDB.ancientPower, MoveDB.bite, MoveDB.outrage, MoveDB.beatUp, MoveDB.dragonDance, MoveDB.crunch, MoveDB.dragonRush, MoveDB.metalClaw, MoveDB.flareBlitz, MoveDB.counter, MoveDB.dragonPulse, MoveDB.focusPunch, MoveDB.airCutter],
            tutorMoves: [MoveDB.firePledge, MoveDB.thunderPunch, MoveDB.firePunch, MoveDB.dragonPulse, MoveDB.ironTail, MoveDB.snore, MoveDB.heatWave, MoveDB.focusPunch]
        },
        {
            id: 6,
            name: "charizard",
            levelMoves: [MoveDB.wingAttack, MoveDB.flareBlitz, MoveDB.heatWave, MoveDB.dragonClaw, MoveDB.shadowClaw, MoveDB.airSlash, MoveDB.scratch, MoveDB.growl, MoveDB.ember, MoveDB.ember, MoveDB.smokescreen, MoveDB.dragonRage, MoveDB.scaryFace, MoveDB.fireFang, MoveDB.flameBurst, MoveDB.slash, MoveDB.flamethrower, MoveDB.fireSpin, MoveDB.inferno, MoveDB.heatWave, MoveDB.flareBlitz],
            tmMoves: [MoveDB.workUp, MoveDB.dragonClaw, MoveDB.roar, MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.hyperBeam, MoveDB.protect, MoveDB.roost, MoveDB.frustration, MoveDB.solarBeam, MoveDB.earthquake, MoveDB.return, MoveDB.brickBreak, MoveDB.doubleTeam, MoveDB.flamethrower, MoveDB.fireBlast, MoveDB.rockTomb, MoveDB.aerialAce, MoveDB.facade, MoveDB.flameCharge, MoveDB.rest, MoveDB.attract, MoveDB.round, MoveDB.echodVoice, MoveDB.overheat, MoveDB.steelWing, MoveDB.focusBlast, MoveDB.fling, MoveDB.skyDrop, MoveDB.brutalSwing, MoveDB.willOWisp, MoveDB.shadowClaw, MoveDB.gigaImpact, MoveDB.swordsDance, MoveDB.fly, MoveDB.bulldoze, MoveDB.rockSlide, MoveDB.dragonTail, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.bellyDrum, MoveDB.ancientPower, MoveDB.bite, MoveDB.outrage, MoveDB.beatUp, MoveDB.dragonDance, MoveDB.crunch, MoveDB.dragonRush, MoveDB.metalClaw, MoveDB.flareBlitz, MoveDB.counter, MoveDB.dragonPulse, MoveDB.focusPunch, MoveDB.airCutter],
            tutorMoves: [MoveDB.blastBurn, MoveDB.firePledge, MoveDB.thunderPunch, MoveDB.firePunch, MoveDB.dragonPulse, MoveDB.ironTail, MoveDB.snore, MoveDB.heatWave, MoveDB.tailwind, MoveDB.focusPunch, MoveDB.outrage, MoveDB.defog]
        },
        {
            id: 7,
            name: "squirtle",
            levelMoves: [MoveDB.tackle, MoveDB.tailWhip, MoveDB.waterGun, MoveDB.withdraw, MoveDB.bubble, MoveDB.bite, MoveDB.rapidSpin, MoveDB.protect, MoveDB.waterPulse, MoveDB.aquaTail, MoveDB.skullBash, MoveDB.ironDefense, MoveDB.rainDance, MoveDB.hydrPump],
            tmMoves: [MoveDB.workUp, MoveDB.toxic, MoveDB.hail, MoveDB.hiddenPower, MoveDB.iceBeam, MoveDB.blizzard, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.return, MoveDB.brikeBreak, MoveDB.doubleTeam, MoveDB.rockTomb, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.round, MoveDB.scald, MoveDB.fling, MoveDB.gyroBall, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.surf, MoveDB.waterfall, MoveDB.confide],
            eggMoves: [MoveDB.mirrorCoat, MoveDB.haze, MoveDB.mist, MoveDB.foresight, MoveDB.flail, MoveDB.refresh, MoveDB.mudSport, MoveDB.yawn, MoveDB.muddyWater, MoveDB.fakeOut, MoveDB.aquaRing, MoveDB.aquaJet, MoveDB.waterSpout, MoveDB.brine, MoveDB.dragonPulse, MoveDB.auraSphere],
            tutorMoves: [MoveDB.waterPledge, MoveDB.icePunch, MoveDB.ironDefense, MoveDB.icyWind, MoveDB.aquaTail, MoveDB.zenHeadbutt, MoveDB.dragonPulse, MoveDB.ironTail, MoveDB.snore, MoveDB.focusPunch, MoveDB.waterPulse]
        },
        {
            id: 8,
            name: "wartortle",
            levelMoves: [MoveDB.tackle, MoveDB.tailWhip, MoveDB.waterGun, MoveDB.tailWhip, MoveDB.waterGun, MoveDB.withdraw, MoveDB.bubble, MoveDB.bite, MoveDB.rapidSpin, MoveDB.protect, MoveDB.waterPulse, MoveDB.aquaTail, MoveDB.skullBash, MoveDB.ironDefense, MoveDB.rainDance, MoveDB.hydroPump],
            tmMoves: [MoveDB.workUp, MoveDB.toxic, MoveDB.hail, MoveDB.hiddenPower, MoveDB.iceBeam, MoveDB.blizzard, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.reutrn, MoveDB.brickBreak, MoveDB.doubleTeam, MoveDB.rockTomb, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.round, MoveDB.scald, MoveDB.fling, MoveDB.gyroBall, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.surf, MoveDB.waterfall, MoveDB.confide],
            eggMoves: [MoveDB.mirrorCoat, MoveDB.haze, MoveDB.mist, MoveDB.foresight, MoveDB.flail, MoveDB.refresh, MoveDB.mudSport, MoveDB.yawn, MoveDB.muddyWater, MoveDB.fakeOut, MoveDB.aquaRing, MoveDB.aquaJet, MoveDB.waterSpout, MoveDB.brine, MoveDB.dragonPulse, MoveDB.auraSphere],
            tutorMoves: [MoveDB.waterPledge, MoveDB.icePunch, MoveDB.ironDefense, MoveDB.icyWind, MoveDB.aquaTail, MoveDB.zenHeadbutt, MoveDB.dragonPulse, MoveDB.ironTail, MoveDB.snore, MoveDB.focusPunch, MoveDB.waterPulse]
        },
        {
            id: 9,
            name: "blastoise",
            levelMoves: [MoveDB.flashCannon, MoveDB.tackle, MoveDB.tailWhip, MoveDB.waterGun, MoveDB.withdraw, MoveDB.tailWhip, MoveDB.waterGun, MoveDB.withdraw, MoveDB.bubbleb, MoveDB.bite, MoveDB.rapidSpin, MoveDB.protect, MoveDB.waterPulse, MoveDB.aquaTail, MoveDB.skullBash, MoveDB.ironDefense, MoveDB.rainDance, MoveDB.hydroPump],
            tmMoves: [MoveDB.workUp, MoveDB.roar, MoveDB.toxic, MoveDB.hail, MoveDB.hiddenPower, MoveDB.iceBeam, MoveDB.blizzard, MoveDB.hyperBeam, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.smackDown, MoveDB.earthquake, MoveDB.return, MoveDB.brickBreak, MoveDB.doubleTeam, MoveDB.rockTomb, MoveDB.facacde, MoveDB.rest, MoveDB.attract, MoveDB.round, MoveDB.focusBlast, MoveDB.scald, MoveDB.fling, MoveDB.gigaImpact, MoveDB.gyroBall, MoveDB.bulldoze, MoveDB.rockSlide, MoveDB.dragonTail, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.flashCannon, MoveDB.surf, MoveDB.darkPulse, MoveDB.waterfall, MoveDB.confide],
            eggMoves: [MoveDB.mirrorCoat, MoveDB.haze, MoveDB.mist, MoveDB.foresight, MoveDB.flail, MoveDB.refresh, MoveDB.mudSport, MoveDB.yawn, MoveDB.muddyWater, MoveDB.fakeOut, MoveDB.aquaRing, MoveDB.aquaJet, MoveDB.waterSpout, MoveDB.brine, MoveDB.dragonPulse, MoveDB.auraSphere],
            tutorMoves: [MoveDB.hydroCannon, MoveDB.waterPledge, MoveDB.signalBeam, MoveDB.icePunch, MoveDB.ironDefense, MoveDB.icyWind, MoveDB.aquaTail, MoveDB.zenHeadbutt, MoveDB.dragonPulse, MoveDB.ironTail, MoveDB.snore, MoveDB.focusPunch, MoveDB.waterPulse, MoveDB.outrage, MoveDB.liquidation]
        },
        {
            id: 10,
            name: "caterpie",
            levelMoves: [MoveDB.tackle, MoveDB.stringShot, MoveDB.bugBite],
            tmMoves: [],
            eggMoves: [],
            tutorMoves: [MoveDB.bugBite, MoveDB.electroweb, MoveDB.snore]
        },
        {
            id: 11,
            name: "metapod",
            levelMoves: [MoveDB.harden],
            tmMoves: [],
            eggMoves: [],
            tutorMoves: [MoveDB.bugBite, MoveDB.electroweb, MoveDB.ironDefense]
        },
        {
            id: 12,
            name: "butterfree",
            levelMoves: [MoveDB.gust, MoveDB.confusion, MoveDB.confusion, MoveDB.poisonPowder, MoveDB.stunSpore, MoveDB.sleepPowder, MoveDB.psybeam, MoveDB.silverWind, MoveDB.supersonic, MoveDB.whirlwind, MoveDB.bugBuzz, MoveDB.ragePowder, MoveDB.captivate, MoveDB.tailwind, MoveDB.airSlash, MoveDB.quiverDance],
            tmMoves: [MoveDB.toxic, MoveDB.venoshock, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.hyperBeam, MoveDB.protect, MoveDB.rainDance, MoveDB.roost, MoveDB.safeguard, MoveDB.frustration, MoveDB.solarBeam, MoveDB.return, MoveDB.psychic, MoveDB.shadowBall, MoveDB.doubleTeam, MoveDB.aerialAce, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.energyBall, MoveDB.acrobatics, MoveDB.gigaImpact, MoveDB.psychUp, MoveDB.infestation, MoveDB.dreamEater, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.uTurn, MoveDB.substitute, MoveDB.confide],
            eggMoves: [],
            tutorMoves: [MoveDB.bugBite, MoveDB.signalBeam, MoveDB.electrowebb, MoveDB.snore, MoveDB.tailwind, MoveDB.gigaDrain, MoveDB.skillSwap, MoveDB.defog]
        },
        {
            id: 13,
            name: "weedle",
            levelMoves: [MoveDB.poisonSting, MoveDB.stringShot, MoveDB.bugBite],
            tmMoves: [],
            eggMoves: [],
            tutorMoves: [MoveDB.bugBite, MoveDB.electroweb]
        },
        {
            id: 14,
            name: "kakuna",
            levelMoves: [MoveDB.harden],
            tmMoves: [],
            eggMoves: [],
            tutorMoves: [MoveDB.bugBite, MoveDB.ironDefense, MoveDB.electroWeb]
        },
        {
            id: 15,
            name: "beedrill",
            levelMoves: [MoveDB.twineedle, MoveDB.furyAttack, MoveDB.rage, MoveDB.pursuit, MoveDB.focusEnergy, MoveDB.venoshock, MoveDB.assurance, MoveDB.toxiSpikes, MoveDB.pinmissle, MoveDB.poisonJab, MoveDB.agility, MoveDB.endeavor, MoveDB.fellStinger],
            tmMoves: [MoveDB.toxic, MoveDB.venoshock, MoveDB.hiddenPower, MoveDB.sunnyDayh, MoveDB.hyperBeam, MoveDB.protect, MoveDB.roost, MoveDB.frustration, MoveDB.solarBeam, MoveDB.return, MoveDB.brickBreak, MoveDB.doubleTeam, MoveDB.sludgebomb, MoveDB.aerialAce, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.falseSwipe, MoveDB.brutalSwing, MoveDB.acrobatics, MoveDB.payback, MoveDB.gigaImpact, MoveDB.swordsDance, MoveDB.xScissor, MoveDB.infestation, MoveDB.poisonJab, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.uTurn, MoveDB.substitute, MoveDB.confide],
            eggMoves: [],
            tutorMoves: [MoveDB.bugBite, MoveDB.drillRun, MoveDB.electroweb, MoveDB.snore, MoveDB.knockOff, MoveDB.tailwind, MoveDB.gigaDrain, MoveDB.endeavor, MoveDB.defog, MoveDB.throatChop, MoveDB.laserFocus]
        },
        {
            id: 16,
            name: "pidgey",
            levelMoves: [MoveDB.tackle, MoveDB.sandAttack, MoveDB.gust, MoveDB.quickAttack, MoveDB.whirlwind, MoveDB.twister, MoveDB.featherDance, MoveDB.agility, MoveDB.wingAttack, MoveDB.roost, MoveDB.tailwind, MoveDB.mirrorMove, MoveDB.airSlash, MoveDB.hurricane],
            tmMoves: [MoveDB.workUp, MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.protect, MoveDB.rainDance, MoveDB.roost, MoveDB.frustration, MoveDB.return, MoveDB.doubleTeam, MoveDB.aerialAce, MoveDB.facadevrest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.steelWing, MoveDB.fly, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.uTurn, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.pursuit, MoveDB.feintAttack, MoveDB.foresight, MoveDB.steelWing, MoveDB.airCutter, MoveDB.airSlash, MoveDB.braveBird, MoveDB.uproar, MoveDB.defog],
            tutorMoves: [MoveDB.uproar, MoveDB.snore, MoveDB.heatWave, MoveDB.tailwind, MoveDB.skyAttack, MoveDB.defog]
        },
        {
            id: 17,
            name: "pidgeotto",
            levelMoves: [MoveDB.tackle, MoveDB.sandAttack, MoveDB.gust, MoveDB.sandAttack, MoveDB.gust, MoveDB.quickAttack, MoveDB.whirlwind, MoveDB.twister, MoveDB.featherDance, MoveDB.agility, MoveDB.wingAttack, MoveDB.roost, MoveDB.tailwind, MoveDB.mirrorMove, MoveDB.airSlash, MoveDB.hurricane],
            tmMoves: [MoveDB.workUp, MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.protect, MoveDB.rainDance, MoveDB.roost, MoveDB.frustration, MoveDB.return, MoveDB.doubleTeam, MoveDB.aerialAce, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.steelWing, MoveDB.fly, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.uTurn, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.pursuit, MoveDB.feintAttack, MoveDB.foresight, MoveDB.steelWing, MoveDB.airCutter, MoveDB.airSlash, MoveDB.braveBird, MoveDB.uproar, MoveDB.defog],
            tutorMoves: [MoveDB.uproar, MoveDB.snore, MoveDB.heavWaave, MoveDB.tailwind, MoveDB.skyAttack, MoveDB.defog]
        },
        {
            id: 18,
            name: "pidgeot",
            levelMoves: [MoveDB.hurricane, MoveDB.tackle, MoveDB.sandAttack, MoveDB.gust, MoveDB.quickAttack, MoveDB.sandAttack, MoveDB.gust, MoveDB.quickAttack, MoveDB.whirlwind, MoveDB.twister, MoveDB.featherDance, MoveDB.agility, MoveDB.wingAttack, MoveDB.roost, MoveDB.tailwind, MoveDB.mirrorMove, MoveDB.airSlash, MoveDB.hurricane],
            tmMoves: [MoveDB.workUp, MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.hyperBeam, MoveDB.protect, MoveDB.rainDance, MoveDB.roost, MoveDB.frustration, MoveDB.return, MoveDB.doubleTeam, MoveDB.aerialAce, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.steelWing, MoveDB.gigaImpact, MoveDB.fly, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.uTurn, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.pursuit, MoveDB.feintAttack, MoveDB.foresight, MoveDB.steelWing, MoveDB.airCutter, MoveDB.airSlash, MoveDB.braveBird, MoveDB.uproar, MoveDB.defog],
            tutorMoves: [MoveDB.uproar, MoveDB.snore, MoveDB.heatWave, MoveDB.tailwind, MoveDB.skyAttack, MoveDB.defog, MoveDB.laserFocus]
        },
        {
            id: 19,
            name: "rattata",
            levelMoves: [MoveDB.tackle, MoveDB.tailWhip, MoveDB.quickAttack, MoveDB.focusEnergy, MoveDB.bite, MoveDB.pursuit, MoveDB.hyperFang, MoveDB.assurance, MoveDB.crunch, MoveDB.suckerPUnch, MoveDB.superFang, MoveDB.doubleEdge, MoveDB.endeavor],
            tmMoves: [MoveDB.workUp, MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.taunt, MoveDB.iceBeam, MoveDB.blizzard, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.thunderbolt, MoveDB.thunder, MoveDB.return, MoveDB.shadowBall, MoveDB.doubleTeam, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.chargeBeam, MoveDB.thunderWave, MoveDB.grassKnot, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.uTurn, MoveDB.substitute, MoveDB.wildCharge, MoveDB.confide],
            eggMoves: [MoveDB.screech, MoveDB.flameWheel, MoveDB.furySwipes, MoveDB.bite, MoveDB.counter, MoveDB.reverseal, MoveDB.uproar, MoveDB.lastResort, MoveDB.meFirst, MoveDB.revenge, MoveDB.finalGambit],
            tutorMoves: [MoveDB.covet, MoveDB.superFang, MoveDB.uproar, MoveDB.lastResort, MoveDB.icyWind, MoveDB.zenHeadbutt, MoveDB.ironTail, MoveDB.snore, MoveDB.shockWave, MoveDB.endeavor]
        },
        {
            id: 20,
            name: "raticate",
            levelMoves: [MoveDB.scaryFace, MoveDB.swordsDance, MoveDB.tackle, MoveDB.taiWhip, MoveDB.quickAttack, MoveDB.focusEnergy, MoveDB.quickAttack, MoveDB.focusEnergy, MoveDB.bite, MoveDB.pursuit, MoveDB.hyperFang, MoveDB.assurance, MoveDB.crunch, MoveDB.suckerPunch, MoveDB.superFang, MoveDB.doubleEdge, MoveDB.endeavor],
            tmMoves: [MoveDB.workUp, MoveDB.roar, MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.taunt, MoveDB.iceBeam, MoveDB.blizzard, MoveDB.hyperBeam, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.thunderbolt, MoveDB.thunder, MoveDB.return, MoveDB.shadowBall, MoveDB.doubleTeam, MoveDB.doubleTEam, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.chargeBeam, MoveDB.gigaImpact, MoveDB.thunderWave, MoveDB.swordsDance, MoveDB.grassKnot, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.uTurn, MoveDB.substitute, MoveDB.wildCharge, MoveDB.confide],
            eggMoves: [MoveDB.screech, MoveDB.flameWheel, MoveDB.furySwipes, MoveDB.bit, MoveDB.counter, MoveDB.reversal, MoveDB.uproar, MoveDB.laswtResort, MoveDB.meFirst, MoveDB.revenge, MoveDB.finalGambit],
            tutorMoves: [MoveDB.covet, MoveDB.superFang, MoveDB.uproar, MoveDB.lastResort, MoveDB.icyWind, MoveDB.zenHeadbutt, MoveDB.ironTail, MoveDB.snore, MoveDB.shockWave, MoveDB.endeavor, MoveDB.stompingTantrum, MoveDB.throatChop]
        },
        {
            id: 21,
            name: "spearow",
            levelMoves: [MoveDB.peck, MoveDB.growl, MoveDB.leer, MoveDB.pursuit, MoveDB.furyAttack, MoveDB.aerialAce, MoveDB.mirrorMove, MoveDB.assurance, MoveDB.agility, MoveDB.focusEnergy, MoveDB.roost, MoveDB.drillPeck],
            tmMoves: [MoveDB.workUp, MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.protect, MoveDB.rainDance, MoveDB.roost, MoveDB.frustration, MoveDB.return, MoveDB.doubleTeam, MoveDB.aerialAce, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.echoedVoice, MoveDB.steelWing, MoveDB.falseSwipe, MoveDB.fly, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.uTurn, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.feintAttack, MoveDB.scaryFace, MoveDB.quickAttack, MoveDB.triAttack, MoveDB.astonish, MoveDB.skyAttack, MoveDB.whirlwind, MoveDB.uproar, MoveDB.featherDance, MoveDB.steelWing, MoveDB.razorWind],
            tutorMoves: [MoveDB.drillRun, MoveDB.uproar, MoveDB.snore, MoveDB.heatWave, MoveDB.tailwind, MoveDB.skyAttack, MoveDB.defog]
            
        },
        {
            id: 22,
            name: "fearow",
            levelMoves: [MoveDB.drillRun, MoveDB.pluck, MoveDB.growl, MoveDB.leer, MoveDB.pursuit, MoveDB.leer, MoveDB.pursuit, MoveDB.furyAttack, MoveDB.aerialAce, MoveDB.mirrorMove, MoveDB.assurance, MoveDB.agility, MoveDB.focusEnergy, MoveDB.roost, MoveDB.drillPeck, MoveDB.drillRun],
            tmMoves: [MoveDB.workUp, MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.hyperBeam, MoveDB.protect, MoveDB.rainDance, MoveDB.roost, MoveDB.frustration, MoveDB.return, MoveDB.doubleTeam, MoveDB.aerialAce, MoveDB.facade, MoveDB.attract, MoveDB.rest, MoveDB.thief, MoveDB.round, MoveDB.echoedVoice, MoveDB.steelWing, MoveDB.falseSwipe, MoveDB.gigaImpact, MoveDB.fly, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.uTurn, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.feintAttack, MoveDB.scaryFace, MoveDB.quickAttack, MoveDB.triAttack, MoveDB.astonish, MoveDB.skyAttack, MoveDB.whirlwind, MoveDB.uproar, MoveDB.featherDance, MoveDB.steelWing, MoveDB.razorWind],
            tutorMoves: [MoveDB.drillRun, MoveDB.uproar, MoveDB.snore, MoveDB.heatWave, MoveDB.tailwind, MoveDB.skyAttack, MoveDB.defog, MoveDB.throatChop, MoveDB.laserFocus]
        },
        {
            id: 23,
            name: "ekans",
            levelMoves: [MoveDB.wrap, MoveDB.leer, MoveDB.poisonSting, MoveDB.bite, MoveDB.glare, MoveDB.screech, MoveDB.acid, MoveDB.stockpile, MoveDB.swallow, MoveDB.spitUp, MoveDB.acidSpray, MoveDB.mudBomb, MoveDB.gastroAcid, MoveDB.belch, MoveDB.haze, MoveDB.coil, MoveDB.gunkShot],
            tmMoves: [MoveDB.toxic, MoveDB.venoshock, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.earthquake, MoveDB.return, MoveDB.doubleTeam, MoveDB.sludgeWave, MoveDB.sludgeBomb, MoveDB.rockTomb, MoveDB.torment, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.brutalSwing, MoveDB.payback, MoveDB.bulldoze, MoveDB.rockSlide, MoveDB.infestation, MoveDB.poisonJab, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.darkPulse, MoveDB.confide],
            eggMoves: [MoveDB.pursuit, MoveDB.slam, MoveDB.spite, MoveDB.beatUp, MoveDB.poisonFang, MoveDB.scaryFace, MoveDB.poisonTail, MoveDB.disable, MoveDB.switcheroo, MoveDB.ironTail, MoveDB.suckerPunch, MoveDB.snatch],
            tutorMoves: [MoveDB.seedBomb, MoveDB.gunkShot, MoveDB.aquaTail, MoveDB.ironTail, MoveDB.bind, MoveDB.snore, MoveDB.gigaDrain, MoveDB.gastroAcid, MoveDB.spite, MoveDB.snatch]
        },
        {
            id: 24,
            name: "arbok",
            levelMoves: [MoveDB.crunch, MoveDB.iceFang, MoveDB.thunderFang, MoveDB.fireFang, MoveDB.wrap, MoveDB.leer, MoveDB.poisonSting, MoveDB.bite, MoveDB.poisonSting, MoveDB.bite, MoveDB.glare, MoveDB.screech, MoveDB.acid, MoveDB.stockpile, MoveDB.swallow, MoveDB.spitUp, MoveDB.acidSpray, MoveDB.mudBomb, MoveDB.gastroAcid, MoveDB.belch, MoveDB.haze, MoveDB.coil, MoveDB.gunkShot],
            tmMoves: [MoveDB.toxic, MoveDB.venoshock, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.hyperBeam, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.earthquake, MoveDB.return, MoveDB.doubleTEam, MoveDB.sludeWave, MoveDB.sludgeBomb, MoveDB.rockTomb, MoveDB.torment, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.brutalSwing, MoveDB.payback, MoveDB.gigaImpact, MoveDB.bulldoze, MoveDB.rockSlide, MoveDB.dragonTail, MoveDB.infestation, MoveDB.poisonJab, MoveDB.swagger, MoveDB.sleeptAlk, MoveDB.substitute, MoveDB.darkPulse, MoveDB.confide],
            eggMoves: [MoveDB.pursuit, MoveDB.slam, MoveDB.spite, MoveDB.beatUp, MoveDB.poisonFang, MoveDB.scaryFace, MoveDB.poisonTail, MoveDB.disable, MoveDB.switcheroo, MoveDB.ironTail, MoveDB.suckerPunch, MoveDB.snatch],
            tutorMoves: [MoveDB.seedBomb, MoveDB.gunkShot, MoveDB.aquaTail, MoveDB.ironTail, MoveDB.bindvsnore, MoveDB.gigaDrain, MoveDB.gastroAcid, MoveDB.spite, MoveDB.snatch, MoveDB.stompingTantrum, MoveDB.throatChop]
        },
        {
            id: 25,
            name: "pikachu",
            levelMoves: [MoveDB.tailWhip, MoveDB.thunderShock, MoveDB.growl, MoveDB.placeNice, MoveDB.quickAttack, MoveDB.electroBall, MoveDB.thunderWave, MoveDB.feint, MoveDB.doubleTeam, MoveDB.spark, MoveDB.nuzzle, MoveDB.discharge, MoveDB.slam, MoveDB.thunderbolt, MoveDB.agility, MoveDB.wildCharge, MoveDB.lightScreen, MoveDB.thunder],
            tmMoves: [MoveDB.toxic, MoveDB.hiddenPower, MoveDB.lightSCreen, MoveDB.protect, MoveDB.rainDacne, MoveDB.frustration, MoveDB.thunderbolt, MoveDB.thunder, MoveDB.return, MoveDB.brickBreak, MoveDB.doubleTeam, MoveDB.facade, MoveDB.rest, MoveDB.atract, MoveDB.round, MoveDB.echoedVoice, MoveDB.fling, MoveDB.chargeBeam, MoveDB.voltSwitch, MoveDB.thunderWave, MoveDB.grassKnot, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.wildCharge, MoveDB.confide],
            eggMoves: [MoveDB.reversal, MoveDB.bide, MoveDB.present, MoveDB.encore, MoveDB.doubleSlap, MoveDB.wish, MoveDB.charge, MoveDB.fakeOut, MoveDB.thunderPunch, MoveDB.tickle, MoveDB.flail, MoveDB.endure, MoveDB.luckyChant, MoveDB.bestow, MoveDB.disarmingVoice, MoveDB.electricTerrain, MoveDB.voltTackle],
            tutorMoves: [MoveDB.voltTackle, MoveDB.covet, MoveDB.signalBeam, MoveDB.thunderPunch, MoveDB.magnetRise, MoveDB.electroweb, MoveDB.ironTail, MoveDB.snore, MoveDB.knockOff, MoveDB.focusPUnch, MoveDB.shockWave, MoveDB.helpingHanjd, MoveDB.laserFocus]
        },
        {
            id: 26,
            name: "raichu",
            levelMoves: [MoveDB.thunderShock, MoveDB.tailWhip, MoveDB.quickAttack, MoveDB.thunderBolt],
            tmoMoves: [MoveDB.toxic, MoveDB.hiddenPower, MoveDB.hyperBeam, MoveDB.lightScreen, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.thunderbolt, MoveDB.thudner, MoveDB.return, MoveDB.brickBreak, MoveDB.doubleTEam, MoveDB.facade, MoveDB.restg, MoveDB.attract, MoveDB.thieft, MoveDB.round, MoveDB.echoedVoice, MoveDB.focusBlast, MoveDB.fling, MoveDB.chargeBeam, MoveDB.gigaImpact, MoveDB.voltSwitch, MoveDB.thunderWVe, MoveDB.grassKnot, MoveDB.swagger, MoveDB.substitute, MoveDB.wildCharge, MoveDB.confide],
            eggMoves: [MoveDB.reversal, MoveDB.bide, MoveDB.present, MoveDB.encorfe, MoveDB.doubleSlap, MoveDB.wish, MoveDB.charge, MoveDB.fakeOut, MoveDB.thunderPunch, MoveDB.tickle, MoveDB.flail, MoveDB.endure, MoveDB.luckyChant, MoveDB.bestow, MoveDB.disarmingVoicve, MoveDB.electricTerrain, MoveDB.voltTackle],
            tutorMoves: [MoveDB.covet, MoveDB.signalBeam, MoveDB.thunderPunch, MoveDB.magnetRise, MoveDB.electroweb, MoveDB.ironTail, MoveDB.snore, MoveDB.knockOff, MoveDB.focusPunch, MoveDB.shockWave, MoveDB.helpingHand, MoveDB.laserFocus]
        },
        {
            id: 27,
            name: "sandshrew",
            levelMoves: [MoveDB.scratch, MoveDB.defenseCurl, MoveDB.sandAttack, MoveDB.poisonSting, MoveDB.rollout, MoveDB.rapidSpin, MoveDB.furyCutter, MoveDB.magnitude, MoveDB.swift, MoveDB.furySwipes, MoveDB.sandTomb, MoveDB.slash, MoveDB.dig, MoveDB.gyroBall, MoveDB.swordsDance, MoveDB.sandstorm, MoveDB.earthquake],
            tmMoves: [MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.protect, MoveDB.safeguard, MoveDB.frustration, MoveDB.earthquake, MoveDB.returnbrickBreak, MoveDB.doubleTEam, MoveDB.sandstorm, MoveDB.rockTomb, MoveDB.aerialAce, MoveDB.facade, MoveDB.rest, MoveDB.attractg, MoveDB.thief, MoveDB.round, MoveDB.fling, MoveDB.shadowClaw, MoveDB.gyroBall, MoveDB.swordsDance, MoveDB.bulldoze, MoveDB.rockSlide, MoveDB.xScissor, MoveDB.poisonJab, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.flail, MoveDB.counter, MoveDB.rapidSpin, MoveDB.metalClaw, MoveDB.crushClaw, MoveDB.nightSlash, MoveDB.mudShot, MoveDB.endure, MoveDB.chipAway, MoveDB.rockClimb, MoveDB.rototiller, MoveDB.honeClaws],
            tutorMoves: [MoveDB.covet, MoveDB.superFang, MoveDB.earthPower, MoveDB.ironTail, MoveDB.snore, MoveDB.knockOff, MoveDB.focusPunch, MoveDB.stealRock, MoveDB.stompingTantrum]
        },
        {
            id: 28,
            name: "sandslash",
            levelMoves: [MoveDB.crushClaw, MoveDB.scratch, MoveDB.defenseCurl, MoveDB.sandAttack, MoveDB.poisonSting, MoveDB.sandAttack, MoveDB.poisonSting, MoveDB.rollout, MoveDB.rapidSpin, MoveDB.furyCutter, MoveDB.magnitude, MoveDB.swift, MoveDB.furySwipes, MoveDB.sandTGomb, MoveDB.slash, MoveDB.dig, MoveDB.gyroBall, MoveDB.swordsDance, MoveDB.sandstorm, MoveDB.earthquake],
            tmMoves: [MoveDB.toxic, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.hyperBeam, MoveDB.protect, MoveDB.safeguard, MoveDB.frustration, MoveDB.earthquake, MoveDB.return, MoveDB.brickBreak, MoveDB.doubleTeam, MoveDB.sandstorm, MoveDB.rockTomb, MoveDB.aerialAce, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.focusBlast, MoveDB.fling, MoveDB.shadowClaw, MoveDB.gigaImpact, MoveDB.stoneEdge, MoveDB.gyroBall, MoveDB.swordsDance, MoveDB.bulldoze, MoveDB.rockSlide, MoveDB.xScissor, MoveDB.poisonJab, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.flail, MoveDB.counter, MoveDB.rapidSpin, MoveDB.metalClaw, MoveDB.crushClaw, MoveDB.nightSlash, MoveDB.mudShot, MoveDB.endure, MoveDB.chipAway, MoveDB.rockClimb, MoveDB.rototiller, MoveDB.honeClaws],
            tutorMoves: [MoveDB.covet, MoveDB.superFang, MoveDB.earthPower, MoveDB.ironTail, MoveDB.snore, MoveDB.knockOff, MoveDB.focusPunch, MoveDB.stealRock, MoveDB.stompingTantrum]
        },
        {
            id: 29,
            name: "nidoran-f",
            levelMoves: [MoveDB.growl, MoveDB.scratch, MoveDB.tailWhip, MoveDB.doubleKick, MoveDB.poisonString, MoveDB.furySwipes, MoveDB.bite, MoveDB.helpingHand, MoveDB.toxiSpikes, MoveDB.flatter, MoveDB.crunch, MoveDB.captivate, MoveDB.poisonFang],
            tmMoves: [MoveDB.toxic, MoveDB.venoshock, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.iceBeam, MoveDB.blizzard, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.thunderbolt, MoveDB.thunder, MoveDB.return, MoveDB.doubleTeam, MoveDB.sludgeBomb, MoveDB.aerialAce, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.echoedVoice, MoveDB.shadowClaw, MoveDB.poisonJab, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.supersonic, MoveDB.disable, MoveDB.takeDown, MoveDB.focusEnergy, MoveDB.charm, MoveDB.counter, MoveDB.beatUp, MoveDB.pursuit, MoveDB.skullBash, MoveDB.ironTail, MoveDB.poisonTail, MoveDB.endure, MoveDB.chipAway, MoveDB.venomDrench],
            tutorMoves: [MoveDB.superFang, MoveDB.ironTail, MoveDB.snore, MoveDB.shockWave, MoveDB.waterPulse, MoveDB.helpingHand]
        },
        {
            id: 30,
            name: "nidorina",
            levelMoves: [MoveDB.growl, MoveDB.scratch, MoveDB.tailWhip, MoveDB.doubleKick, MoveDB.poisonSting, MoveDB.furySwipes, MoveDB.bite, MoveDB.helpingHand, MoveDB.toxicSpikes, MoveDB.flatter, MoveDB.crunch, MoveDB.captivate, MoveDB.poisonFang],
            tmMoves: [MoveDB.toxic, MoveDB.venoshock, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.iceBeam, MoveDB.blizzard, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.thunderbolt, MoveDB.thunder, MoveDB.return, MoveDB.doubleTEam, MoveDB.sludeBomb, MoveDB.aerialAce, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.echodedVoiced, MoveDB.shadowClaw, MoveDB.poisonJab, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.confide],
            eggMoves: [MoveDB.supersonic, MoveDB.disable, MoveDB.takeDown, MoveDB.focusEnergy, MoveDB.charm, MoveDB.counter, MoveDB.beatUP, MoveDB.pursuit, MoveDB.skullBash, MoveDB.ironTail, MoveDB.poisonTail, MoveDB.endure, MoveDB.chipAway, MoveDB.venomDrench],
            tutorMoves: [MoveDB.superFang, MoveDB.ironTailvsnore, MoveDB.shockWave, MoveDB.waterPUlse, MoveDB.helpingHand, MoveDB.stompingTantrum]
        },
        {
            id: 31,
            name: "nidoqueen",
            levelMoves: [MoveDB.superpower, MoveDB.scratch, MoveDB.tailWhip, MoveDB.doubleKick, MoveDB.poiosnSting, MoveDB.chipAway, MoveDB.bodySlam, MoveDB.earthPower, MoveDB.superpower],
            tmMoves: [MoveDB.roar, MoveDB.toxic, MoveDB.venoshock, MoveDB.hiddenPower, MoveDB.sunnyDay, MoveDB.taunt, MoveDB.iceBeam, MoveDB.blizzard, MoveDB.hyperBeam, MoveDB.protect, MoveDB.rainDance, MoveDB.frustration, MoveDB.smackDown, MoveDB.thunderbolt, MoveDB.thunder, MoveDB.earthquake, MoveDB.return, MoveDB.shadowBall, MoveDB.brickBreak, MoveDB.doubleTeam, MoveDB.sludgeWave, MoveDB.flamethrower, MoveDB.sludgebomb, MoveDB.sandstorm, MoveDB.fireblast, MoveDB.rockTomb, MoveDB.aerialAce, MoveDB.torment, MoveDB.facade, MoveDB.rest, MoveDB.attract, MoveDB.thief, MoveDB.round, MoveDB.echoedVoice, MoveDB.focusBlast, MoveDB.fling, MoveDB.quash, MoveDB.shadowClaw, MoveDB.gigaImpact, MoveDB.stoneEdge, MoveDB.bulldoze, MoveDB.rockSlide, MoveDB.dragonTail, MoveDB.poisonJab, MoveDB.swagger, MoveDB.sleepTalk, MoveDB.substitute, MoveDB.surf, MoveDB.confide],
            eggMoves: [MoveDB.supersonic, MoveDB.diable, MoveDB.takeDown, MoveDB.focusEnergy, MoveDB.charm, MoveDB.counter, MoveDB.beatUp, MoveDB.pursuit, MoveDB.skullBash, MoveDB.ironTail, MoveDB.poisonTail, MoveDB.endure, MoveDB.chipAway, MoveDB.venomDrench],
            tutorMoves: [MoveDB.superFang, MoveDB.drillRun, MoveDB.uproar, MoveDB.thunderPunch, MoveDB.firePunch, MoveDB.icePUnch, MoveDB.earthPower, MoveDB.superpower, MoveDB.icyWind, MoveDB.aquaTail, MoveDB.dragonPulse, MoveDB.ironTail, MoveDB.snore, MoveDB.focusPunch, MoveDB.shockWave, MoveDB.waterPulse, MoveDB.helpingHand, MoveDB.outrage, MoveDB.stealthRock, MoveDB.stompingTantrum, MoveDB.throatChop]
        },
        {
            id: 32,
            name: "nidoran-m"
        },
        {
            id: 33,
            name: "nidorino"
        },
        {
            id: 34,
            name: "nidoking"
        },
        {
            id: 35,
            name: "clefairy"
        },
        {
            id: 36,
            name: "clefable"
        },
        {
            id: 37,
            name: "vulpix"
        },
        {
            id: 38,
            name: "ninetales"
        },
        {
            id: 39,
            name: "jigglypuff"
        },
        {
            id: 40,
            name: "wigglytuff"
        },
        {
            id: 41,
            name: "zubat"
        },
        {
            id: 42,
            name: "golbat"
        },
        {
            id: 43,
            name: "oddish"
        },
        {
            id: 44,
            name: "gloom"
        },
        {
            id: 45,
            name: "vileplume"
        },
        {
            id: 46,
            name: "paras"
        },
        {
            id: 47,
            name: "parasect"
        },
        {
            id: 48,
            name: "venonat"
        },
        {
            id: 49,
            name: "venomoth"
        },
        {
            id: 50,
            name: 'diglett'
        },
        {
            id: 51,
            name: "dugtrio"
        },
        {
            id: 52,
            name: "meowth"
        },
        {
            id: 53,
            name: "persian"
        },
        {
            id: 54,
            name: "psyduck"
        },
        {
            id: 55,
            name: "golduck"
        },
        {
            id: 56,
            name: "mankey"
        },
        {
            id: 57,
            name: "primeape"
        },
        {
            id: 58,
            name: "growlithe"
        },
        {
            id: 59,
            name: "arcanine"
        },
        {
            id: 60,
            name: "poliwag"
        },
        {
            id: 61,
            name: "poliwhirl"
        },
        {
            id: 62,
            name: "poliwrath"
        },
        {
            id: 63,
            name: "abra"
        },
        {
            id: 64,
            name: "kadabra"
        },
        {
            id: 65,
            name: "alakazam"
        },
        {
            id: 66,
            name: "machop"
        },
        {
            id: 67,
            name: "machoke"
        },
        {
            id: 68,
            name: "machamp"
        },
        {
            id: 69,
            name: "bellsprout"
        },
        {
            id: 70,
            name: "weepinbell"
        },
        {
            id: 71,
            name: "victreebel"
        },
        {
            id: 72,
            name: "tentacool"
        },
        {
            id: 73,
            name: "tentacruel"
        },
        {
            id: 74,
            name: "geodude"
        },
        {
            id: 75,
            name: "graveler"
        },
        {
            id: 76,
            name: "golem"
        },
        {
            id: 77,
            name: "ponyta"
        },
        {
            id: 78,
            name: "rapidash"
        },
        {
            id: 79,
            name: "slowpoke"
        },
        {
            id: 80,
            name: "slowbro"
        },
        {
            id: 81,
            name: "magnemite"
        },
        {
            id: 82,
            name: "magneton"
        },
        {
            id: 83,
            name: "farfetch'd"
        },
        {
            id: 84,
            name: "doduo"
        },
        {
            id: 85,
            name: "dodrio"
        },
        {
            id: 86,
            name: "seel"
        },
        {
            id: 87,
            name: "dewgong"
        },
        {
            id: 88,
            name: "grimer"
        },
        {
            id: 89,
            name: "muk"
        },
        {
            id: 90,
            name: "shellder"
        },
        {
            id: 91,
            name: "cloyster"
        },
        {
            id: 92,
            name: "gastly"
        },
        {
            id: 93,
            name: "haunter"
        },
        {
            id: 94,
            name: "gengar"
        },
        {
            id: 95,
            name: "onix"
        },
        {
            id: 96,
            name: "drowzee"
        },
        {
            id: 97,
            name: "hypno"
        },
        {
            id: 98,
            name: "krabby"
        },
        {
            id: 99,
            name: "kingler"
        },
        {
            id: 100,
            name: "voltorb"
        },
        {
            id: 101,
            name: "exeggcute"
        },
        {
            id: 102,
            name: "exeggutor"
        },
        {
            id: 103,
            name: "cubone"
        },
        {
            id: 104,
            name: "marowak"
        },
        {
            id: 105,
            name: "marowak"
        },
        {
            id: 106,
            name: "hitmonlee"
        },
        {
            id: 107,
            name: "hitmonchan"
        },
        {
            id: 108,
            name: "lickitung"
        },
        {
            id: 109,
            name: "koffing"
        },
        {
            id: 110,
            name: "weezing"
        },
        {
            id: 111,
            name: "rhyhorn"
        },
        {
            id: 112,
            name: "rhydon"
        },
        {
            id: 113,
            name: "chansey"
        },
        {
            id: 114,
            name: "tangela"
        },
        {
            id: 115,
            name: "kangaskhan"
        },
        {
            id: 116,
            name: "horsea"
        },
        {
            id: 117,
            name: "seadra"
        },
        {
            id: 118,
            name: "goldeen"
        },
        {
            id: 119,
            name: "seaking"
        },
        {
            id: 120,
            name: "staryu"
        },
        {
            id: 121,
            name: "starmie"
        },
        {
            id: 122,
            name: "mr-mime"
        },
        {
            id: 123,
            name: "scyther"
        },
        {
            id: 124,
            name: "jynx"
        },
        {
            id: 125,
            name: "electabuzz"
        },
        {
            id: 126,
            name: "magmar"
        },
        {
            id: 127,
            name: "pinsir"
        },
        {
            id: 128,
            name: "tauros"
        },
        {
            id: 129,
            name: "magikarp"
        },
        {
            id: 130,
            name: "gyrados"
        },
        {
            id: 131,
            name: "lapras"
        },
        {
            id: 132,
            name: "ditto"
        },
        {
            id: 133,
            name: "eevee"
        },
        {
            id: 134,
            name: "vaporeon"
        },
        {
            id: 135,
            name: "jolteon"
        },
        {
            id: 136,
            name: "flareon"
        },
        {
            id: 137,
            name: "porygon"
        },
        {
            id: 138,
            name: "omanyte"
        },
        {
            id: 139,
            name: "omastar"
        },
        {
            id: 140,
            name: "kabuto"
        },
        {
            id: 141,
            name: "kabutops"
        },
        {
            id: 142,
            name: "aerodactyl"
        },
        {
            id: 143,
            name: "snorlax"
        },
        {
            id: 144,
            name: "articuno"
        },
        {
            id: 145,
            name: "zapdos"
        },
        {
            id: 146,
            name: "moltres"
        },
        {
            id: 147,
            name: "dratini"
        },
        {
            id: 148,
            name: "dragonair"
        },
        {
            id: 149,
            name: "dragonite"
        },
        {
            id: 150,
            name: "mewtwo"
        },
        {
            id: 151,
            name: "mew"
        },
        {
            id: 152,
            name: "chikorita"
        },
        {
            id: 153,
            name: "bayleef"
        },
        {
            id: 154,
            name: "meganium"
        },
        {
            id: 155,
            name: "cyndaquil"
        },
        {
            id: 156,
            name: "quilava"
        },
        {
            id: 157,
            name: "typhlosion"
        },
        {
            id: 158,
            name: "totodile"
        },
        {
            id: 159,
            name: "croconaw"
        },
        {
            id: 160,
            name: "feraligatr"
        },
        {
            id: 161,
            name: "sentret"
        },
        {
            id: 162,
            name: "furret"
        },
        {
            id: 163,
            name: "hoothoot"
        },
        {
            id: 164,
            name: "noctowl"
        },
        {
            id: 165,
            name: "ledyba"
        },
        {
            id: 166,
            name: "ledian"
        },
        {
            id: 167,
            name: "spinarak"
        },
        {
            id: 168,
            name: "ariados"
        },
        {
            id: 169,
            name: "crobat"
        },
        {
            id: 170,
            name: "chinchou"
        },
        {
            id: 171,
            name: "lanturn"
        },
        {
            id: 172,
            name: "pichu"
        },
        {
            id: 173,
            name: "cleffa"
        },
        {
            id: 174,
            name: "igglybuff"
        },
        {
            id: 175,
            name: "togepi"
        },
        {
            id: 176,
            name: "togetic"
        },
        {
            id: 177,
            name: "natu"
        },
        {
            id: 178,
            name: "xatu"
        },
        {
            id: 179,
            name: "mareep"
        },
        {
            id: 180,
            name: "flaaffy"
        },
        {
            id: 181,
            name: "ampharos"
        },
        {
            id: 182,
            name: "bellossom"
        },
        {
            id: 183,
            name: "marill"
        },
        {
            id: 184,
            name: "azumarill"
        },
        {
            id: 185,
            name: "sudowoodo"
        },
        {
            id: 186,
            name: "politoed"
        },
        {
            id: 187,
            name: "hoppip"
        },
        {
            id: 188,
            name: "skiploom"
        },
        {
            id: 189,
            name: "jumpluff"
        },
        {
            id: 190,
            name: "aipom"
        },
        {
            id: 191,
            name: "sunkern"
        },
        {
            id: 192,
            name: "sunflora"
        },
        {
            id: 193,
            name: "yanma"
        },
        {
            id: 194,
            name: "wooper"
        },
        {
            id: 195,
            name: "quagsire"
        },
        {
            id: 196,
            name: "espeon"
        },
        {
            id: 197,
            name: "umbreon"
        },
        {
            id: 198,
            name: "murkrow"
        },
        {
            id: 199,
            name: "slowking"
        },
        {
            id: 200,
            name: "misdreavus"
        },
        {
            id: 201,
            name: "unown"
        },
        {
            id: 202,
            name: "wobbuffet"
        },
        {
            id: 203,
            name: "girafarig"
        },
        {
            id: 204,
            name: "pineco"
        },
        {
            id: 205,
            name: "forretress"
        },
        {
            id: 206,
            name: "dunsparce"
        },
        {
            id: 207,
            name: "gligar"
        },
        {
            id: 208,
            name: "steelix"
        },
        {
            id: 209,
            name: "subbull"
        },
        {
            id: 210,
            name: "granbull"
        },
        {
            id: 211,
            name: "qwilfish"
        },
        {
            id: 212,
            name: "scizor"
        },
        {
            id: 213,
            name: "shuckle"
        },
        {
            id: 214,
            name: "heracross"
        },
        {
            id: 215,
            name: "sneasel"
        },
        {
            id: 216,
            name: "teddiursa"
        },
        {
            id: 217,
            name: "ursaring"
        },
        {
            id: 218,
            name: "slugma"
        },
        {
            id: 219,
            name: "magcargo"
        },
        {
            id: 220,
            name: "swinub"
        },
        {
            id: 221,
            name: "piloswine"
        },
        {
            id: 222,
            name: "corsola"
        },
        {
            id: 223,
            name: "remoraid"
        },
        {
            id: 224,
            name: "octillery"
        },
        {
            id: 225,
            name: "delibird"
        },
        {
            id: 226,
            name: "mantine"
        },
        {
            id: 227,
            name: "skarmory"
        },
        {
            id: 228,
            name: "houndour"
        },
        {
            id: 229,
            name: "houndoom"
        },
        {
            id: 230,
            name: "kingdra"
        },
        {
            id: 231,
            name: "phanpy"
        },
        {
            id: 232,
            name: "donphan"
        },
        {
            id: 233,
            name: "porgon2"
        },
        {
            id: 234,
            name: "stantler"
        },
        {
            id: 235,
            name: "smeargle"
        },
        {
            id: 236,
            name: "tyrogue"
        },
        {
            id: 237,
            name: "hitmontop"
        },
        {
            id: 238,
            name: "smoochum"
        },
        {
            id: 239,
            name: "elekid"
        },
        {
            id: 240,
            name: "magby"
        },
        {
            id: 241,
            name: "miltank"
        },
        {
            id: 242,
            name: "blissey"
        },
        {
            id: 243,
            name: "raikou"
        },
        {
            id: 244,
            name: "entei"
        },
        {
            id: 245,
            name: "suicune"
        },
        {
            id: 246,
            name: "larvitar"
        },
        {
            id: 247,
            name: "pupitar"
        },
        {
            id: 248,
            name: "tyranitar"
        },
        {
            id: 249,
            name: "lugia"
        },
        {
            id: 250,
            name: "ho-oh"
        },
        {
            id: 251,
            name: "celebi"
        },
        {
            id: 252,
            name: "treecko"
        },
        {
            id: 253,
            name: "grovyle"
        },
        {
            id: 254,
            name: "sceptile"
        },
        {
            id: 255,
            name: "torchic"
        },
        {
            id: 256,
            name: "combusken"
        },
        {
            id: 257,
            name: "blaziken"
        },
        {
            id: 258,
            name: "mudkip"
        },
        {
            id: 259,
            name: "marshtomp"
        },
        {
            id: 260,
            name: "swampert"
        },
        {
            id: 261,
            name: "poochyena"
        },
        {
            id: 262,
            name: "mightyena"
        },
        {
            id: 263,
            name: "zigzagoon"
        },
        {
            id: 264,
            name: "linoone"
        },
        {
            id: 265,
            name: "wurmple"
        },
        {
            id: 266,
            name: "silcoon"
        },
        {
            id: 267,
            name: "beautifly"
        },
        {
            id: 268,
            name: "cascoon"
        },
        {
            id: 269,
            name: "dustox"
        },
        {
            id: 270,
            name: "lotad"
        },
        {
            id: 271,
            name: "lombre"
        },
        {
            id: 272,
            name: "ludicolo"
        },
        {
            id: 273,
            name: "seedot"
        },
        {
            id: 274,
            name: "nuzleaf"
        },
        {
            id: 275,
            name: "shiftry"
        },
        {
            id: 276,
            name: "taillow"
        },
        {
            id: 277,
            name: "swellow"
        },
        {
            id: 278,
            name: "wingull"
        },
        {
            id: 279,
            name: "pelipper"
        },
        {
            id: 280,
            name: "ralts"
        },
        {
            id: 281,
            name: "kirlia"
        },
        {
            id: 282,
            name: "gardevoir"
        },
        {
            id: 283,
            name: "surskit"
        },
        {
            id: 284,
            name: "masquerain"
        },
        {
            id: 285,
            name: "shroomish"
        },
        {
            id: 286,
            name: "breloom"
        },
        {
            id: 287,
            name: "slakoth"
        },
        {
            id: 288,
            name: "vigoroth"
        },
        {
            id: 289,
            name: "slaking"
        },
        {
            id: 290,
            name: "nincada"
        },
        {
            id: 291,
            name: "ninjask"
        },
        {
            id: 292,
            name: "shedinja"
        },
        {
            id: 293,
            name: "whismur"
        },
        {
            id: 294,
            name: "loudred"
        },
        {
            id: 295,
            name: "exploud"
        },
        {
            id: 296,
            name: "makuhita"
        },
        {
            id: 297,
            name: "hariyama"
        },
        {
            id: 298,
            name: "azurill"
        },
        {
            id: 299,
            name: "nosepass"
        },
        {
            id: 300,
            name: "skitty"
        },
        {
            id: 301,
            name: "delcatty"
        },
        {
            id: 302,
            name: "sableye"
        },
        {
            id: 303,
            name: "mawile"
        },
        {
            id: 304,
            name: "aron"
        },
        {
            id: 305,
            name: "lairon"
        },
        {
            id: 306,
            name: "aggron"
        },
        {
            id: 307,
            name: "meditite"
        },
        {
            id: 308,
            name: "medicham"
        },
        {
            id: 309,
            name: "electrike"
        },
        {
            id: 310,
            name: "manectric"
        },
        {
            id: 311,
            name: "plusle"
        },
        {
            id: 312,
            name: "minun"
        },
        {
            id: 313,
            name: "volbeat"
        },
        {
            id: 314,
            name: "illumise"
        },
        {
            id: 315,
            name: "roselia"
        },
        {
            id: 316,
            name: "gulpin"
        },
        {
            id: 317,
            name: "swalot"
        },
        {
            id: 318,
            name: "carvanha"
        },
        {
            id: 319,
            name: "sharpedo"
        },
        {
            id: 320,
            name: "wailmer"
        },
        {
            id: 321,
            name: "wailord"
        },
        {
            id: 322,
            name: "numel"
        },
        {
            id: 323,
            name: "camerupt"
        },
        {
            id: 324,
            name: "torkoal"
        },
        {
            id: 325,
            name: "spoink"
        },
        {
            id: 326,
            name: "grumpig"
        },
        {
            id: 327,
            name:"spinda"
        },
        {
            id: 328,
            name: "trapinch"
        },
        {
            id: 329,
            name: "vibrava"
        },
        {
            id: 330,
            name: "flygon"
        },
        {
            id: 331,
            name: "cacnea"
        },
        {
            id: 332,
            name: "cacturne"
        },
        {
            id: 333,
            name: "swablu"
        },
        {
            id: 334,
            name: "altaria"
        },
        {
            id: 335,
            name: "zangoose"
        },
        {
            id: 336,
            name: "seviper"
        },
        {
            id: 337,
            name: "lunatone"
        },
        {
            id: 338,
            name: "solrock"
        },
        {
            id: 339,
            name: "barboach"
        },
        {
            id: 340,
            name: "whiscash"
        },
        {
            id: 341,
            name: "corphish"
        },
        {
            id: 342,
            name: "crawdaunt"
        },
        {
            id: 343,
            name: "baltoy"
        },
        {
            id: 344,
            name: "claydol"
        },
        {
            id: 345,
            name: "lileep"
        },
        {
            id: 346,
            name: "cradily"
        },
        {
            id: 347,
            name: "anorith"
        },
        {
            id: 348,
            name: "armaldo"
        },
        {
            id: 349,
            name: "feebas"
        },
        {
            id: 350,
            name: "milotic"
        },
        {
            id: 351,
            name: "castform"
        },
        {
            id: 352,
            name: "kecleon"
        },
        {
            id: 353,
            name: "shuppet"
        },
        {
            id: 354,
            name: "banette"
        },
        {
            id: 355,
            name: "duskull"
        },
        {
            id: 356,
            name: "dusclops"
        },
        {
            id: 357,
            name: "tropius"
        },
        {
            id: 358,
            name: "chimecho"
        },
        {
            id: 359,
            name: "absol"
        },
        {
            id: 360,
            name: "wynaut"
        },
        {
            id: 361,
            name: "snorunt"
        },
        {
            id: 362,
            name: "glalie"
        },
        {
            id: 363,
            name: "spheal"
        },
        {
            id: 364,
            name: "sealeo"
        },
        {
            id: 365,
            name: "walrein"
        },
        {
            id: 366,
            name: "clamperl"
        },
        {
            id: 367,
            name: "huntail"
        },
        {
            id: 368,
            name: "gorebyss"
        },
        {
            id: 369,
            name: "relicanth"
        },
        {
            id: 370,
            name: "luvdisc"
        },
        {
            id: 371,
            name: "bagon"
        },
        {
            id: 372,
            name: "shelgon"
        },
        {
            id: 373,
            name: "salamence"
        },
        {
            id: 374,
            name: "beldum"
        },
        {
            id: 375,
            name: "metang"
        },
        {
            id: 376,
            name: "metagross"
        },
        {
            id: 377,
            name: "regirock"
        },
        {
            id: 378,
            name: "regice"
        },
        {
            id: 379,
            name: "registeel"
        },
        {
            id: 380,
            name: "latias"
        },
        {
            id: 381,
            name: "latios"
        },
        {
            id: 382,
            name: "kyogre"
        },
        {
            id: 383,
            name: "groudon"
        },
        {
            id: 384,
            name: "rayquaza"
        },
        {
            id: 385,
            name: "jirachi"
        },
        {
            id: 386,
            name: "deoxys"
        },
        {
            id: 387,
            name: "turtwig"
        },
        {
            id: 388,
            name: "grotle"
        },
        {
            id: 389,
            name: "torterra"
        },
        {
            id: 390,
            name: "chimchar"
        },
        {
            id: 391,
            name: "monferno"
        },
        {
            id: 392,
            name: "infernape"
        },
        {
            id: 393,
            name: "piplup"
        },
        {
            id: 394,
            name: "prinplup"
        },
        {
            id: 395,
            name: "empoleon"
        },
        {
            id: 396,
            name: "starly"
        },
        {
            id: 397,
            name: "staravia"
        },
        {
            id: 398,
            name: "staraptor"
        },
        {
            id: 399,
            name: "bidoof"
        },
        {
            id: 400,
            name: "bibarel"
        },
        {
            id: 401,
            name: "kricketot"
        },
        {
            id: 402,
             name: "kricketune"
        },
        {
            id: 403,
            name: "shinx"
        },
        {
            id: 404,
            name: "luxio"
        },
        {
            id: 405,
            name: "luxray"
        },
        {
            id: 406,
            name: "budew",
        },
        {
            id: 407,
            name: "roserade"
        },
        {
            id: 408,
            name: "cranidos"
        },
        {
            id: 409,
            name: "rampardos"
        },
        {
            id: 410,
            name: "shieldon"
        },
        {
            id: 411,
            name: "bastiodon"
        },
        {
            id: 412,
            name: "burmy"
        },
        {
            id: 413,
            name: "wormadam"
        },
        {
            id: 414,
            name: "mothim"
        },
        {
            id: 415,
            name: "combee"
        },
        {
            id: 416,
            name: "vespiquen"
        },
        {
            id: 417,
            name: "pachirisu"
        },
        {
            id: 418,
            name: "buizel"
        },
        {
            id: 419,
            name: "floatzel"
        },
        {
            id: 420,
            name: "cherubi"
        },
        {
            id: 421,
            name: "cherrim"
        },
        {
            id: 422,
            name: "shellos"
        },
        {
            id: 423,
            name: "gastrodon"
        },
        {
            id: 424,
            name: "ambipom"
        },
        {
            id: 425,
            name: "drifloon"
        },
        {
            id: 426,
            name: "drifblim"
        },
        {
            id: 427,
            name: "buneary"
        },
        {
            id: 428,
            name: "lopunny"
        },
        {
            id: 429,
            name: "mismagius"
        },
        {
            id: 430,
            name: "honchkrow"
        },
        {
            id: 431,
            name: "glameow"
        },
        {
            id: 432,
            name: "purugly"
        },
        {
            id: 433,
            name: "chingling"
        },
        {
            id: 434,
            name: "stunky"
        },
        {
            id: 435,
            name: "skuntank"
        },
        {
            id: 436,
            name: "bronzor"
        },
        {
            id: 437,
            name: "bronzong"
        },
        {
            id: 438,
            name: "bonsly"
        },
        {
            id: 439,
            name: "mime-jr"
        },
        {
            id: 440,
            name: "happiny"
        },
        {
            id: 441,
            name: "chatot"
        },
        {
            id: 442,
            name: "spiritomb"
        },
        {
            id: 443,
            name: "gible"
        },
        {
            id: 444,
            name: "gabite"
        },
        {
            id: 445,
            name: "garchomp"
        },
        {
            id: 446,
            name: "munchlax"
        },
        {
            id: 447,
            name: "riolu"
        },
        {
            id: 448,
            name: "lucario"
        },
        {
            id: 449,
            name: "hippopotas"
        },
        {
            id: 450,
            name: "hippowdon"
        },
        {
            id: 451,
            name: "skorupi"
        },
        {
            id: 452,
            name: "drapion"
        },
        {
            id: 453,
            name: "croagunk"
        },
        {
            id: 454,
            name: "toxicroak"
        },
        {
            id: 455,
            name: "carnivine"
        },
        {
            id: 456,
            name: "finneon"
        },
        {
            id: 457,
            name: "lumineon"
        },
        {
            id: 458,
            name: "mantyke"
        },
        {
            id: 459,
            name: "snover"
        },
        {
            id: 460,
            name: "abomasnow"
        },
        {
            id: 461,
            name: "weavile"
        },
        {
            id: 462,
            name: "magnezone"
        },
        {
            id: 463,
            name: "lickilicky"
        },
        {
            id: 464,
            name: "rhyperior"
        },
        {
            id: 465,
            name: "tangrowth"
        },
        {
            id: 466,
            name: "electivire"
        },
        {
            id: 467,
            name: "magmortar"
        },
        {
            id: 468,
            name: "togekiss"
        },
        {
            id: 469,
            name: "yanmega"
        },
        {
            id: 470,
            name: "leafeon"
        },
        {
            id: 471,
            name: "glaceon"
        },
        {
            id: 472,
            name: "gliscor"
        },
        {
            id: 473,
            name: "mamoswine"
        },
        {
            id: 474,
            name: "porygon-z"
        },
        {
            id: 475,
            name: "gallade"
        },
        {
            id: 476,
            name: "probopass"
        },
        {
            id: 477,
            name: "dusknoir"
        },
        {
            id: 478,
            name: "froslass"
        },
        {
            id: 479,
            name: "rotom"
        },
        {
            id: 480,
            name: "uxie"
        },
        {
            id: 481,
            name: "mespirt"
        },
        {
            id: 482,
            name: "azelf"
        },
        {
            id: 483,
            name: "dialga"
        },
        {
            id: 484,
            name: "palkia"
        },
        {
            id: 485,
            name: "heatran"
        },
        {
            id: 486,
            name: "regigigas"
        },
        {
            id: 487,
            name: "girantina"
        },
        {
            id: 488,
            name: "cresselia"
        },
        {
            id: 489,
            name: "phione"
        },
        {
            id: 490,
            name: "manaphy"
        },
        {
            id: 491,
            name: "darkrai"
        },
        {
            id: 492,
            name: "shaymin"
        },
        {
            id: 493,
            name: "arceus"
        },
        {
            id: 494,
            name: "victini"
        },
        {
            id: 495,
            name: "snivy"
        },
        {
            id: 496,
            name: "servine"
        },
        {
            id: 497,
            name: "serperior"
        },
        {
            id: 498,
            name: "tepig"
        },
        {
            id: 499,
            name: "pignite"
        },
        {
            id: 500,
            name: "emboar"
        },
        {
            id: 501,
            name: "oshawott"
        },
        {
            id: 502,
            name: "dewott"
        },
        {
            id: 503,
            name: "samurott"
        },
        {
            id: 504,
            name: "patrat"
        },
        {
            id: 505,
            name: "watchog"
        },
        {
            id: 506,
            name: "lilipup"
        },
        {
            id: 507,
            name: "herdier"
        },
        {
            id: 508,
            name: "stoutland"
        },
        {
            id: 509,
            name: "purrloin"
        },
        {
            id: 510,
            name: "liepard"
        },
        {
            id: 511,
            name: "pansage"
        },
        {
            id: 512,
            name: "simisage"
        },
        {
            id: 513,
            name: "pansear"
        },
        {
            id: 514,
            name: "simisear"
        },
        {
            id: 515,
            name: "panpour"
        },
        {
            id: 516,
            name: "simipour"
        },
        {
            id: 517,
            name: "munna"
        },
        {
            id: 518,
            name: "musharna"
        },
        {
            id: 519,
            name: "pidove"
        },
        {
            id: 520,
            name: "tranquill"
        },
        {
            id: 521,
            name: "unfezant"
        },
        {
            id: 522,
            name: "blitzle"
        },
        {
            id: 523,
            name: "zebstrika"
        },
        {
            id: 524,
            name: "roggenrola"
        },
        {
            id: 525,
            name: "boldore"
        },
        {
            id: 526,
            name: "gigalith"
        },
        {
            id: 527,
            name: "woobat"
        },
        {
            id: 528,
            name: "swoobat"
        },
        {
            id: 529,
            name: "drilbur"
        },
        {
            id: 530,
            name: "exadrill"
        },
        {
            id: 531,
            name: "audino"
        },
        {
            id: 532,
            name: "timburr"
        },
        {
            id: 533,
            name: "gurdurr"
        },
        {
            id: 534,
            name: "conkeldurr"
        },
        {
            id: 535,
            name: "tympole"
        },
        {
            id: 536,
            name: "palpitoad"
        },
        {
            id: 537,
            name: "seismitoad"
        },
        {
            id: 538,
            name: "throh"
        },
        {
            id: 539,
            name: "sawk"
        },
        {
            id: 540,
            name: "sewaddle"
        },
        {
            id: 541,
            name: "swadloon"
        },
        {
            id: 542,
            name: "leavanny"
        },
        {
            id: 543,
            name: "venipede"
        },
        {
            id: 544,
            name: "whirlipede"
        },
        {
            id: 545,
            name: "scolipede"
        },
        {
            id: 546,
            name: "cottonee"
        },
        {
            id: 547,
            name: "whimsicott"
        },
        {
            id: 548,
            name: "petilil"
        },
        {
            id: 549,
            name: "liligant"
        },
        {
            id: 550,
            name: "basculin"
        },
        {
            id: 551,
            name: "sandile"
        },
        {
            id: 552,
            name: "krokorok"
        },
        {
            id: 553,
            name: "krookodile"
        },
        {
            id: 554,
            name: "darumaka"
        },
        {
            id: 555,
            name: "darmanitan"
        },
        {
            id: 556,
            name: "maractus"
        },
        {
            id: 557,
            name: "dwebble"
        },
        {
            id: 558,
            name: "crustle"
        },
        {
            id: 559,
            name: "scraggy"
        },
        {
            id: 560,
            name: "scrafty"
        },
        {
            id: 561,
            name: "sigilyph"
        },
        {
            id: 562,
            name: "yamask"
        },
        {
            id: 563,
            name: "cofagrigus"
        },
        {
            id: 564,
            name: "tirtouga"
        },
        {
            id: 565,
            name: "carracosta"
        },
        {
            id: 566,
            name: "archen"
        },
        {
            id: 567,
            name: "archeops"
        },
        {
            id: 568,
            name: "trubbish"
        },
        {
            id: 569,
            name: "garbodor"
        },
        {
            id: 570,
            name: "zorua"
        },
        {
            id: 571,
            name: "zoroark"
        },
        {
            id: 572,
            name: "minccino"
        },
        {
            id: 573,
            name: "cinccino"
        },
        {
            id: 574,
            name: "gothita"
        },
        {
            id: 575,
            name: "gothorita"
        },
        {
            id: 576,
            name: "gothitelle"
        },
        {
            id: 577,
            name: "solosis"
        },
        {
            id: 578,
            name: "duosion"
        },
        {
            id: 579,
            name: "reuniclus"
        },
        {
            id: 580,
            name: "ducklett"
        },
        {
            id: 581,
            name: "swanna"
        },
        {
            id: 582,
            name: "vanillite"
        },
        {
            id: 583,
            name: "vanillish"
        },
        {
            id: 584,
            name: "vaniluxe"
        },
        {
            id: 585,
            name: "deerling"
        },
        {
            id: 586,
            name: "sawsbuck"
        },
        {
            id: 587,
            name: "emolga"
        },
        {
            id: 588,
            name: "karrablast"
        },
        {
            id: 589,
            name: "escavalier"
        },
        {
            id: 590,
            name: "foongus"
        },
        {
            id: 591,
            name: "amoonguss"
        },
        {
            id: 592,
            name: "frillish"
        },
        {
            id: 593,
            name: "jellicent"
        },
        {
            id: 594,
            name: "alomomola"
        },
        {
            id: 595,
            name: "joltik"
        },
        {
            id: 596,
            name: "galvantula"
        },
        {
            id: 597,
            name: "ferroseed"
        },
        {
            id: 598,
            name: "ferrothorn"
        },
        {
            id: 599,
            name: "klink"
        },
        {
            id: 600,
            name: "klang"
        },
        {
            id: 601,
            name: "klinklang"
        },
        {
            id: 602,
            name: "tynamo"
        },
        {
            id: 603,
            name: "eelecktrik"
        },
        {
            id: 604,
            name: "eelektross"
        },
        {
            id: 605,
            name: "elgyem"
        },
        {
            id: 606,
            name: "beheeyem"
        },
        {
            id: 607,
            name: "litwick"
        },
        {
            id: 608,
            name: "lampent"
        },
        {
            id: 609,
            name: "chandelure"
        },
        {
            id: 610,
            name: "axew"
        },
        {
            id: 611,
            name: "fraxure"
        },
        {
            id: 612,
            name: "haxorus"
        },
        {
            id: 613,
            name: "cubchoo"
        },
        {
            id: 614,
            name: "beartic"
        },
        {
            id: 615,
            name: "cryogonal"
        },
        {
            id: 616,
            name: "shelmet"
        },
        {
            id: 617,
            name: "accelgor"
        },
        {
            id: 618,
            name: "stunfisk"
        },
        {
            id: 619,
            name: "mienfoo"
        },
        {
            id: 620,
            name: "mienshao"
        },
        {
            id: 621,
            name: "druddigon"
        },
        {
            id: 622,
            name: "golett"
        },
        {
            id: 623,
            name: "golurk"
        },
        {
            id: 624,
            name: "pawniard"
        },
        {
            id: 625,
            name: "bisharp"
        },
        {
            id: 626,
            name: "bouffalant"
        },
        {
            id: 627,
            name: "rufflet"
        },
        {
            id: 628,
            name: "braviary"
        },
        {
            id: 629,
            name: "vullaby"
        },
        {
            id: 630,
            name: "mandibuzz"
        },
        {
            id: 631,
            name: "heatmor"
        },
        {
            id: 632,
            name: "durant"
        },
        {
            id: 633,
            name: "deino"
        },
        {
            id: 634,
            name: "zweilous"
        },
        {
            id: 635,
            name: "hydreigon"
        },
        {
            id: 636,
            name: "larvesta"
        },
        {
            id: 637,
            name: "volcarona"
        },
        {
            id: 638,
            name: "cobalion"
        },
        {
            id: 639,
            name: "terrakion"
        },
        {
            id: 640,
            name: "virizion"
        },
        {
            id: 641,
            name: "tornadus"
        },
        {
            id: 642,
            name: "thundurus"
        },
        {
            id: 643,
            name: "reshiram"
        },
        {
            id: 644,
            name: "zekrom"
        },
        {
            id: 645,
            name: "landorus"
        },
        {
            id: 646,
            name: "kyurem"
        },
        {
            id: 647,
            name: "keldeo"
        },
        {
            id: 648,
            name: "meloetta"
        },
        {
            id: 649,
            name: "genesect"
        },
        {
            id: 650,
            name: "chespin"
        },
        {
            id: 651,
            name: "quilladin"
        },
        {
            id: 652,
            name: "chesnaught"
        },
        {
            id: 653,
            name: "fennekin"
        },
        {
            id: 654,
            name: "braixen"
        },
        {
            id: 655,
            name: "delphox"
        },
        {
            id: 656,
            name: "froakie"
        },
        {
            id: 657,
            name: "frogadier"
        },
        {
            id: 658,
            name: "greninja"
        },
        {
            id: 659,
            name: "bunnelby"
        },
        {
            id: 660,
            name: "diggersby"
        },
        {
            id: 661,
            name: "fletchling"
        },
        {
            id: 662,
            name: "fletchinder"
        },
        {
            id: 663,
            name: "talonflame"
        },
        {
            id: 664,
            name: "scatterbug"
        },
        {
            id: 665,
            name: "spewpa"
        },
        {
            id: 666,
            name: "vivillon"
        },
        {
            id: 667,
            name: "litleo"
        },
        {
            id: 668,
            name: "pyroar"
        },
        {
            id: 669,
            name: "flabebe"
        },
        {
            id: 670,
            name: "floette"
        },
        {
            id: 671,
            name: "florges"
        },
        {
            id: 672,
            name: "skiddo"
        },
        {
            id: 673,
            name: "gogoat"
        },
        {
            id: 674,
            name: "pancham"
        },
        {
            id: 675,
            name: "pangoro"
        },
        {
            id: 676,
            name: "furfrou"
        },
        {
            id: 677,
            name: "espurr"
        },
        {
            id: 678,
            name: "meowstic"
        },
        {
            id: 679,
            name: "honedge"
        },
        {
            id: 680,
            name: "doublade"
        },
        {
            id: 681,
            name: "aegislash"
        },
        {
            id: 682,
            name: "spritzee"
        },
        {
            id: 683,
            name: "aromatisse"
        },
        {
            id: 684,
            name: "swirlix"
        },
        {
            id: 685,
            name: "slurpuff"
        },
        {
            id: 686,
            name: "inkay"
        },
        {
            id: 687,
            name: "malamar"
        },
        {
            id: 688,
            name: "binacle"
        },
        {
            id: 689,
            name: "barbaracle"
        },
        {
            id: 690,
            name: "skrelp"
        },
        {
            id: 691,
            name: "dragalge"
        },
        {
            id: 692,
            name: "clauncher"
        },
        {
            id: 693,
            name: "clawitzer"
        },
        {
            id: 694,
            name: "helioptile"
        },
        {
            id: 695,
            name: "heliolisk"
        },
        {
            id: 696,
            name: "tyrunt"
        },
        {
            id: 697,
            name: "tyrantrum"
        },
        {
            id: 698,
            name: "amaura"
        },
        {
            id: 699,
            name: "aurorus"
        },
        {
            id: 700,
            name: "sylveon"
        },
        {
            id: 701,
            name: "hawlucha"
        },
        {
            id: 702,
            name: "dedenne"
        },
        {
            id: 703,
            name: "carbink"
        },
        {
            id: 704,
            name: "goomy"
        },
        {
            id: 705,
            name: "sliggoo"
        },
        {
            id: 706,
            name: "goodra"
        },
        {
            id: 707,
            name: "klefki"
        },
        {
            id: 708,
            name: "phantump"
        },
        {
            id: 709,
            name: "trevenant"
        },
        {
            id: 710,
            name: "pumpkaboo"
        },
        {
            id: 711,
            name: "gourgeist"
        },
        {
            id: 712,
            name: "bergmite"
        },
        {
            id: 713,
            name: "avalugg"
        },
        {
            id: 714,
            name: "noibat"
        },
        {
            id: 715,
            name: "noivern"
        },
        {
            id: 716,
            name: "xerneas"
        },
        {
            id: 717,
            name: "yveltal"
        },
        {
            id: 718,
            name: "zygarde"
        },
        {
            id: 719,
            name: "diancie"
        },
        {
            id: 720,
            name: "hoopa"
        },
        {
            id: 721,
            name: "volcanion"
        },
        {
            id: 722,
            name: "rowlet"
        },
        {
            id: 723,
            name: "dartrix"
        },
        {
            id: 724,
            name: "decidueye"
        },
        {
            id: 725,
            name: "litten"
        },
        {
            id: 726,
            name: "torracat"
        },
        {
            id: 727,
            name: "incineroar"
        },
        {
            id: 728,
            name: "popplio"
        },
        {
            id: 729,
            name: "brionne"
        },
        {
            id: 730,
            name: "primarina"
        },
        {
            id: 731,
            name: "pikipek"
        },
        {
            id: 732,
            name: "trumbeak"
        },
        {
            id: 733,
            name: "toucannon"
        },
        {
            id: 734,
            name: "yungoos"
        },
        {
            id: 735,
            name: "gumshoos"
        },
        {
            id: 736,
            name: "grubbin"
        },
        {
            id: 737,
            name: "charjabug"
        },
        {
            id: 738,
            name: "vikavolt"
        },
        {
            id: 739,
            name: "crabrawler"
        },
        {
            id: 740,
            name: "crabominable"
        },
        {
            id: 741,
            name: "oricorio"
        },
        {
            id: 742,
            name: "cutiefly"
        },
        {
            id: 743,
            name: "ribombee"
        },
        {
            id: 744,
            name: "rockruff"
        },
        {
            id: 745,
            name: "lycanroc"
        },
        {
            id: 746,
            name: "wishiwashi"
        },
        {
            id: 747,
            name: "mareanie"
        },
        {
            id: 748,
            name: "toxapex"
        },
        {
            id: 749,
            name: "mudbray"
        },
        {
            id: 750,
            name: "mudsdale"
        },
        {
            id: 751,
            name: "dewpider"
        },
        {
            id: 752,
            name: "araquanid"
        },
        {
            id: 753,
            name: "formantis"
        },
        {
            id: 754,
            name: "lurantis"
        },
        {
            id: 755,
            name: "morelull"
        },
        {
            id: 756,
            name: "shiinotic"
        },
        {
            id: 757,
            name: "salandit"
        },
        {
            id: 758,
            name: "salazzle"
        },
        {
            id: 759,
            name: "stufful"
        },
        {
            id: 760,
            name: "bewear"
        },
        {
            id: 761,
            name: "bounsweet"
        },
        {
            id: 762,
            name: "steenee"
        },
        {
            id: 763,
            name: "tsareena"
        },
        {
            id: 764,
            name: "comfey"
        },
        {
            id: 765,
            name: "oranguru"
        },
        {
            id: 766,
            name: "passimian"
        },
        {
            id: 767,
            name: "wimpod"
        },
        {
            id: 768,
            name: "golisopod"
        },
        {
            id: 769,
            name: "sandygast"
        },
        {
            id: 770,
            name: "palossand"
        },
        {
            id: 771,
            name: "pyukumuku"
        },
        {
            id: 772,
            name: "type-null"
        },
        {
            id: 773,
            name: "silvally"
        },
        {
            id: 774,
            name: "minior"
        },
        {
            id: 775,
            name: "komala"
        },
        {
            id: 776,
            name: "turtonator"
        },
        {
            id: 777,
            name: "togedemaru"
        },
        {
            id: 778,
            name: "mimikyu"
        },
        {
            id: 779,
            name: "bruxish"
        },
        {
            id: 780,
            name: "drampa"
        },
        {
            id: 781,
            name: "dhelmise"
        },
        {
            id: 782,
            name: "jangmo-o"
        },
        {
            id: 783,
            name: "hakamo-o"
        },
        {
            id: 784,
            name: "kommo-o"
        },
        {
            id: 785,
            name: "tapu koko"
        },
        {
            id: 786,
            name: "tapu lele"
        },
        {
            id: 787,
            name: "tapu bulu"
        },
        {
            id: 788,
            name: "tapu fini"
        },
        {
            id: 789,
            name: "cosmog"
        },
        {
            id: 790,
            name: "cosmoem"
        },
        {
            id: 791,
            name: "solgaleo"
        },
        {
            id: 792,
            name: "lunala"
        },
        {
            id: 793,
            name: "nihilego"
        },
        {
            id: 794,
            name: "buzzwole"
        },
        {
            id: 795,
            name: "pheromosa"
        },
        {
            id: 796,
            name: "xurkitree"
        },
        {
            id: 797,
            name: "celesteela"
        },
        {
            id: 798,
            name: "kartana"
        },
        {
            id: 799,
            name: "guzzlord"
        },
        {
            id: 800,
            name: "necrozma"
        },
        {
            id: 801,
            name: "magearna"
        },
        {
            id: 802,
            name: "marshadow"
        },
        {
            id: 803,
            name: "poipole"
        },
        {
            id: 804,
            name: "naganadel"
        },
        {
            id: 805,
            name: "stakataka"
        },
        {
            id: 806,
            name: "blacephalon"
        },
        {
            id: 807,
            name: "zertaora"
        }
    ];

export default PokemonDB;