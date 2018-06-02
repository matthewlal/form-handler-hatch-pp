function loaded() {
  var form = document.getElementById("gform");
  form.addEventListener("submit", handleFormSubmit, false);
}
document.addEventListener("DOMContentLoaded", loaded, false);

function handleFormSubmit(event) {
event.preventDefault(); 
  var url = event.target.action;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    console.log(xhr.status, xhr.statusText)
    console.log(xhr.responseText);  
    document.getElementById("gform").style.display = "none"; // hide form
    var thankYouMessage = document.getElementById("thankyou_message");
    if (thankYouMessage) {
      thankYouMessage.style.display = "block";
    }
    return;
  };
  var encoded = Object.keys(data).map(function(k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
  }).join('&');
  xhr.send(encoded);
}
