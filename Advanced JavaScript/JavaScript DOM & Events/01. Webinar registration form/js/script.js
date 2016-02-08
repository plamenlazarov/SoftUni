var checkbox = document.getElementById('checkbox'),
    invoice  = document.getElementById('invoice');

checkbox.addEventListener('click', function(e) {
    if(checkbox.checked) {
        invoice.style.visibility = 'visible';
    } else {
        invoice.style.visibility = 'hidden';
    }
    console.log(checkbox.checked);
})
