//Завдання 1
function delayedPromise(value, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}
const promises = [
    delayedPromise("Проміс 1", 1000),
    delayedPromise("Проміс 2", 2000),
    delayedPromise("Проміс 3", 1500),
    delayedPromise("Проміс 4", 2500),
    delayedPromise("Проміс 5", 3000)
];
Promise.all(promises)
    .then(results => {
        console.log("Результати всіх промісів:");
        console.log(results);
    })
    .catch(error => {
        console.error("Помилка:", error);
    });

//Завдання 2
//Новий масив мені було ліньки робити, так що використав з 1 завдання :/
function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000; 
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ value, delay });
        }, delay);
    });
}
Promise.race(promises)
    .then(result => {
        console.log("Найшвидший проміс:");
        console.log(result);
    })
    .catch(error => {
        console.error("Помилка:", error);
    });