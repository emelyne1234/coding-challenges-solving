// coding challenge 1: finding the subarray that sums up to the target

function findSubbary(array, target){
    return array.filter((num, index) => num[index] + num[index+1] === target)
}

let arr1 = [4, 2, 7, 1, 9, 5];

console.log(findSubbary(arr1, 6));