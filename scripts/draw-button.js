function drawButton() {
  const button = createButton('play music')
  button.position(width / 2 - button.width / 2, height * 0.1)
  button.mousePressed(togglePlaying)
  return button
}

function togglePlaying() {
  if (song.isPlaying()) {
    song.pause()
    button.html('play music')
    button.position(width / 2 - button.width / 2, height * 0.1)
  } else {
    song.play()
    button.html('pause music')
    button.position(width / 2 - button.width / 2, height * 0.1)
  }
}
