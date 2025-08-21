function showHint(text) {
    document.getElementById('hint').innerText = text;
}

function resetInput(id) {
    document.getElementById('hint').innerText = '';
    document.getElementById(id).value = '';
}

function toggleFavourite() {
    if (document.getElementById('card').classList.contains('favourite')) {
        document.getElementById('card').classList.remove('favourite');
    } else {
        document.getElementById('card').classList.add('favourite');
    }
}

function validate() {
    document.getElementById('msg').innerText = '';
    if (document.getElementById('name').value == '') {
        document.getElementById('msg').innerText += 'Name required. ';
    }
    if (document.getElementById('age').value == '' || document.getElementById('age').value < 1) {
        document.getElementById('msg').innerText += 'Valid age required. ';
    }
    if (document.getElementById('email').value == '' || !document.getElementById('email').value.includes('@')) {
        document.getElementById('msg').innerText += 'Valid email required. ';
    }
}
