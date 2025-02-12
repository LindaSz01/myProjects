const buttonTryNow = document.getElementById('buttonTryNow');      //the TRY NOW button
const modalWindow = document.getElementById('myModal');            //the modal 1 with the game mode page
const closeButton = document.getElementById('closeButton');        //the close button of the game mode choosing modal
const centerBox = document.getElementById("centerBox");            // the centerbox of the homepage/first page
// const modal2 = document.getElementById("myModal2");                // the modal 2 with quizz


// When the user clicks the TRY NOW button, opens the modal and closes the home page:
buttonTryNow.addEventListener("click", () => {
  modalWindow.style.display = "block";                //the modal 1 is visible
  centerBox.style.display = "none"                    //the home page is hidden
  // modal2.style.display = "none";                    //the modal 2 is hidden
});

// When the user clicks on button (x), close the modal:
closeButton.addEventListener("click", () => {
  modalWindow.style.display = "none";                 //the modal 1 is hidden
  centerBox.style.display = "block"                   //the home page is shown on screen
  // modal2.style.display = "none";                 //the modal 2 is hidden
});

const learningStartButton = document.getElementById("startButton1");              //button that is set to the game choosing title - left
const competitionStartButton = document.getElementById("startButton2");           //button that is set to the game choosing title - right









// FIRST VERSION



// const buttonTryNow = document.getElementById('buttonTryNow');      //the TRY NOW button
// const modalWindow = document.getElementById('myModal');            //the modal 1 with the game mode page
// const closeButton = document.getElementById('closeButton');        //the close button of the game mode choosing modal
// const centerBox = document.getElementById("centerBox");            // the centerbox of the homepage/first page
// const modal2 = document.getElementById("myModal2");                // the modal 2 with quizz


// // When the user clicks the TRY NOW button, opens the modal and closes the home page:
// buttonTryNow.addEventListener("click", () => {
//   modalWindow.style.display = "block";                //the modal is shown
//   centerBox.style.display = "none"                    //the home page is hidden
//   // modal2.style.display = "none";                      //the modal 2 is hidden
// });

// // When the user clicks on button (x), close the modal:
// closeButton.addEventListener("click", () => {
//   modalWindow.style.display = "none";                 //the modal 1 is hidden
//   centerBox.style.display = "block"                   //the home page is shown on screen
//   // modal2.style.display = "none";                 //the modal 2 is hidden
// });

// const learningStartButton = document.getElementById("startButton1");              //button that is set to the game choosing title - left
// const competitionStartButton = document.getElementById("startButton2");           //button that is set to the game choosing title - right


// learningStartButton.addEventListener("click", () => {
//     hoverText1.style.display = "block";
// });

// competitionStartButton.addEventListener("click", () => {
//     hoverText2.style.display = "block";
// });



// const closeButton2 = document.getElementById("closeButton2");

// // When the user clicks on <button> (x), close the modal
// closeButton2.onclick = function() {
//   modal2.style.display = "none";
//   centerBox.style.display = "block";
//   modalWindow.style.display = "none";                 //the modal 1 is hidden
// }


