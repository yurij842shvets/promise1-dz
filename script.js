// const delay = ms => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms)
//         }, ms)
//     })
//     return promise
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Виклич функції для перевірки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms









// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//     const promise = new Promise((resolve) => {
//         const updatedUsers = allUsers.map(user =>
//             user.name === userName ? { ...user, active: !user.active } : user,
//         );

//         resolve(updatedUsers);

//     })
//     return promise

// };

// const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Зараз працює так
//  */
// //   toggleUserState(users, 'Mango', logger);
// //   toggleUserState(users, 'Lux', logger);

// /*
//  * Повинно працювати так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);







// Перепиши функцію makeTransaction() так, щоб вона не використовувала callback-функції onSuccess і onError, а приймала всього один параметр transaction і повертала проміс.

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
    
            if (canProcess) {
                resolve({id: transaction.id, delay});
            } else {
                reject(transaction.id);
            }
        }, delay);
    })
    return promise
};

const logSuccess = ({id, delay}) => {
    console.log(`Transaction ${id} processed in ${delay}ms`);
};

const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Працює так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Повинно працювати так
 */
makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);

makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);