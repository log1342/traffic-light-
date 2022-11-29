input.onButtonPressed(Button.A, function () {
    crosswalk = 1
    if (crosswalk == 1) {
        basic.showIcon(IconNames.No)
        basic.pause(5000)
        GREEN()
        basic.showIcon(IconNames.StickFigure)
        basic.pause(15000)
        crosswalk_counter = 5
        for (let index = 0; index < 5; index++) {
            basic.showNumber(crosswalk_counter)
            basic.pause(1000)
            crosswalk_counter += -1
        }
        basic.pause(1000)
        basic.showIcon(IconNames.No)
    }
})
function traffic_light () {
    RED()
    basic.showIcon(IconNames.No)
    basic.pause(25000)
    GREEN()
    basic.showIcon(IconNames.StickFigure)
    basic.pause(20000)
    crosswalk_counter = 5
    for (let index = 0; index < 5; index++) {
        basic.showNumber(crosswalk_counter)
        basic.pause(1000)
        crosswalk_counter += -1
    }
    YELLOW()
    basic.pause(3000)
    basic.showIcon(IconNames.No)
}
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function GREEN () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let crosswalk_counter = 0
let crosswalk = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Yes)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(50)
crosswalk = 0
basic.forever(function () {
	
})
