//bai 1:
const  promise = new Promise(resolve => {
    setTimeout(() => resolve('Promise is da best'),5000)
});

promise.then(console.log);

async function showResult() {
    const text = await promise;
    alert(text);
}
showResult();

//bai 2:
const url = '';
async function test() {
    const fetchPromise = fetch(url);
    const connection = await fetchPromise;
    const jsonPromise = connection.json();
    const data = await jsonPromise;
    return data;
}
test();

//bai 4:
function getRandomNumber() {
    Math.floor(Math.random() * 10);
}
//bai 5:
function getRndInteger(a, b) {
    return Math.floor(Math.random() * (a - b + 1) ) + b;
}
//bai 6:
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
}

