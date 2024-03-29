//write a function to find the minimum and maximum elements in an array. 
function arr(arr1){
    let maximum = Math.max(...arr1);
    let minimum  = Math.min(...arr1);
    return (`min = ${minimum} / max = ${maximum}`)
 }
console.log(arr([1,2,3,8,5,6,9,7,5,6]));


//write a function that takes an array an return a the reverse of it
function ReverseArray(arr2){
    arr2.reverse();
    return arr2;
}
console.log(ReverseArray([1,2,3,4,5,6]));


//write a function that takes an array an return true if it has string elements on it and false if not
function testNum(arr3){
    for (let i = 0; i < arr3.length; i++){
        if(typeof arr3[i]==='string'){
            return true;
        }
    }
    return false;
}
console.log(testNum([5,8,"4",5,8]));
console.log(testNum([4,8,9,1,3,6]));
