/*
function alwaysHungry(arr) {
    // your code here 
    var foodCount = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] === "food"){
            console.log("yummy");
            foodCount++;
       }
       if (foodCount === 0){
           console.log("I'm hungary");
           
       }
    }
}

   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

/*
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(i=0; i<arr.length; i++){
if(arr[i]>cutoff){
    console.log(arr[i]);
}
    }
    
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
*/
/*
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for( var i=0; i<arr.length; i++){
        sum = sum + arr[i];
        
    }
    var avg = sum/arr.length;
    var count = 0;
    // count how many values are greated than the average
    for( var i = 0;  i<arr.length; i++){
        if ( arr[i]>avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
*/
/*
function reverse(arr) {
    // your code here
    var arr2 = [];
    for(i = arr.length-1; i>=0; i--) {
        arr2.push(arr[i]);
    }
    return arr2;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
*/
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var fibs = [];
    // your code here  
    for (i = 2; i < n; i++) {
        var temp = fibArr[i - 1];
        var temp2 = fibArr[i - 2];
        fibArr[i] = temp + temp2;
        fibs.push(fibArr[i]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]