input.onButtonPressed(Button.A, function () {
    basic.showString("" + (text_list._pickRandom()))
    basic.pause(1000)
    basic.showString(" 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.stopAnimation()
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("BASTAAA!!!")
})
let text_list: string[] = []
text_list = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
