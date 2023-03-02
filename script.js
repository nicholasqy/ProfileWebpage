// Get content
var dropdownButton = document.querySelector(".dropdown-button");
var dropdownContent = document.querySelector(".dropdown-content");

// click event listener to the button
dropdownButton.addEventListener("click", function() {
  // Toggle dropdown container
  dropdownContent.parentElement.classList.toggle("active");
});
