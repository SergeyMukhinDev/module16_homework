// Получаем данные по ключу myKey в localStorage
let myName = localStorage.getItem("myName");

// Если localStorage очищался, то ключа не будет.
// Если не зачищался - получим значение по ключу
const date = new Date();
if (!myName) {
    const name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    localStorage.setItem("myName", name);
    localStorage.setItem("date", date);
} else {
    myName = localStorage.getItem('myName');
    const oldDate = localStorage.getItem('date');
    const message = `Добрый день, ${myName}! Давно не виделись. В последний раз вы были у нас ${oldDate}`;
    localStorage.setItem("date", date);
    alert(message);
}
const button = document.querySelector('#button');
button.addEventListener('click', (event) => {
    event.preventDefault()
    localStorage.clear();
});