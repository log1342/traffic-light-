input.onButtonPressed(Button.A, function () {
    crosswalk += 1
    if (crosswalk == 1) {
        basic.showIcon(IconNames.No)
        basic.pause(5000)
        GREEN()
        basic.showIcon(IconNames.StickFigure)
        basic.pause(15000)
        crosswalk_counter = 5
        for (let index = 0; index < 4; index++) {
            basic.showNumber(crosswalk_counter)
            basic.pause(1000)
            crosswalk_counter += -1
        }
        basic.pause(1000)
        basic.showIcon(IconNames.No)
        crosswalk += -1
    }
    just_red()
})
function traffic_light () {
    GREEN()
    basic.showIcon(IconNames.StickFigure)
    basic.pause(20000)
    crosswalk_counter = 5
    for (let index = 0; index < 5; index++) {
        basic.showNumber(crosswalk_counter)
        basic.pause(1000)
        crosswalk_counter += -1
    }
    basic.showIcon(IconNames.No)
    YELLOW()
    basic.pause(3000)
    basic.showIcon(IconNames.No)
    RED()
    basic.showIcon(IconNames.No)
    basic.pause(25000)
    just_red()
}
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function just_red () {
    RED()
    basic.showIcon(IconNames.No)
}
function traffic_light2 () {
    GREEN()
    basic.showIcon(IconNames.No)
    basic.pause(20000)
    crosswalk_counter = 5
    for (let index = 0; index < 5; index++) {
        basic.showNumber(crosswalk_counter)
        basic.pause(1000)
        crosswalk_counter += -1
    }
    basic.showIcon(IconNames.No)
    YELLOW()
    basic.pause(3000)
    basic.showIcon(IconNames.No)
    RED()
    basic.showIcon(IconNames.No)
    basic.pause(25000)
    just_red()
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "EMERGENCY125") {
        basic.pause(2000)
        EMERGENCY()
    } else if (receivedString == "EMERGENCY126") {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    crosswalk = 1
    if (crosswalk == 1) {
        basic.showIcon(IconNames.No)
        basic.pause(5000)
        GREEN()
        basic.showIcon(IconNames.StickFigure)
        for (let index = 0; index < 4; index++) {
            music.playMelody("C5 - C5 - C5 - C5 - ", 150)
        }
        basic.pause(15000)
        crosswalk_counter = 5
        for (let index = 0; index < 4; index++) {
            basic.showNumber(crosswalk_counter)
            basic.pause(1000)
            crosswalk_counter += -1
        }
        basic.pause(1000)
        basic.showIcon(IconNames.No)
        just_red()
    }
})
function EMERGENCY () {
    GREEN()
    basic.showIcon(IconNames.No)
    basic.pause(15000)
    just_red()
}
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
// sensor number is 5.8
let distance = 0
let range: neopixel.Strip = null
let crosswalk_counter = 0
let strip: neopixel.Strip = null
let crosswalk = 0
crosswalk = 0
basic.showIcon(IconNames.Yes)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(50)
crosswalk = 0
just_red()
radio.setGroup(125)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
    if (distance <= 1000 && crosswalk == 0) {
        traffic_light2()
    } else {
        just_red()
    }
})
