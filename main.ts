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
function light_all() {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}

function toggle_x() {
    led.toggle(0, 0)
    led.toggle(0, 4)
    led.toggle(2, 2)
    led.toggle(4, 0)
    led.toggle(4, 4)
    basic.pause(dly)
}

function just_blink() {
    led.toggle(2, 2)
    basic.pause(dly)
}

basic.forever(function on_forever() {
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        basic.clearScreen()
        toggle_x()
        basic.pause(dly)
    })
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        light_all()
        toggle_x()
        basic.pause(dly)
    })
    just_blink()
})
