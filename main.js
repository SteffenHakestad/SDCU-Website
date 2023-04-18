

// //Handle dropdown menu
// document.addEventListener("click", e =>{
//     const isDropDownButton = e.target.matches("[data-dropdown-button]")
//     if (!isDropDownButton && e.target.closest("[data-dropdown]") != null) return
//     let currentDropDown
//     if (isDropDownButton) {
//         currentDropDown = e.target.closest("[data-dropdown]")
//         currentDropDown.classList.toggle("active")
//     } 
//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if (dropdown === currentDropDown) return
//         dropdown.classList.remove("active")
//     })
// })

// .dropdown{
//     position: relative;
// }
// .dropdown-menu{
//     position: absolute;
//     left: 0;
//     top: calc(100% + .5rem);
//     background-color: white;
//     padding: .75rem;
//     border-radius: .25rem;
//     box-shadow: 0 1.5rem 1rem rgba(0,0,0,.2);
//     pointer-events: none;
//     opacity: 0; /*Hides dropdown while not focused */
//     transform: translateY(-1rem);
//     transition: opacity .2s ease-in-out, transform .2s ease-in-out;
// }

// .dropdown.active > .link, .link:hover{
//     color: red;
// }
// .dropdown.active > .link + .dropdown-menu{
//     opacity: 1;
//     transform: translateY(0);
//     pointer-events: auto;
// }
