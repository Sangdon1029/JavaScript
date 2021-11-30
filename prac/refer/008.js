반복문

// 1.forEach

const array1 = ['a', 'b', 'c'] ;

// 위의 배열이 있을 경우

array1.forEach(element => console.log(element));

// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// forEach의 callback은  1.currentvalue 와 2.index와 3. array를  매개변수로 받습니다.



// 2.for of

let array = [10, 20, 30, 40, 50];
let result = 0;

for (let value of array);{
    result += value ;
}
console.log(result/array.length);


// 3.for in
// index로 출력을 합니다

for (let value in array){
    console.log(value);
}

// 만약 value를 뽑아 내고 싶다면

for (let value in array){
    console.log(array[value]);
}



// =============================================
// 1. while문

let i= 0;

while (i < 10){
    console.log(i);
    i ++; //i += 1;
}

// 예제 1. 1~100까지 짝수만

let i =0;
let result = 0 ;
while( i<100){
    result += i ;
    i += 1;
    }
console.log(result); //2450 


// 2.do..while 문
// do while문은 잘 사용 하지 않습니다

let num = 0;
do {
    console.log(num);
    num +=1;
} while(num <11) ;

// for문의 구구단 코드를 while 문으로 바꾸세요
for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
    document.write(`${i} X ${j} = ${i*j} <br>`);
    }
}

// while 변환

let i=2;
let j=1;
while (i <10){
    while(j<10){
        console.log(`${i} X ${j} = ${i*j}`);
        j ++;
    }
    i ++;
    // j = 1; 
}
// 이렇게 되면 j의 초기화가 되지 않습니다 (j ==10)


// Q 만약 이렇게 j가 while문 안으로 들어오게 되면 어떻게 되나요?

let i=2;
while (i <10){
    let j=1;
    while(j<10){
        console.log(`${i} X ${j} = ${i*j}`);
        j ++;
    }
    i ++;
}



// Break & Continue

// 1. Break 
// 한단계 밖으로 탈출 하는 기능입니다.
//  예제 5단이 됬을때 멈추는 break 함수


let i=2;
let j=1;
while (i <10){
    if(i === 6){
        break;  // break 
    }
    while(j<10){
        console.log(`${i} X ${j} = ${i*j}`);
        j ++;
    }
    i ++;
    j = 1; 
}

// 특정위치로 탈출할 경우 , 최외각으로 나오는 경우

// javascript 에서 Dom 컨트롤 할때 flag를 많이 사용하기도 하지만

// function을 이용해서 outer를 사용합니다

// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 할꺼면 function으로.


outer: for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if (i === 5) {break outer};
        console.log(`${i} X ${j} = ${i*j}`);
    }
}

// 여기서 outer는 Rable이므로 다른 이름으로 사용이 가능합니다
// 예를 들어서 good: 으로 사용이 가능합니다