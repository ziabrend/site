const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url).then(data => (data.json()))


function getUsers(address) {
    return fetch(address).then(data => data.json())
}

getUsers(url).then(data => {
    const list = document.querySelector('.users ul');
    for (let i = 0; i < data.length; i++) {
        let user = ''
        user = ` <li>
                        <span class="name">${data[i].name}</span>
                        <span class="email">${data[i].email}</span>
                 </li>`
        list.innerHTML += user


    }
})