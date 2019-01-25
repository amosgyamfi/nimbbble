//
//  Color Palette.js
//  Kite
//
//  Created on 6/13/17.
//

// ------------------------------------------
// Info
// ------------------------------------------
/*

 Use the 'layer' variable to
 reference the layer outside of a
 function.
 
 Use the 'this' keyword to reference
 the layer inside of a function.
 
 For example:
 
 layer.mouseUp = function(event) {
    this.position.x = 42;
 };

 */


// ------------------------------------------
// Called just before the presentation starts
// ------------------------------------------

function chooseColor(event) {
    
    var canvasLayer = canvas.getLayerByName("Canvas");
    
    canvasLayer.strokeColor = this.backgroundColor;
}

layer.canvasReady = function(event) {

    for (var colorLayer of this.sublayers)
    {
        colorLayer.mouseDown = chooseColor;
        colorLayer.mouseDragged = function(event) {}
    }
};
