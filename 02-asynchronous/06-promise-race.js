let fastPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Fast winner in 200ms");
    }, 200);
});

let slowPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Slow winner in 800ms");
    }, 800);
});

Promise.race([fastPromise, slowPromise])
    .then(function (winner) {
        console.log("Winner:", winner);
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
