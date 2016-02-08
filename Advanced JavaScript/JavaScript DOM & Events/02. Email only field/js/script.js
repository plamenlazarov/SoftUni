function eventHandler(e) {
    var email = document.querySelector('input').value;
    var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var div = document.querySelector('div');

    div.innerText = email;
    div.style.width = '173px';
    div.style.overflow = 'hidden';
    div.style.textOverflow = 'ellipsis';

    if(pattern.test(email)) {
        div.style.background = '#95EF95';
    } else {
        div.style.background = '#ff0000';
    }
}

var btn = document.getElementById('validate');
btn.addEventListener('click', eventHandler);
