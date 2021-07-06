const url = 'https://spreadsheets.google.com/feeds/list/1-wBURuKaioJlULAjw20lD3wAExpi904OBV0jdxyuX_Q/od6/public/values?alt=json'

function getProducts(url) {
    return fetch(url).then(data => data.json())
}

getProducts(url)
    .then(data => {
        const productData = data['feed']['entry']
        const wrapper = document.querySelector('.product-wrapper');
        for (let i = 0; i < productData.length; i++) {
            if (productData[i]['gsx$status']['$t'] == '1') {


                let product = ''
                product = `<div class="card">
            <div class="image">
                <img src="${productData[i]['gsx$image']['$t']}" alt="watch">
            </div>
            
            <div class="card-text">
                <p class="product-name">${productData[i]['gsx$name']['$t']}</p>
                <p class="price">${productData[i]['gsx$price']['$t']}</p>
            </div>
        </div> `

                wrapper.innerHTML += product
            }
        }
    })