/* Этап 1. Подготовка данных */
// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
//Получение дочерних элементов
const getChildren = xmlDOM.documentElement.children;
//Цикл перебора дочерних элементов
for (let i = 0; i <= getChildren.length; i++) {
    
// Получение всех DOM-нод
const studentNode = getChildren[i];
const name = studentNode.querySelector("name");
const fisrt = studentNode.querySelector("first");
const second = studentNode.querySelector("second");
const age = studentNode.querySelector("age");
const prof = studentNode.querySelector("prof");

// Получение данных из атрибутов
const langAttr = name.getAttribute('lang');

/* Этап 3. Запись данных в результирующий объект */
const result = {
  
  name: fisrt.textContent +' ' + second.textContent,
  lang: langAttr,
  prof: prof.textContent,
  age: age.textContent,
  lang:langAttr,
}
console.log('list', result);

}