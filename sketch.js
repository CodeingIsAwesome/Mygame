var girl,girlimg
var Bg
function preload(){
girlimg = loadImage('girl.jpg')
Bg = loadImage('download.jpg')
}

function setup() {
createCanvas(800,800)
 girl = createSprite(400,400)
 girl.addImage('Girl',girlimg)
}

function draw() {
 background(Bg)
 drawSprites()
}
