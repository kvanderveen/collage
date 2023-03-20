function drawImageAndText(imageObject, tintLevel) {
  const { img, imgText } = imageObject
  const imageHeight = height / 3
  const imageWidth = (img.width * imageHeight) / img.height
  tint(255, tintLevel)
  image(img, width / 2 - imageWidth / 2, height * 0.2, imageWidth, imageHeight)
  textAlign(CENTER, CENTER)
  fill(0, 255 - tintLevel)
  textWrap(WORD)
  textSize(width * (width < 800 ? 0.04 : 0.03))
  text(imgText, width / 2 - width * 0.4, imageHeight + height * 0.1, width * 0.8, height * 0.6)
}
