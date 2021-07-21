const button = document.querySelector('#button');
const clear = document.querySelector('#clear');
const inputValue1 = document.querySelector('#input1');
const inputValue2 = document.querySelector('#input2');
let label = false;
let labelList = false;
let t = 0;
let arr = {};
arr = JSON.parse(localStorage.getItem("jsonData"));
//Проверка на наличие данных в Local Storage
if (arr != null) {
    arr.forEach(element => {
        addElements(arr[t].download_url, arr[t].author);
        t++;
    })
}

button.addEventListener('click', () => {
    if (inputValue1.value >= 1 && inputValue1.value <= 10) {
        label = true;
    } else {
        console.log('Номер страницы вне диапазона от 1 до 10');
        label = false;
    }
    if (inputValue2.value >= 1 && inputValue2.value <= 10) {
        labelList = true;
    } else {
        console.log('Лимит вне диапазона от 1 до 10');
        labelList = false;
    }
    if (label === false && labelList === false) {
        console.log('Номер страницы и лимит вне диапазона от 1 до 10')
    }

    if ((label && labelList) === true) {
        fetch(`https://picsum.photos/v2/list?page=${inputValue1.value}&limit=${inputValue2.value}`)
            .then((response) => {
                const result = response.json();
                return result;
            })
            // Объект результата в формате JSON
            .then((data) => {
                

                var main = document.querySelector('#main');
                // Цикл вывода картинок и запись данных в localStorage
                for (let i = 0; i <= data.length; i++) {

                    addElements(data[i].download_url, data[i].author);
                    localStorage.setItem("jsonData", JSON.stringify(data));
                };

            })
            .catch(() => {
                console.log('error');
            })
    }
});
// Функция вывода картинок
function addElements(url1, author) {
    var img = document.createElement('img');
    var p = document.createElement('p');
    p.textContent = author;
    img.src = url1;
    img.height = 150;
    img.width = 200;
    main.appendChild(img);
    main.appendChild(p);
}

clear.addEventListener('click', () => {
    window.localStorage.clear();
})
