const getData = async () => {
    let response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
    return await response.json();
}

var allData;

function onLoad() {

    getData()
        .then(data => {
            console.log(data, 'data')
            allData = data
            showData(data)
        })
        .catch(err => console.log(err.message))
}


function showData(data) {
    try {
        for (let i = 0; i < data.length; i++) {

            let div = document.createElement('div');
            div.style.border = '1px solid';
            div.classList.add('product-container');

            let img = document.createElement('img');
            img.src = data[i].image_link;
            img.classList.add('product_img')
            div.append(img);

            let div2 = document.createElement('div')
            div2.classList.add('sub-container');

            let h3 = document.createElement('h3');
            h3.innerText = data[i].brand;
            div2.append(h3);

            let h4 = document.createElement('h4');
            h4.innerText = data[i].name;
            div2.append(h4);

            let p = document.createElement('p');
            p.innerText = 'Price : ' + (data[i].price_sign ? data[i].price_sign : '') + ' ' + data[i].price
            div2.append(p)

            let p2 = document.createElement('p');
            p2.innerHTML = data[i].description
            div2.append(p2)

            div.append(div2)

            document.getElementById('all_products').append(div)
        }
    }
    catch (e) {
        console.error(e)
    }
}

function searchProduct() {
    let searchText = document.getElementById('search').value.toLowerCase()
    console.log(searchText)

    let filterData = allData.filter(ele => {
        if (ele.name.toLowerCase().includes(searchText)) return ele
    })

    console.log(filterData)
    document.getElementById('all_products').innerHTML = ''
    showData(filterData)
}

function searchProduct2() {
    let searchText = document.getElementById('search2').value.toLowerCase()
    console.log(searchText)

    let filterData = allData.filter(ele => {
        if (ele.name.toLowerCase().includes(searchText)) return ele
    })

    console.log(filterData)
    document.getElementById('all_products').innerHTML = ''
    showData(filterData)
}