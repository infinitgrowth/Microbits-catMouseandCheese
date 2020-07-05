input.onButtonPressed(Button.A, function () {
    cat.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    cat.change(LedSpriteProperty.X, 1)
})
let cat: game.LedSprite = null
cat = game.createSprite(randint(0, 4), 2)
let mouse = game.createSprite(randint(0, 4), 0)
let cheese = game.createSprite(randint(0, 4), 4)
let mouselife = 2
basic.forever(function () {
    if (mouse.isTouching(cat)) {
        mouselife += -1
        if (mouselife != 0) {
            basic.showNumber(mouselife)
            basic.pause(100)
            mouse.change(LedSpriteProperty.Y, -2)
            mouse.change(LedSpriteProperty.X, randint(0, 4))
            cheese.change(LedSpriteProperty.X, randint(-4, 4))
        }
    } else if (mouse.isTouching(cheese)) {
        mouselife += 1
        if (mouselife != 6) {
            basic.showNumber(mouselife)
            basic.pause(100)
            mouse.change(LedSpriteProperty.Y, -4)
            mouse.change(LedSpriteProperty.X, randint(0, 4))
            cheese.change(LedSpriteProperty.X, randint(-4, 4))
        }
    } else {
        mouse.change(LedSpriteProperty.X, randint(-1, 1))
        basic.pause(100)
        mouse.change(LedSpriteProperty.Y, randint(-1, 1))
        basic.pause(50)
        mouse.ifOnEdgeBounce()
    }
})
basic.forever(function () {
    if (mouselife == 0) {
        cat.delete()
        mouse.delete()
        cheese.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Chessboard)
        }
        basic.showString("You won! Great job!")
    } else if (mouselife == 0) {
        cat.delete()
        mouse.delete()
        cheese.delete()
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Chessboard)
        }
        basic.showString("You won! Great job!")
    } else {
        game.resume()
    }
})
