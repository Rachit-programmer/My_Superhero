var canvas =new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_objects = "";
var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("thor.png", function(Img){
    player_objects = Img;
    player_objects.scaleToWidth(150);
    player_objects.scaleToHeight(140);
    player_objects.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_objects);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

if(e.shiftKey == true && keyPressed == '80'){
    console.log("p & shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(e.shiftKey == true && keyPressed == '77'){
    console.log("m & shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(keyPressed == '38'){
    up();
    console.log("up");
}
if(keyPressed == '40'){
    down();
    console.log("down");
}
if(keyPressed == '37'){
    left();
    console.log("left");
}
if(keyPressed == '39'){
    right();
    console.log("right");
}
if(keyPressed == '70'){
    new_image('spiderman_face.png');
    console.log("f");
}
if(keyPressed == '66'){
    new_image('hulk_body.png');
    console.log("b");
}
if(keyPressed == '76'){
    new_image('ironmen.png');
    console.log("l");
}
if(keyPressed == '82'){
    new_image('thor_right_hand.jpg');
    console.log("r");
}
if(keyPressed == '84'){
    new_image('captain_america_left_hand.png');
    console.log("h");
}

}
