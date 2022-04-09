// set initial count

let count = 0;

// select value

const value = document.querySelector("#value")
// console.log(value);


// select all buttons

const buttonsAll = document.querySelectorAll(".btn")

// console.log(buttonsAll);


buttonsAll.forEach(function(button){
// console.log(button);

button.addEventListener("click", function(e){
    
    // * save in a variable
    const classList = e.currentTarget.classList;
    console.log(classList);
    // console.log(e.currentTarget.classList);


    if(classList.contains("decrease")){
        count--;
    }
    else if(classList.contains("increase")){
        count++;
    }
    // else{
    //     count = 0;
    // }
    else if(classList.contains("reset")){
        count = 0
    }

    // choose color
    if(count<0){
        value.style.color = "red"
    }
    if(count>0){
        value.style.color ="green"
    }
    if(count===0){
        value.style.color = "#222"
    }



    value.textContent = count
})
})