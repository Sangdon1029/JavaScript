// 형변환
// 형변환을 하는 이유 : 숫자와 문자열 처럼 자료형이 다르면 의도치 않는 결과값이 나올 수 있음


const mathScore = prompt ("수확 몇점?")
const engScore = prompt ("영어 몇점?")
const result = (mathScore + engScore) / 2 ;

console.log (result);

// prompt로 입력받은 값은 무조건 string값으로 결과값을 받아오게됨.

// 자동 형변환
// 명시적 형변환

// String () => 문자열로 변환


// Number () => 숫자로 변환


// Boolean() => 불리언으로 변환

// 주의사항 Number(null)= 0;
//         Number(undefined)=NaN;
//         Number(0) //false
//         Number('0') //true
//         Number('') //false
//         Number(' ') //true
