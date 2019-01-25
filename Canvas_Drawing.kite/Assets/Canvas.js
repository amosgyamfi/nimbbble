//
//  Canvas.js
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

layer.canvasReady = function(event) {
    
    this.drawingPath = new BezierPath();
    
    this.drawingPath.moveToPoint( {x: 0, y: 0} );
};


// ------------------------------------------
// Handle Events
// ------------------------------------------

layer.mouseDown = function(event) {

    var location = event.locationInLayer(this);
    
    this.drawingPath.moveToPoint(location);
};

layer.mouseDragged = function(event) {
    
    var location = event.locationInLayer(this);
    
    this.drawingPath.lineToPoint(location);
    
    this.path = this.drawingPath;
};


// ------------------------------------------
// Called to draw custom layer content
// ------------------------------------------
/*

layer.drawLayerInContext = function(layer, context) {

    var path = BezierPath.bezierPathWithRoundedRectXRadiusYRadius(this.bounds, 10, 10);

    Color.redColor().set();
    path.fill();
};

 */
