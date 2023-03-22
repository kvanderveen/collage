function drawButton() {
  const buttonText = song.isPlaying() ? 'pause music' : 'play music'
  const button = createButton(buttonText)
  button.position(width / 2 - button.width / 2, height * 0.1)
  button.mousePressed(togglePlaying)
  return button
}

function togglePlaying() {
  song.isPlaying() ? song.pause() : song.play()
}
