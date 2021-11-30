// 1.Typeof
document.write(`typeof(5) : ${typeof(5)} <br>`);
document.write(`typeof(5.5) : ${typeof(5.5)} <br>`);
document.write(`typeof('5') : ${typeof('5')} <br>`);
document.write(`typeof('leehojun') : ${typeof('leehojun')} <br>`);
document.write(`typeof(x) : ${typeof(x)} <br>`);
document.write(`typeof(undefined) : ${typeof(undefined)} <br>`);
document.write(`typeof([1, 2, 3, 4]) : ${typeof([1, 2, 3, 4])} <br>`);
document.write(`typeof({'one':'하나', 'two':'둘'}) : ${typeof({'one':'하나', 'two':'둘'})} <br>`);

function js(){
}
document.write(`typeof(js) : ${typeof(js)} <br>`);
document.write(`typeof(js / 2) : ${typeof(js / 2)} <br>`);
document.write(js / 2, '<br>');

document.write(`typeof('1'+1) : ${typeof('1' + 1)} <br>`);
document.write('1' + 1, '<br>');
document.write(`typeof('leehojun' / 3) : ${typeof('leehojun' / 3)} <br>`);
document.write('leehojun' / 3, '<br>');
document.write(`typeof(true) : ${typeof(true)} <br>`);

let test = null;
document.write(typeof(test), '<br>');

NaN === NaN // false
Number.isNaN(NaN) // true, Number.isNaN을 사용하세요!
isNaN(undefined) // true, isNaN은 논란의 여지가 많음
isNaN(null) // false, 이건 또 false?
isNaN(-NaN) // true
isNaN({}) // true
Object.is(NaN, NaN) // true
Number(5) //5
String(5) //'5'
Number(true)  // 1
Number(false) // 0
Number('true') // NaN

'1' + 1 ;
'11'
1 + '1' ;
'11';

// 헷갈리는 형변환
Boolean([])  //true   원래는 false 가 나와야 맞습니다
Boolean({})  //true   원래는 false 가 나와야 맞습니다


// ===============================================================================


// 회사에서 자주 사용하는 형변환은 회사 컨벤션 따라가야 합니다.

//숫자에서 문자로 형변환 할때 
// 1. String(123);
// --------------
// let x = 10;
// 2. x.toString()

// 위 두가지는 대부분 사용하지 안습니다.

// 그럼 보통은  123 + '' 이렇게 두개 더하면 문자열로 바뀝니다


// ---------------------------------
//!!ture 는 정말 많이 사용합니다
// - 값이 있으면 true 없으면 false로 

// 예시 
// 그럼 이거는 불리언 값으로 바꾸기 위한 방법인가 = 맞습니다
!!true
true
!!'hojun'
true
!!''
false
!!1
true
!!0
false
!!undefined
false
!!NaN
false


// 결론 :
// x를 string으로 바꾸려면 x + ''
// x를 boolean으로 바꾸려면 !!x

'0' == 0
true
0 == ''
true
0 == '0'
true
false == 'false'
false
false == '0'
true
false == null
false
false == undefined
false
false == NaN
false
!!null
false
!!undefined
false
!!NaN
false

// 자바스크립트의 고질적인 오류입니다
// 형변환을 고려하지않고 설계 되었기 때문이라고 생각합니다

'5'* 10 ; // 50


let x = '10000'
+x // 10000 문자를 숫자로 바꾸는 방법 
-x // -10000 
// 두가지를 놓고 본다면 앞쪽에 양수 음수를 붙여준다는 개념입니다




// x를 string으로 바꾸려면 x + ''
// x를 boolean으로 바꾸려면 !!x
// +x // 10000 문자를 숫자로 바꾸는 방법 



