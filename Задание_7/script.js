const button = document.querySelector('#button');
const inputValue = document.querySelector('#input');
button.addEventListener('click', () => {
    
    fetch(`https://jsonplaceholder.typicode.com/users/${inputValue.value}/todos`)
    .then((response) => {
      // Объект ответа на запрос
      const result = response.json();
            return result;
    })
    .then((data) => {
      // Объект результата в формате JSON
      var ol = document.createElement('ol');
            document.body.appendChild(ol);
            for (let i = 0; i <= data.length; i++) {
                var li = document.createElement('li');
                li.textContent = data[i].title;
                if (data[i].completed) {
                    li.style.textDecoration = 'line-through';
                }
                ol.appendChild(li);
                      };
    })
    .catch(() => { 
      console.log('error');       
         })

});

