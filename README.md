# JavaScript 
# 공부한 내용을 기록하는 저장소 입니다
## 변수(타입, typeof로 확인 가능)
- Array(배열)
```
 형태 :  Array = ['1' ,'2', '3'] , [100 , 200, 300] | [](대괄호)로 감쌉니다 
 호출 : 변수명[0], 2차원 배열일경우 변수명[0][0] (변수명[index])
 (변수명[index]) - indexing이라고 합니다
```
 ```js
 // 배열을 만드는 여러가지 방법
 let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
 let 과일2 = new Array(5);
 let 과일3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');
 과일[0] = '한라봉';
 과일; //(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']
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

## 배열과 문자열의 차이점 

- 배열은 호출해서 변경이 가능하지만 문자열은 호출해서 변경이 안됩니다.
```js
    let d = ['1','2','3']
    d[0]= 'a';
    d //(3) ['a', '2', '3']
``` 
```js
    let d = '1,2,3';
    d //'1,2,3' 호출
    d[0]= 'a';
    d //'1,2,3' 호출
    d[0][0] // '1' 호출
```
```js
// 번외 메서드 체이닝
//https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
'01001'.replace(/0/g, ' ').replace(/1/g, '#')
//위에서 처럼 연속해서 사용할 수 있습니다.
```

```js
행렬 [0] + 행렬[0] // '1,2,31,2,3'
// 행렬[0].toString() = 행렬 [0]+'' 같은 방법입니다
```

만약 각 행렬의 i 에 *2를 해주고 싶다면
```js
    let sample =[1,2,3]
    for (let i in sample){
        sample [i] *=2 
    }
    sample
    //for of 를 사용 했을 경우
    let sample =[1,2,3]
    for (let i of sample){
        sample [i] *=2 
    }
    sample //  [1, 4, 3, NaN, NaN, NaN: NaN]
```
<hr>

# 배열과 메서드
배열은 다양한 메서드를 제공합니다. 그 중 자주 사용되는 것을 위주로 정리를 했습니다.

<br>

### 목차
 - push
 - pop 
 - shift
 - unshift
 - splice
 - slice
 - concat
 ### - 배열 탐색하기
 - indexOf,lastIndexOf,includes
 - find, findIndex
 ### - 배열을 변형하기
  - map
  - sort
  - reverse
  - split
  - join

<br>

## 배열 추가/제거하기

### 1.Push
: 배열의 맨 끝에 요소를 추가합니다.

형태: arr.push('') 
```js
    let a = ['1','2','3']
    a.push('화'); // ['1', '2', '3', '화'].
```

### 2.Pop
:배열의 맨 끝 요소를 제거 합니다

형태: arr.pop()

```js
    let b = ['1','2','3']
    b.pop();
    b //['1', '2']
```
### 3.Shift
:배열의 맨 앞의 요소를 제거 합니다.

형태: arr.shift()
```js
    let c = ['1','2','3']
    c.shift();
    c //['2', '3']
```

### 4.Unshift
:배열의 맨 앞에 요소를 추가 합니다.

형태: arr.unshift('')
```js
    let d = ['1','2','3']
    d.unshift('이');
    d // ['이', '1', '2', '3']
```

#### 5.Splice
:배열에서 요소를 하나만 지우고 싶거나 특정 위치에 있는 배열을 수정해야 될때 사용합니다.

형태: arr.splice(x,y,'z')

```js

    //특정 요소를 삭제할 경우
    let e = ['1','2','3','4','5']
    e.splice(1,3);
    e //['1', '5']

    //요소 수정할 경우
    let e = ['1','2','3','4','5']
    e.splice(1,3,'팅');
    e //['1', '팅', '5']

    //여러 요소를 추가 할 경우
    let e = ['1','2','3','4','5']
    e.splice(1,3,'모','두');
    e // ['1', '모', '두', '5']

-------추가 -------
    //음수 index로 순서 정할 경우
    let e = ['1','2','3','4','5']
    e.splice(-2, 2);
    e //['1', '2', '3']

    let e = ['1','2','3','4','5']
    e.splice(-2, 1);
    e //['1', '2', '3', '5']

```

#### 6.Slice
Slice는 원래 배열의 값이 바뀌지 않습니다 == 배열이 복사가 된다고?

형태: arr.slice([x],[y])

```js
    let f = ['1','2','3','4','5']
    let g = f.slice(3,5);
    g // ['4', '5'] return값으로 index3(3포함)부터 index5미만의 값을 g로 출력합니다
    f // ['1','2','3','4','5']  원래 배열이였던 f값에는 영향이 가지 않습니다

    //주로 원래 배열에 영향을 주지 않고 새로운 배열을 만들때 사용합니다.

