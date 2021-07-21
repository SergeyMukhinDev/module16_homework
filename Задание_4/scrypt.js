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
        const year = data[select].year
        console.log(year);
        const link = `https://quickchart.io/chart?c={type:'bar',data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'], datasets:[{label:'Выручка за ${year} год',data:[${data[select].sales.q1}, ${data[select].sales.q2}, ${data[select].sales.q3}, ${data[select].sales.q3}]}]}}`
        var a = document.createElement('a');
        var linkText = document.createTextNode("Открыть график");
        a.appendChild(linkText);
        a.title = "Открыть график";
        a.href = link;
        document.body.appendChild(a);
    }

    myRequest.open('GET', url1, true);
    myRequest.send();

});