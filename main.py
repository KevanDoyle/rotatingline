dly = 100
blinks = ["""
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

def light_all():
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)

def toggle_x():
    led.toggle(0, 0)
    led.toggle(0,4)
    led.toggle(2,2)
    led.toggle(4, 0)
    led.toggle(4, 4)
    basic.pause(dly)

def on_button_pressed_a():
    basic.clear_screen()
    toggle_x()
    basic.pause(dly)

def on_button_pressed_b():
    light_all()    
    toggle_x()
    basic.pause(dly)

def just_blink():
    led.toggle(2, 2)
    basic.pause(dly)

def on_forever():
    input.on_button_pressed(Button.A, on_button_pressed_a)
    input.on_button_pressed(Button.B, on_button_pressed_b)
    just_blink()

basic.forever(on_forever)
