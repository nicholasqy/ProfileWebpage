// Get the dropdown button and content elements
var dropdownBtn = document.querySelector(".dropbtn");
var dropdownContent = document.querySelector(".dropdown-content");

// Add a click event listener to the dropdown button
dropdownBtn.addEventListener("click", function() {
  // Toggle the visibility 
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});