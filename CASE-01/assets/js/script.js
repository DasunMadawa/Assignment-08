// console.log("Hello World!");

let array = ["A" , "B" , "C" , "D" , "E" , "F"];

let runningList = $("body > div > div");

const indexing = () => {
    for (let i = 0; i < runningList.length; i++) {
        runningList.eq(i).text(array[i]);
    }

    array.unshift(array.pop());
}

setInterval(indexing , 1000);


