var nextPermutation = function(nums) {

    var i=nums.length-1;
    var j=i-1;
    while(i>0){
        j=i-1;
        while(nums[i]<nums[j]&&j>=0) j--;
        if(j>=0){
            break;
        }
        i--;
    }

    if(i===0){
        //sort the array
        nums = nums.sort(function(a,b){
            return a-b;
        })
    }
    else{
        //swap i and j
        var temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;

        //sort j to end
        var t = nums.slice(j+1);
        t.sort(function(a,b){ return a-b});

        nums = nums.slice(0,j+1).concat(t);
    }

    return nums;
};

console.log(nextPermutation([1,3,2]))