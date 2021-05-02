devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
})
devices.onGamepadButton(MesDpadButtonInfo.DDown, function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
})
devices.onGamepadButton(MesDpadButtonInfo.CDown, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
})
