def on_button_pressed_a():
    global crosswalk, crosswalk_counter
    crosswalk += 1
    if crosswalk == 1:
        basic.show_icon(IconNames.NO)
        basic.pause(5000)
        GREEN()
        basic.show_icon(IconNames.STICK_FIGURE)
        basic.pause(15000)
        crosswalk_counter = 5
        for index in range(4):
            basic.show_number(crosswalk_counter)
            basic.pause(1000)
            crosswalk_counter += -1
        basic.pause(1000)
        basic.show_icon(IconNames.NO)
        crosswalk += -1
    just_red()
input.on_button_pressed(Button.A, on_button_pressed_a)

def traffic_light():
    global crosswalk_counter
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
    RED()
    basic.show_icon(IconNames.NO)
    basic.pause(25000)
    just_red()
def RED():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.RED))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
def just_red():
    RED()
    basic.show_icon(IconNames.NO)
def GREEN():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.GREEN))

def on_received_string(receivedString):
    if receivedString == "EMERGENCY":
        basic.pause(2000)
        EMERGENCY()
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global crosswalk, crosswalk_counter
    crosswalk = 1
    if crosswalk == 1:
        basic.show_icon(IconNames.NO)
        basic.pause(5000)
        GREEN()
        basic.show_icon(IconNames.STICK_FIGURE)
        for index3 in range(4):
            music.play_melody("C5 - C5 - C5 - C5 - ", 150)
        basic.pause(15000)
        crosswalk_counter = 5
        for index4 in range(4):
            basic.show_number(crosswalk_counter)
            basic.pause(1000)
            crosswalk_counter += -1
        basic.pause(1000)
        basic.show_icon(IconNames.NO)
        just_red()
input.on_button_pressed(Button.B, on_button_pressed_b)

def EMERGENCY():
    GREEN()
    basic.show_icon(IconNames.NO)
def YELLOW():
    global range2
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
# sensor number is 5.8
distance = 0
range2: neopixel.Strip = None
crosswalk_counter = 0
strip: neopixel.Strip = None
crosswalk = 0
crosswalk = 0
basic.show_icon(IconNames.YES)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.set_brightness(50)
crosswalk = 0
just_red()
radio.set_group(125)

def on_forever():
    global distance
    pins.digital_write_pin(DigitalPin.P1, 0)
    control.wait_micros(2)
    pins.digital_write_pin(DigitalPin.P1, 1)
    control.wait_micros(10)
    pins.digital_write_pin(DigitalPin.P1, 0)
    distance = pins.pulse_in(DigitalPin.P2, PulseValue.HIGH) / 58
    basic.pause(2000)
    if distance <= 1000 and crosswalk == 0:
        traffic_light()
    else:
        just_red()
basic.forever(on_forever)
