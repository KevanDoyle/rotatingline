let dly = 100
basic.forever(function on_forever() {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.pause(dly)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . # . .
        . . . . .
        . . . # .
        `)
    basic.pause(dly)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(dly)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . # . .
        . . . . .
        . # . . .
        `)
    basic.pause(dly)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.pause(dly)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . # . .
        # . . . .
        . . . . .
        `)
    basic.pause(dly)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(dly)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . # . .
        . . . . #
        . . . . .
        `)
    basic.pause(dly)
})
