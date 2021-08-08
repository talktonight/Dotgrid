let isHoverGazebar = false;
let gazebar = document.getElementById("interface");

gazebar.addEventListener("mouseleave", function(e) {
	isHoverGazebar = false;
	console.log("mouse at gazebar: " + isHoverGazebar);
});

gazebar.addEventListener("mouseover", function(e) {
	if (!isHoverGazebar) {
		isHoverGazebar = true;
		console.log("mouse at gazebar: " + isHoverGazebar);
	}
});

/*
TO-DO

- get the circle that follows the cursor to vanish when checking
the gazebar

- change menu icons

- add zoom view on the top / left

*/