/**
 * @param {number[]} nums
 * @return {number[]}
 */

//冒泡排序
var sortArray = function (nums) {
    let len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};