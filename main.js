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
