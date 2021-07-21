/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}
`;
/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
 console.log(`{"name":"${data.name}","age":${data.age},"skills":${data.skills},"salary":${data.salary}}`);
