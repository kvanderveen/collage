let images, song, slider, button
let index = 0
let tintLevel = 255

function preload() {
  song = loadSound('sound/money.mp3')
  images = loadImages()
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  slider = drawSlider()
  button = drawButton()
}

function draw() {
  song.setVolume(slider.value())
  background(255)
  drawImage(images[index], tintLevel)
  drawSliderText()
  adjustTintLevelAndIndex()
}

function adjustTintLevelAndIndex() {
  tintLevel -= 0.5
  if (tintLevel === 0) {
    index = (index + 1) % images.length
    tintLevel = 255
  }
}
