window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		var whatClicked = event.target.id;
		alert(whatClicked);
	});
};
