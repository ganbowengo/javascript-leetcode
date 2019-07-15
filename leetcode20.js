// var isValid = function (s) {
//     let arr = []
//     let l = s.length
//     if(l === 0){
//         return true
//     }
//     if(l % 2 !== 0){
//         return false
//     }
//     let map = {
//         '}': '{',
//         ']': '[',
//         ')': '('
//     }
//     for (let i = 0; i < l; i++) {
//         if(arr.length > 0){
//             if (arr[arr.length - 1] === map[s[i]]) {
//                 arr.pop()
//             } else {
//                 arr.push(s[i])
//             }
//         }else{
//             arr.push(s[i])
//         }
//     }
//     if (arr.length === 0) {
//         return true
//     }
//     return false
// };

var isValid = function (s) {
    while((s.indexOf('()') > 0) || (s.indexOf('[]')>0) || (s.indexOf('{}')>0)){
        s.replace('()','')
        s.replace('{}','')
        s.replace('[]','')
    }
    if (s) {
        return false
    }
    return true
};



let s = isValid('{[()]}([])[]{}')
console.log(s)