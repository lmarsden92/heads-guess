let text_list: string[] = []
let INDEX = 0
input.onButtonPressed(Button.A, function () {
    game.addScore(1)
})
input.onButtonPressed(Button.B, function () {
    game.removeLife(1)
})
input.onGesture(Gesture.Shake, function () {
    text_list = ["APPLE", "BANANA", "CARROT", "DICE", "EGGS", "FRANK", "GOAT", "HOUSE", "IGLOO", "JUMPER", "KITE"]
    INDEX = randint(0, text_list.length - 1)
    for (let index = 0; index < 2; index++) {
        basic.showString("" + (text_list[INDEX]))
    }
})
basic.forever(function () {
	
})
