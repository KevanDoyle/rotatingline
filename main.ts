let dly = 100
basic.forever(function () {
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
