// coding challenge 1: finding the subarray that sums up to the target

function findSubbarray(arr, target) {
    for (let startindex = 0; startindex < arr.length; startindex++) {
        let currentSum = 0;
        
        for (let end = startindex; end < arr.length; end++) {
            currentSum += arr[end];
            
            if (currentSum === target) {
                return true;
            }
        }
    }
    
    return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
const target2 = 27;
console.log(findSubbarray(arr, target));
console.log(findSubbarray(arr, target2))