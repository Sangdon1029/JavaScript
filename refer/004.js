//number 와 parseInt의 차이 
//무엇이 실무에서 더 자주 사용 되나
// let value = new Number(100);
// 이걸 단축해서 value = 100;
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number

// 원래부터 형변환을 고려해 둔 parseInt 를 사용 하는 것이 맞습니다

// ==========================================================================================
// --조건문
// 1. IF 문
let x = 10;

if (x <100 ){
    console.log('100보다 작아요!')
}

if (x > 100) {
    console.log ('100보다 콥니다')
}
// 실행이 당연히 안되지...

if (true ){
    //실행할 코드
}


// if 의 반복
let x =40 ;
if (x >10) {
    console.log('무엇이')
    if (x > 20){
        console.log('출력이')
        if (x >30) {
            console.log('될까요?')
            if(x >40){
                console.log('이것도 출력이 되나요?')
            }
        }
    }
}



// ==========================================================================================
// 2.IF else 

if(true || false) {
    //실행될 코드
} else {
    //아니면 실행될 코드
}


// ==========================================================================================
// 3.elseIF문

if (false){
    //코드 입력
} else if (true){
    //아니면 실행될 코드
} else {
    //
} 

let score = prompt('성적을 입력하세요');
let money = 0;

if (score >= 90) {
    console.log(`mom : i'm so happy`); // 'mom : i\'m sorry' 
    money += 1000000;
}
if (score >= 80) {
    console.log(`mom : i'm happy`);
    money += 100000;
}
if (score >= 70) {
    console.log(`mom : i' happy`) ;
    money += 10000;
}
if (score >= 6) {
    console.log(`mom : happy? `) ;
    money += 1000;
} else {
    console.log('');
}

// 이렇게 코드를 작성하면 상금을 중복으로 받게 됩니다

```
escape 문자

\t
\n
\\
\'
\"
```