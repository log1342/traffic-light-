def on_button_pressed_a():
    global crosswalk, crosswalk_counter
    crosswalk = 1
    if crosswalk == 1:
        basic.show_icon(IconNames.NO)
        basic.pause(5000)
        GREEN()
        basic.show_icon(IconNames.STICK_FIGURE)
        basic.pause(15000)
        crosswalk_counter = 5
        for index in range(5):
            basic.show_number(crosswalk_counter)
            basic.pause(1000)
            crosswalk_counter += -1
        basic.pause(1000)
        basic.show_icon(IconNames.NO)
    traffic_light()
input.on_button_pressed(Button.A, on_button_pressed_a)

def traffic_light():
    global crosswalk_counter
    RED()
    basic.show_icon(IconNames.NO)
    basic.pause(25000)
    GREEN()
    basic.show_icon(IconNames.STICK_FIGURE)
    basic.pause(20000)
    crosswalk_counter = 5
    for index2 in range(5):
        basic.show_number(crosswalk_counter)
        basic.pause(1000)
        crosswalk_counter += -1
    basic.show_icon(IconNames.NO)
    YELLOW()
    basic.pause(3000)
    basic.show_icon(IconNames.NO)
def RED():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.RED))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
def GREEN():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.GREEN))
def YELLOW():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
range2: neopixel.Strip = None
crosswalk_counter = 0
crosswalk = 0
strip: neopixel.Strip = None
basic.show_icon(IconNames.YES)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.set_brightness(50)
crosswalk = 0

def on_forever():
    traffic_light()
basic.forever(on_forever)
