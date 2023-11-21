input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (randint(0, 10) < 5) {
        light.showAnimation(light.sparkleAnimation, 2000)
    } else {
        light.showAnimation(light.runningLightsAnimation, 2000)
    }
})
forever(function () {
	
})
