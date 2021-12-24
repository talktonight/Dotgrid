const ONE = 49;
const THREE = 51;
var debug = true;
var scale = 1;
var scale_increase = 0.5;

document.addEventListener( 'keydown', e => {
    if (e.keyCode === ONE) {
    	console.log("zoom in. Scale = ", scale);
    	scale /= scale_increase;
    } 
});