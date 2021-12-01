let data = '5, 4, 10, 2, 5';
data.split(',');
let sum = 0 ;
for (let i of data) {
    sum += parseInt(i);
}
console.log(sum);
let mean = 0;
for(let i of data ){
    mean += parseInt(i)/data.length;
}
console.log(mean);

console.log(`평균 : ${sum/data.length}`);

결과 값 : 
NaN
NaN
평균 : NaN



// 3.연습문제 

// 다음 array의 각 자리수의 합을 구하세요
// [11, 22, 33, 111, 2]

let data = [11, 22, 33, 111, 2]
let dataset = data + '' ;
dataset.replace(',','') <- 이렇게하면 for문으로 반복해서 지워야 합니다
dataset.replace(/,/g, '') <-정규표현식으로 사용해서 사용하면 됩니다
//출력값 : '1122331112'
console.log(dataset);
let 합계 = 0;
for (let i of dataset){
    합계 += +i;
}
console.log(합계);

// join과 split을 사용하는 것이 가장 깔끔합니다



// ======================================================
// 912391239 이 숫자의 각 자리 수를 계산해야 됩니다
let 합계 = 0;
for (let i of 912391239 + ''){
    합계 += parseInt(i);
}
console.log(합계); //39

console.log(i); 
// 9
// 1
// 2
// 3
// 9
// 1
// 2
// 3
// 9

// ======================================================

// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';

// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2){
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ','
    count = 0;
  }
}
console.log(sample);

// ======================================
// 문자열 뒤집기
let s = 'hello world';
console.log(s[10] + s[9] + s[8] + s[7] + s[6]) //...

let temp = ''
for (let i = s.length - 1; i >= 0; i--) {
    // console.log(s[i]);
    temp += s[i]
}

let temp = ''
for (let i = 0; i < s.length; i++) {
    temp = s[i] + temp 
}