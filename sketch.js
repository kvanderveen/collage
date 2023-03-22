let images, song, slider, button
let index = 0
let tintLevel = 255

function preload() {
  song = loadSound('sound/money.mp3')
  images = loadImages(drugs)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  slider = drawSlider()
  button = drawButton()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  slider.remove()
  button.remove()
  slider = drawSlider()
  button = drawButton()
}

function draw() {
  button.remove()
  button = drawButton()
  song.setVolume(slider.value())
  background(255)
  drawImageAndText(images[index], tintLevel)
  drawSliderText()
  if (song.isPlaying()) adjustTintLevelAndIndex()
}

function adjustTintLevelAndIndex() {
  tintLevel -= 0.5
  if (tintLevel === 0) {
    index = (index + 1) % images.length
    tintLevel = 255
  }
}
