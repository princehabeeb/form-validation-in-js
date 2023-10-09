


const submit = document.getElementById('submit');
const messageBox = document.querySelector('.message');
// console.log(fullName.length);

submit.addEventListener('click', () => {
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email');
    const pass = document.getElementById('password');


if (fullName == '' || fullName.length < 3 ){
    alert('Plaese Enter your name');
}else {
   
        if (messageBox.classList.contains('show')) {
            messageBox.classList.remove('show')
        }else{
            messageBox.classList.add('show')
        }
    
}

});



