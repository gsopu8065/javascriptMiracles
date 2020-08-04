/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

This is done by kandan's algorithm
 */

var maxSubArray = function(nums) {

    var max = nums[0];

    for(var i=1;i<nums.length;i++)
    {
        if(nums[i-1] > 0){
            nums[i] += nums[i-1];
        }
        max = Math.max(max, nums[i]);
    }
    return max;
};
