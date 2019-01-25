//
//  Line Width Palette.js
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

function chooseLineWidth(event) {
    
    var canvasLayer = canvas.getLayerByName("Canvas");
    
    canvasLayer.lineWidth = this.lineWidth;
}

layer.canvasReady = function(event) {

    for (var lineLayer of this.sublayers)
    {
        lineLayer.mouseDown = chooseLineWidth;
        lineLayer.mouseDragged = function(event) {}
    }
};

