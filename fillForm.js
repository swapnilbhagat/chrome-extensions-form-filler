
function fillForm() {
	alert('Fill Form');
	
	window.document.getElementById("firstName").value="Swapnil";
	window.document.getElementById("lastName").value="Bhagat";
	window.document.getElementById("city").value="Pune";
	
	window.document.getElementById("text").innerHTML = 'Text that got changed';
}

chrome.runtime.sendMessage({
    action: "eformFormFill",
    source: fillForm()
});