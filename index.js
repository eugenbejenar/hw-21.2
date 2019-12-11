function addUser() {

    var username = prompt('Please enter username:');

    if (username.length > 2) {

        localStorage.setItem('su_userName', username);
    }

    renderResult(username);
}


function renderResult(username) {

    document.getElementById('result').innerHTML = 'Hello ' + username;
}



function renderStorageUserName() {

    var userName = localStorage.getItem('su_userName') || 'Guest';

    renderResult(userName);
}

renderStorageUserName();



var removeItem = function removeLocalStorageItem(username) {

    localStorage.removeItem('su_userName', username)
}

document.getElementById('reset').addEventListener("click", removeItem);