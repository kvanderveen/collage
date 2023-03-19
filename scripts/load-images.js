function loadImages() {
  const images = Object.keys(drugs).map((drug) => {
    const filePath = `images/${drug}.jpeg`
    const img = loadImage(filePath)
    return { img, imgText: drugs[drug] }
  })
  return images
}
