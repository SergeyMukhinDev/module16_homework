const url1 = "https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440"
const button = document.querySelector('#button');
button.addEventListener('click', (event) => {
    event.preventDefault()
    const myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
        const select = document.querySelector('#sel').options.selectedIndex;
        const q1 = document.querySelector('#q1');
        const q2 = document.querySelector('#q2');
        const q3 = document.querySelector('#q3');
        const q4 = document.querySelector('#q4');
        const data = JSON.parse(myRequest.response);
        q1.textContent = data[select].sales.q1;
        q2.textContent = data[select].sales.q2;
        q3.textContent = data[select].sales.q3;
        q4.textContent = data[select].sales.q4;
    }

    myRequest.open('GET', url1, true);
    myRequest.send();

});