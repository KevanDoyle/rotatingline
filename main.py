dly = 100
blinks = [
"""
    # . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . #
    """,
    """
    . . . . #
    . . . # .
    . . # . .
    . # . . .
    # . . . .
    """,
    """
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    """,
    """
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    """
]
def on_button_pressed_a():
'''
    basic.show_leds(blinks[0])
    basic.pause(dly)
    basic.show_leds(blinks[1])
    basic.pause(dly)
'''
    led.toggle(0, 0)
    led.toggle(0,5)
    led.toggle(5, 0)
    led.toggle(5, 0)
    basic.pause(dly)
def on_button_pressed_b():
    basic.show_leds(blinks[2])
    basic.pause(dly)
    basic.show_leds(blinks[3])
    basic.pause(dly)
def just_blink():
    led.toggle(2, 2)
    basic.pause(dly)
input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    just_blink()

basic.forever(on_forever)
