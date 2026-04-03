//Завдання 1
const promises = [
    delayedPromise("Проміс 1", 1000),
    delayedPromise("Проміс 2", 2000),
    delayedPromise("Проміс 3", 1500),
    delayedPromise("Проміс 4", 2500),
    delayedPromise("Проміс 5", 3000)
];
function delayedPromise(value, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}
Promise.all(promises)
    .then(results => {
        console.log("Результати всіх промісів:");
        console.log(results);
    })
    .catch(error => {
        console.error("Помилка:", error);
    });

//Завдання 2
const randomPromises = [
    randomDelay("Проміс 1"),
    randomDelay("Проміс 2"),
    randomDelay("Проміс 3"),
    randomDelay("Проміс 4"),
    randomDelay("Проміс 5")
];
function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000; 
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ value, delay });
        }, delay);
    });
}
Promise.race(randomPromises)
    .then(result => {
        console.log("Найшвидший проміс:");
        console.log(result);
    })
    .catch(error => {
        console.error("Помилка:", error);
    });
