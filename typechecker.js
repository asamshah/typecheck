const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const colorTags = document.querySelectorAll("div.colors div")

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

sentenceTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.value = this.value
  } else {
    outputTag.value = originalText
  }
})

outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value
})

typesizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = this.value + "px"
  typesizeOutput.innerHTML = this.value + "px"
})

lineheightTag.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})

italicTag.addEventListener("change", function () {
  if (this.checked) {
    outputTag.style.fontStyle = "italic"
  } else {
    outputTag.style.fontStyle = "normal"
  }
})

typefaceTag.addEventListener("input", function () {
  outputTag.style.fontFamily = this.value
})

colorTags.forEach(tag => {
  
  tag.addEventListener("click", function () {
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color
    
    colorTags.forEach(tag => {
      tag.classList.remove("selected")
    })
    this.classList.add("selected")
  })
  
})


context.strokeStyle = "#ff4141"
context.lineWidth = 10
context.lineCap = "round"

let shouldPaint = false

document.addEventListener("mousedown", function (event) {
  shouldPaint = true
  context.moveTo(event.pageX, event.pageY)
  context.beginPath()
})

document.addEventListener("mouseup", function (event) {
  shouldPaint = false
})

document.addEventListener("mousemove", function (event) {
  if (shouldPaint) {
    context.lineTo(event.pageX, event.pageY)
  	context.stroke()
  }
})

document.addEventListener("touchstart", function (event) {
  shouldPaint = true
  context.moveTo(event.pageX, event.pageY)
  context.beginPath()
})

document.addEventListener("touchmove", function (event) {
  shouldPaint = false
})

document.addEventListener("touchend", function (event) {
  if (shouldPaint) {
    context.lineTo(event.pageX, event.pageY)
  	context.stroke()
  }
})

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (event) {
    context.strokeStyle = this.style.backgroundColor
  })
})













