const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');
// const cards = document.querySelector('.card')
const cardName = document.querySelector('.name')

buttons.forEach( (button) => {
    console.log(button)
    button.addEventListener('click', function (e){
        console.log(e)
        console.log(e.target)

        switch(e.target.id){
            case "grey":
                // body.style.backgroundColor = e.target.id;
                changeBGColor(e.target.id)
                changeColor("white")
                

                break;
            
            case "white":
                // body.style.backgroundColor = e.target.id;
                changeBGColor(e.target.id)
                changeColor("red")
                break;

            case "blue":
                // body.style.backgroundColor = e.target.id;
                changeBGColor(e.target.id)
                changeColor("white")
                break;

            case "yellow":
                // body.style.backgroundColor = e.target.id;
                changeBGColor(e.target.id)
                changeColor("orange")
                break;

            default:
                body.style.backgroundColor = black;
        }
    })
})




// // chatgpt:
// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')

function changeBGColor(color){
    let cards = document.getElementsByClassName('card')
    // let nameHeading = document.getElementsByClassName('name')

    for(let i=0; i<cards.length; i++){
        cards[i].style.backgroundColor = color;
        

    }
}
function changeColor(color2){
    let cards = document.getElementsByClassName('card')
    // let nameHeading = document.getElementsByClassName('name')

    for(let i=0; i<cards.length; i++){
        cards[i].style.color = color2;
        

    }
}


// buttons.forEach((button) => {
//     button.addEventListener('click', function(e){
//         switch(e.target.id){
//             case 'grey':
//                 changeBGColor(e.target.id)
//                 break;
//         }
//     })
// })