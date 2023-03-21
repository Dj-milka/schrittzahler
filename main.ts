let schritte = 0
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    schritte = 0
})
input.onGesture(Gesture.Shake, function () {
    schritte += 1
})
basic.forever(function () {
    basic.showNumber(schritte, 10)
})
