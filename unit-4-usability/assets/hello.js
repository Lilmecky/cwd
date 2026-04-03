
let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
	event.preventDefault();

	// console.log("Hello");

	console.log(this.msg.value)

});




