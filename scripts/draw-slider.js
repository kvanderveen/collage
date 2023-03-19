function drawSlider() {
  slider = createSlider(0, 1, 0.5, 0.01)
  const sliderWidth = windowWidth * 0.5
  slider.position(windowWidth / 2 - sliderWidth / 2, windowHeight * 0.05)
  slider.style('width', sliderWidth + 'px')
  return slider
}
