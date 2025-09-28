const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector(".hidden");
const likes = document.querySelectorAll(".like-glyph");

likes.forEach((like) => {
  like.addEventListener("click", (e) => {
    if (like.innerText == EMPTY_HEART) {
      like.innerText = FULL_HEART;
    } else if (like.innerText == FULL_HEART) {
      like.innerText = EMPTY_HEART;
    }
  });
});


mimicServerCall("http://mimicServer.example.com", {})
  .then((promise) => alert(promise))
  .catch((error) => {
    modal.hidden = false;
    modal.innerText += ` ${error.message}`;
    setTimeout((modal.hidden = true), 3000);
  });

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}