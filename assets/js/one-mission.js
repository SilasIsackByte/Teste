const dianaImage = document.getElementById('dianaImage')
const peterImage = document.getElementById('peterImage')
const jillImage = document.getElementById('jillImage')
const jamesImage = document.getElementById('jamesImage')

function dianaOn() {
    dianaImage.classList.add('photoActive')
    dianaImage.classList.remove('photoDefault')
}

function dianaOff() {
    dianaImage.classList.add('photoDefault')
    dianaImage.classList.remove('photoActive')
}
function peterOn() {
    peterImage.classList.add('photoActive')
    peterImage.classList.remove('photoDefault')
}

function peterOff() {
    peterImage.classList.add('photoDefault')
    peterImage.classList.remove('photoActive')
}
function jillOn() {
    jillImage.classList.add('photoActive')
    jillImage.classList.remove('photoDefault')
}

function jillOff() {
    jillImage.classList.add('photoDefault')
    jillImage.classList.remove('photoActive')
}
function jamesOn() {
    jamesImage.classList.add('photoActive')
    jamesImage.classList.remove('photoDefault')
}

function jamesOff() {
    jamesImage.classList.add('photoDefault')
    jamesImage.classList.remove('photoActive')
}