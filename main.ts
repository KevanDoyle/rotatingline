let dly = 100
let blinks = [`
    # . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . #
    `, `
    . . . . #
    . . . # .
    . . # . .
    . # . . .
    # . . . .
    `, `
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `, `
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `]
function just_blink() {
    led.toggle(2, 2)
    basic.pause(dly)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    //     basic.show_leds(blinks[0])
    //     basic.pause(dly)
    //     basic.show_leds(blinks[1])
    //     basic.pause(dly)
    led.toggle(2, 2)
    basic.pause(dly)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(blinks[2])
    basic.pause(dly)
    basic.showLeds(blinks[3])
    basic.pause(dly)
})
basic.forever(function on_forever() {
    just_blink()
})
