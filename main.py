dly = 100

def on_forever():
    basic.show_leds("""
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        """)
    basic.pause(dly)
    basic.show_leds("""
        . # . . .
        . . . . .
        . . # . .
        . . . . .
        . . . # .
        """)
    basic.pause(dly)
    basic.show_leds("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        """)
    basic.pause(dly)
    basic.show_leds("""
        . . . # .
        . . . . .
        . . # . .
        . . . . .
        . # . . .
        """)
    basic.pause(dly)
    basic.show_leds("""
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        """)
    basic.pause(dly)
    basic.show_leds("""
        . . . . .
        . . . . #
        . . # . .
        # . . . .
        . . . . .
        """)
    basic.pause(dly)
    basic.show_leds("""
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        """)
    basic.pause(dly)
    basic.show_leds("""
        . . . . .
        # . . . .
        . . # . .
        . . . . #
        . . . . .
        """)
    basic.pause(dly)
basic.forever(on_forever)
