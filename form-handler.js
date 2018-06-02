function loaded() {
  var form = document.getElementById("gform");
  form.addEventListener("submit", handleFormSubmit, false);
}
document.addEventListener("DOMContentLoaded", loaded, false);

function handleFormSubmit(event) {
event.preventDefault(); 
document.getElementById("gform").style.display = "none"; // hide form
  var thankYouMessage = document.getElementById("thankyou_message");
    if (thankYouMessage) {
      thankYouMessage.style.display = "block";
    }
return;
}
