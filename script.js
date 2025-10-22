const buttons = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".content");
contents.forEach(displayActive)

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));


    button.classList.add("active");
    contents[index].classList.add("active");

    contents.forEach(displayActive);
  });
});


function displayActive(element){
    if(element.classList.contains('active')){
        element.style.display = 'block'
    } else{
        element.style.display = 'none'
    }
}

