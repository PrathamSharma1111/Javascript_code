console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    const greet=document.createElement('h1');
    greet.innerText = " ";
    greet.style.textAlign = 'center'; // Center the text
    greet.style.marginTop = '50vh';
      body.appendChild(greet);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
       document.querySelector('h1').innerText="Hello I am Grey"
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
     
      document.querySelector('h1').innerText="Hello I am White"
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
      document.querySelector('h1').innerText="Hello I am Blue"
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
   
      document.querySelector('h1').innerText="Hello I am Yellow"
    }
    
  });
});