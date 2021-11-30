// 정규 표현식이란?
// 정규 표현식은 문자열에 나타는 특정 문자 조합과 대응시키기 위해 사용되는 패턴입니다. 
// 자바스크립트에서, 정규 표현식 또한 객체입니다. 
// 이 패턴들은 RegExp의 exec 메소드와 test 메소드  ,그리고 String의  match메소드 , 
// replace메소드 , search메소드 ,  split 메소드와 함께 쓰입니다 . 
// 이 장에서는 자바스크립트의 정규식에 대하여 설명합니다. 
// -MDN-

// String
let s =  'abcdefABCDEF';
console.log(s);
console.dir(s); //abcdefABCDEF

// log와  dir의 차이점

// ----------
s.length //12

s.indexOf('cde') // 2

s.search('ABC') //6

s.indexOf('G') //없는 문자 이기때문에  -1 이 나옵니다

s.search('G') // 이또한 -1이 나오게 됩니다
// search와 indexOf의 차이점은 무엇일까요?
// indexOf는 ('string' stratingpoint) starting포인트를 설정할 수 있습니다
// search 는 정규 표현식을 사용 할 수 있습니다.


// ------
// Slice & SubString

// 1.Slice
s.slice(0,3) //'abc'
s.slice(1,5) //'bcde'
s.slice(3,5) //'de'  3번째 숫자는 포함 5번째 숫자 전까지 잘라서 표현 ==> 3<= X  < 5라는 것같음.

s.slice(6) // 'ABCDEF'
s.slice(6,-1) //'ABCDE'

// 2.Substring
s.substring(6,11) //'ABCDE'
s.substring(6) //'ABCDEF'
s.substring(6,-1) //'abcdef'
s.substring(6,-8) //'abcdef'

// Slice 와 Substring의 차이점
// substring은 -2이든 -99이던지 간에 0으로 처리를 합니다
// 하지만 Slice는 -index를 인식합니다


// ------------
// Replace

s.replace('ABC','java'); //'abcdefjavaDEF'

let x = '100,000,000';
x.replace(',', ''); //'100000,000' ,가 남아 있습니다 모든 ,를 지우기 위해서는

// 두가지 방식이 있습니다
// 정규표현식
x.replace(/,/g, '') //'100000000'
// replaceAll
x.replaceAll(',','') //'100000000'