```


#### 7.concat

concat은 기존의 배열에 영향을 주지 않으면서 새로운 배열을 생성한다는 점에서 splice와  비슷하지만 

concat은 서로 다른 '2 배열'을 합쳐 새로운 배열을 생성할 경우 사용합니다.

```js
    let h = [1,2,3]
    let i = ['a','b','c']
    let j = ['A','B','C']
    let A = h.concat(i);
    A // [1, 2, 3, 'a', 'b', 'c']
    let B = i.concat(h);
    B // ['a', 'b', 'c', 1, 2, 3]
    let C = j.concat(i,h);
    C // ['A', 'B', 'C', 'a', 'b', 'c', 1, 2, 3]
```

<hr>

<br> 
<br> 
<br> 


## 배열 탐색하기

### 8.indexOf, lastIndexOf, includes

#### 8-1.indexOf

인덱스 from부터 시작해서 item(요소)를 찾습니다.
요소를 발견하면 해당요소의 인덱스를 반환하고, 발견하지 못하면 -1을 반환합니다

형태: arr.indexOf(item, from)

```js

//검색 방향 ---> 오른쪽

    let k = [1,2,3,'이것도','찾아봐',true];
    k.indexOf('찾아봐',0); //4
    k.indexOf(2,3); // -1
```
#### 8-2.lastIndexOf

인덱스오브 처럼 배열안의 값을 탐색하지만 뒤에서 부터 찾아나갑니다

형태:arr.lastIndexOf(item,from)

```js

//검색방향 <--- 왼쪽

    let k = [1,2,3,'이것도','찾아봐',true];
    k.lastIndexOf('찾아봐',0); //-1
    //왼쪽 방향으로 찾으면서 나감으로 item을 찾지 못했습니다.
    k.lastIndexOf('찾아봐',5); //4
    //마지막 index부터 왼쪽으로 찾았기 때문에 item을 찾았습니다
    k.lastIndexOf(2,3); // 1
```

#### 8-3. includes
indexOf처럼 from부터 찾아 나가지만 발견할경우 true 값을 반환합니다.

```js

//검색 방향 ---> 오른쪽

    let k = [1,2,3,'이것도','찾아봐',true];
    k.includes('찾아봐',0); //true
    k.includes(2,3); // false
```


### 9. find, findIndex

<br> 
<br> 
<br> 

<hr>

## 배열을 변형하기

#### 10.map

*arr.map은 유용성과 사용 빈도가 아주 높은 메서드 중 하나입니다.*

map은 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환해줍니다.

형태: let result = arr.map(function(item, index, array) {
    //사용할 코드
}

먼저 문자열을 출력하는 예시로 시작해 봅시다.


```js
    let a = ['a','ab','abc','abcd','abcde']
    let result = a.map(item => item.length);
    console.log(result); //[1, 2, 3, 4, 5]
```

#### 11.Sort

sort는 정렬입니다
형태: array.sort();

sort는 사전식으로 정렬을 합니다 그래서 정말 골치가 아픕니다
나중에 정렬하는 방식을 바꿔야 합니다

```js
    let data = [10 ,20, 30, 40 ,50 ,11 ,22]
    data.sort()  // [10, 11, 20, 22, 30, 40, 50]
    data // [10, 11, 20, 22, 30, 40, 50]

```

```js
    data.sort((a, b) => a - b) // 오름차순
    data.sort(function(a,b) {return a-b})
    data.sort((a, b) => b - a) // 내림차순
```

#### 12.Reverse 

역 정렬이 아니라 역순으로 배열을 합니다.
거울이라고 생각하시면 됩니다.

형태 : arr.reverse()


<br>


#### 13.Split (문자열의 Method 입니다)

전화번호 분류하기를 생각하시면 됩니다.  

형태: arr.split('분류기준으로 할 문자')
```js
    let 전화번호 =  '010.1000.1000';
    전화번호.split('.'); // ['010','1000','1000'] 으로 나뉩니다
```
```js
    let a = 'enfowniefniwewiisneie'; // 랜덤한 문자
    a.split('e'); //['', 'nfowni', 'fniw', 'wiisn', 'i', '']  
    //e를 기준으로 배열이 생성 되었습니다.
    //return값으로 배열을 만들고 싶을때 => let b = a.split('e');
```

#### 14.Join

Split과 반대로 기준문자를 본드라고 생각하시면서 붙여 줍니다.

```js
let 전화번호 =  '010.1000.1000';
전화번호.split('.').join('-')   // '010-1000-1000'으로 바꿀 수 있습니다
```
```js
let a = '1,681,138,138,887,111';
let b = a.split(',');
//여기서 우리는 split은 ,를 기준으로 배열을 return한다는 사실을 다시 알 수 있습니다.
let c = b.join('-');
//그렇다면 join은 그 배열을 기준 문자로 string으로 return한다는 사실 또한 알 수 있습니다.
c = '1-681-138-138-887-111';
```

<hr>

<br>
<br>
<br>



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
 



