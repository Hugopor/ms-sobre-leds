basic.forever(function () {
    led.plotBrightness(0, 0, 2)
    basic.pause(200)
    led.unplot(0, 0)
    led.plotBrightness(0, 0, 35)
    led.plotBrightness(1, 0, 56)
    led.plotBrightness(2, 0, 68)
    basic.pause(200)
    led.unplot(2, 0)
    led.plotBrightness(0, 0, 80)
    led.plotBrightness(1, 0, 97)
    led.plotBrightness(2, 0, 100)
    led.plotBrightness(3, 0, 117)
    basic.pause(200)
    led.unplot(3, 0)
    led.plotBrightness(0, 0, 130)
    led.plotBrightness(1, 0, 150)
    led.plotBrightness(2, 0, 200)
    led.plotBrightness(3, 0, 214)
    led.plotBrightness(4, 0, 230)
    basic.pause(200)
    led.unplot(4, 0)
    led.plotBrightness(0, 0, 247)
    led.plotBrightness(2, 0, 255)
    led.plotBrightness(3, 0, 212)
    led.plotBrightness(4, 0, 191)
    led.plotBrightness(4, 1, 160)
    led.plotBrightness(3, 1, 144)
    basic.pause(200)
    led.unplot(3, 1)
    led.plotBrightness(2, 1, 132)
    led.plotBrightness(1, 1, 99)
    led.plotBrightness(0, 1, 82)
    basic.pause(200)
    led.unplot(0, 1)
})
