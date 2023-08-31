radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(0)
})
radio.setGroup(158)
basic.forever(function () {
    radio.sendNumber(1)
    basic.pause(2000)
    radio.sendNumber(2)
    basic.pause(5000)
})
