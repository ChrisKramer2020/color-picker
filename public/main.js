let hue = 360
let saturation = 100
let lightness = 50
let alpha = 0

const getHSL = () => {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

const main = () => {
  const colorbox = document.querySelector('div.colorbox')
  const hueInput = document.querySelector('input[name=a]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    colorbox.style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
    console.log(getHSL())
    console.log(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
  })

  const saturationInput = document.querySelector('input[name=b]')
  saturationInput.addEventListener('input', () => {
    saturation = saturationInput.value
    colorbox.style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
    console.log(getHSL())
    console.log(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
  })

  const lightnessInput = document.querySelector('input[name=c]')
  lightnessInput.addEventListener('input', (event) => {
    lightness = lightnessInput.value
    colorbox.style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
    console.log(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
    console.log(getHSL())
  })
  const alphaInput = document.querySelector('input[name=d]')
  alphaInput.addEventListener('input', (event) => {
    alpha = alphaInput.value
    colorbox.style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
    console.log(`hsl(${alpha}, ${saturation}%, ${lightness}%))`)
    console.log(getHSL())
  })
}

document.addEventListener('DOMContentLoaded', main)
