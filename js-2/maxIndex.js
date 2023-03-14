function maxIndex(array) {
    let maxInd = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > array [maxInd]) {
            maxInd = 1;
        }                            
    }    
    if(array.length === 0) {
        return -1;
    }
    return maxInd;   
} 
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
