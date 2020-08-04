/*
Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

This is done by Kandane's Algorithm
 */

var maxProduct = function(nums) {

    var minProduct = [nums[0]];
    var maxProduct = [nums[0]];

    for(var i = 1;i<nums.length;i++){

        minProduct.push(Math.min.apply(null, [nums[i], maxProduct[i-1]*nums[i], minProduct[i-1]*nums[i]]));
        maxProduct.push(Math.max.apply(null, [nums[i], maxProduct[i-1]*nums[i], minProduct[i-1]*nums[i]]));

    }

    return Math.max.apply(null,maxProduct);

};