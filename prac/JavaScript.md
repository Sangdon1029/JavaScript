# JavaScript 

## 변수(타입, typeof로 확인 가능)
- Array(배열)

 ```
형태 :  Array = ['1' ,'2', '3'] , [100 , 200, 300] | [](대괄호)로 감쌉니다 
호출 : 변수명[0], 2차원 배열일경우 변수명[0][0] (변수명[index])
(변수명[index]) - indexing이라고 합니다
```
행렬의 경우 표현법
```js
 let a = [[1,2,3],
          [4,5,6],
          [7,8,9]] 
```
```js
       a[0] => [1,2,3]
       a[0][1] =>  2 
       a[1][2] =>  6 
```

- String(스트링)
``` 
형태 : 'abcde', "abcde" ,`abcde` 
호출 : 변수명, 변수명[0]
```

- Number(숫자)
```
형태 : 10, 20, 30
호출 : 변수명
```

- Boolean
```
형태 : true, false
호출 : 변수명
```

- undefined :undefined

- null :object

- NaN :number

<hr>

<br>

##  Object(객체) 

```
*형태 : a = {"지역이름":"x","확진자수":"y","사망자수":"z"};
*호출 : 변수명, 변수명.지역이름, 변수명['지역이름']
        == 변수명.key , 변수명[key]로 호출이 가능합니다

```
~~[{ }] -배열 안에 객체가 들어와 있는 형태를 JSON이라고 부릅니다~~

예제 value가 전국이면서 key가 확진자수를 찾아보세요

    변수명[0]['확진자수']

<hr>

<br><br><br>

##  연산자
* 산술연산 (+,-,/,*, ** , %)

* 논리연산 (!, && ,||) 비트단위 논리 연산자?? 멈춰!
* 비교연산 ( == , !=, < , <= , > , >=, === , !==)
* 조건문 (if, else if, else, switch)

* 반복문 (for, for in, for of, for Each, while, do while, break,continue)

```js
   1. for 

   for (let i = 0 ; i<0 ; i ++){
     //code
     }

   2.  for in
    -값을 순회하며 출력

   let a = [ 10, 20, 30, 40];
     for (let i in a){
         console.log(i);
     } 

   3. for of
    - 인덱스 값만 순회하며 출력

    for (let i of a){
        console.log(i);
    } 

    4. forEach

    let a =[ 10, 20, 30, 40];
    a.forEach (e => console.log( e**2));

    출력 예상 값 : 100,400,900,1600
 
```

```js
    5. while

    let i = 0 ;
    while(i<10){
        console.log(i);
        i++;
    }

    6. do ... while

    let i =0;
    do {
        console.log(i);
        i++;
    } while (i <10);

    7. continue

    for (let i=0; i<10 ; i ++){
        if(i ==5 ){
            continue;
        }
        console.log(i);
    }
    -continue가 있다면 반복문을 나가서 다시 순회(작동)를 합니다
```

<hr>

##  Function 함수


* 여기서 x, y를
    * 전달인자(아규먼트, argument) : 3, 5
    * 매개변수(파라미터, parameter) : x, y
* 형태 : 
```js
    function name (x,y) {
        return x + y;
    }
    add (3,5)
```

- Callback (콜백함수)<br>

 ```js
    function add(x, y) {
        return x + y;
    }

    function mul(x, y) {
        return x * y;
    }

    function cal(a, b){
        return a(10, 10) + b(10, 10);
    }

    cal(add, mul);
```

- Arrow Function(화살표함수) <br>
~~(일반 함수와 완전히 같지는 않습니다)~~
```js
    function add(x, y) {
        return x + y
    }

    let addArrow = (x, y) => x + y;
```

### Anonymous (익명함수)<br>

1. 기명함수 <br>
```js
    // 기명 함수
    let aa = function sum(x, y) {
        return x + y
    }

    // 익명 함수인것 같지만 바뀜
    let bb = function(x, y) {
        return x + y
    }
    // ES5에서는 빈 문자열이었는데 ES6에서 name 값을 가지는 것으로 바뀌었습니다.
    let cc = (x, y) => x + y;
```
2. 익명함수<br> 
```js
    console.dir(function (x, y) {return x + y;})
```


<hr><br><br>

##  선언
* let x : 변수로 사용하세요.
* var x : (전역에서 사용할 변수값, 권장 되지 않습니다)
* const x :(변하지 않는 상수값)

<br>

## 전개표현식 사용
* 전개구문 사용 예제
```js
    function add(...x){
        return x;
    }

    add(1, 2, 3, 4, 5)
```

```js
    // 모던자바스크립트 예제(https://ko.javascript.info/rest-parameters-spread)
    let arr1 = [1, -2, 3, 4];
    let arr2 = [8, 3, -8, 1];
    Math.max(1, ...arr1, 2, ...arr2, 25); // 25
```

```js
    // 모던자바스크립트 예제(https://ko.javascript.info/rest-parameters-spread)
    let arr = [3, 5, 1];
    let arr2 = [8, 9, 15];

    let merged = [0, ...arr, 2, ...arr2];
```

## Block Scope 블록스코프
* 참고 블로그 : https://velog.io/@fromzoo/%ED%95%A8%EC%88%98%EC%8A%A4%EC%BD%94%ED%94%84-vs-%EB%B8%94%EB%A1%9D%EC%8A%A4%EC%BD%94%ED%94%84
```js
    if (true){
        let x = 100;
    }

    console.log(x);
```
* 'x는 되었다고 나옵니다.'
- 블록단위 안에서 선언된 변수들을 외부에서 찾을려고하면 ReferenceError가 나옵니다.


## 정규표현식
* 특정 패턴을 찾아낼 때 사용합니다.
* 연습사이트 : https://regexr.com/5nvc2
* SI에서 꼭 필요한 필수 영역입니다.
```js
    /h [a-zA-Z0-9]/gm
//이렇게 작성할 경우 h1llo도 검색할 수 있습니다 
    [0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4} //전화번호 정규표현식입니다
//해석 : 0~9까지 3자리 / 특수문자는 한자리 / 0~9까지 4자리/ 특수문자/0~9까지는 4자리 
```

## 리터럴
* 리터럴은 코드에 보여지는 타입의 표현을 의미
* 예를 들어 원래 배열을 생성하려면
new Array(4,5,6); 이렇게 해야하지만 [4,5,6] 이렇게 만들수도 있는데요. 이렇게 배열을 의미하는 코드( [4,5,6] )를 배열의 리터럴 표현이라고 합니다.
* 마찬가지로 new Object() 의 리터럴 표현이 {}, new Number(5) 의 리터럴 표현이 5, new String("hello") 의 리터럴 표현이 "hello" 입니다.

## 사용자와 상호작용
* prompt('hello')
* comfirm('hello')
* alert('hello')
<hr>
<br>

## Spread syntax (...전개 표현식)
* 형태 : myFunction(...전개 표현식);
```
    function add(...x){
        return x;
    }
    add(1,2,3,4,5);
    - 출력: [1, 2, 3, 4, 5]
```

<br>

// window.console.log

// 윈도우 안에있는 콘솔 윈도우는 생략가능합니다
 



