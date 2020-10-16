
function validation() {
    const form = document.getElementById('form');
    const email = document.getElementById('email').value;
    const text = document.getElementById('text');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    

    if(email.match(pattern)){
        form.classList.add('vaild');
        form.classList.remove('invaild');
        text.innerHTML = 'Your Email Address in Valid.'
        text.style.color = '#00ff00';
    } else {
        form.classList.remove('invaild');
        form.classList.add('invaild');
        text.innerHTML = 'Please Enter Valid Email Address.'
        text.style.color = '#ff0000';
    }

    if(email = ""){
        form.classList.remove('vaild');
        form.classList.remove(invalid);
        text.innerHTML = '';
        text.style.color = "#00ff00";
    }    
}


