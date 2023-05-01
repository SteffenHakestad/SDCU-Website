
addEventListener("DOMContentLoaded", () => {
    document.getElementById("radio1").checked = true;
});


//checks the next radio button evey 7sec, causes the slider to change
let counter = 1;
 const slideInterval = setInterval(function(){
     document.getElementById('radio' + counter).checked = true;
     counter++;
     if(counter > 4){
         counter = 1;
     }
 }, 7000);

// If user manually selects a radio button, reset interval
const radioButtons = document.querySelectorAll('input[type="radio"][name="radio-btn"]');
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () =>{
    clearInterval(slideInterval);
  });
});









