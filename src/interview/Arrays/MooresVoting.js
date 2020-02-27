/*
Input : {3, 3, 4, 2, 4, 4, 2, 4, 4}
Output : 4

Input : {3, 3, 4, 2, 4, 4, 2, 4}
Output : No Majority Element

Moores voting works only when majority element is available.

count > N/2 --> true 
 */

function findMajority(arr) {

    if(arr.length === 0) return -1;

    var index=0;
    var count=1;
    var num = arr[index];

    for(var i=1;i<arr.length;i++){

        if(num === arr[i]){
            count++;
        }
        else{
            count--;
        }


        if(count===0) {
            count++;
            num = arr[i];
        }
    }
    //return num;

    //make sure num is majority
    count=0;
    for(i=0;i<arr.length;i++){
        if(num === arr[i])
            count++;
    }

    if(count > arr.length/2){
        return num;
    }
    return -1;

}

console.log(findMajority([3, 3, 4, 2, 4, 4, 2, 4, 4]) === 4);
console.log(findMajority([3, 3, 4, 2, 4, 4, 2, 4]) === -1);
