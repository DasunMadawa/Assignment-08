console.log("Hello World!");

let array = ["red" , "green" , "blue" , "yellow" , "pink" , "deeppink"];

let runningList = $("body > div > div");

// var style = {
//     backgroundColor: "red"
//
//
// };

const indexing = () => {
    for (let i = 0; i < runningList.length; i++) {
        // console.log(array[i]);
        runningList.eq(i).css("background" , array[i]);
    }

    array.unshift(array.pop());
}

setInterval(indexing , 1000);


