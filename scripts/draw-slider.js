function drawSlider() {
  slider = createSlider(0, 1, 0.5, 0.01)
  const sliderWidth = width * 0.5
  slider.position(width / 2 - sliderWidth / 2, height * 0.05)
  slider.style('width', sliderWidth + 'px')
  return slider
}
