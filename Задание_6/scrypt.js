
  function rand () {
  const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
      return randomNumber;
  }
  let random = rand();
// Создаем promise
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
  if (!(random % 2))
  resolve()
  else 
  reject();
  }, 3000);
  });

  myPromise.then(
    correct => console.log(`Завершено успешно. Сгенерированное число — ${random}`),
    error => console.log(`Завершено с ошибкой. Сгенерированное число — ${random}`)
    );