function shareSite() {
    if (navigator.share) {
        navigator.share({
            title: 'Mazda 3',
            text: 'Перегляньте сайт Mazda 3!',
            url: window.location.href // Використовуємо поточне посилання на сайт
        }).then(() => {
            console.log('Ділення успішно виконано');
        }).catch((error) => {
            console.log('Помилка ділення: ', error);
        });
    } else {
        alert('Ваш браузер не підтримує можливість поділитися.');
    }
}  