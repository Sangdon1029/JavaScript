// 연습 문제 1
// 다음 string의 평균 값을 구하세요

// '5, 4, 10, 2, 5'

let a = [5, 4, 10, 2, 5];
let result = 0;
for (let i =0; i<a.length; i ++){
    result = result + a[i];
}
답 :26
// 문제점: 스트링을 넘버로 바꿧어야함

// 연습 문제2
// 다음 array의 각 자리수의 합을 구하세요.
// [11, 22, 33, 111, 2]

let a = [11, 22, 33, 111, 2];
let result = 0 ;
for (let i =0 ; i<a.length ; i ++){
    result += a[i]; 
}

// 연습 문제 3.
// 다음 값의 평균과 분산를 구하세요. (표준편차는 루트를 씌어야 하는데 ** 0.5하면 됩니다.)
// // 분산 => (각 값에 - 평균) ** 2
// [10, 20, 30, 10, 20, 30, 40, 10]

let a = [10, 20, 30, 10, 20, 30, 40, 10]
let result = 0;
let bunnsan= 0;
for (let i= 0 ; i <a.length; i++){
    result = result +a[i];
}
let punggun = result/a.length;
console.log(punggun);

for(let j=0; j <a.length; j++){
    bunnsan = bunnsan + ((a[j]-punggun)**2);
}
console.log(bunnsan);
let vx = bunnsan/a.length;
console.log(vx);

let pyojunpyuncha = vx**0.5
console.log(pyojunpyuncha);

평균 =  21.25
분산 = 110.9375
표준 편차 = 10.532687216470448
bunnsan = 887.5


let add = 0; // add(변수)의 초기값을 설정 하지 않아서 숫자로 인식하지 않았습니다.
let temp = [10,20,30,10,20,30,40,10];

for(i=0; i<8;){
    add += temp[i];
    i++;
}
let average = add/temp.length;
console.log(average);

