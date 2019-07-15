/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let index = s.trim().lastIndexOf(' ')
    return s.trim().slice(index+1).length
};


// 时间太长 超出时间限制
// var lengthOfLastWord = function(s) {
//     var index = s.trim().lastIndexOf(' ') + 1
//     var i = index
//     while(true){
//         console.log('s[index]',s[index])
//         if(s[index] != ' '){
//             index++
//         }else{
//             break
//         }
//     }
//     console.log('index',index,i)
//     return index - i
// };

let d = lengthOfLastWord('i am qqq  ')
console.log(d)