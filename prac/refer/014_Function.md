# Function 함수

스크립트를 작성하다보면 유사한 동작을 하는 코드가 여러곳에서 필요합니다

사용자가 로그인이나 로그아웃 할때 안내메세지를 보내주는 것과 비슷하죠

1. 재사용성
2. 아키텍쳐 파악 (집짓기 순서를 이름으로 하니까 파악하기 쉽습니다)
3. 유지보수
4. 더 많습니다

만약에 100만줄짜리 프로젝트에서 


호출 : 함수명() 

function 함수하나(){
    let x = 10;
    console.log('함수하나 호출');
}
function 함수둘(){
    let y = 10;
    console.log('함수둘 호출');
}
함수하나() 
함수둘()


## block Scope , Function Scope


### Block Scope 
if (true) {
    let y = 10;
}
console.log(y); // is not defined

블럭스코프랑 펑션 스코프의 차이점은??

var를 선언했을때 hoisting이 됩니다



### Function Scope
y라는 변수를 박에서 호출 할 수 있나요? 없지않을까요? 지역 변수인데 왜?

만약 var 로 설정하면 어떻게 바뀔까요?

이렇게 선언해도 호출이 되지않습니다 hoisting불가 <캡슐화때문이다>

function안에서 선언된 변수는 밖에서 절대로 볼수 없습니다

밖에서 선언된변수는 안에서 볼 '수는 ' 있습니다

이게 무슨 말이냐

let k = 10 ; 
function viewk(){
    console.log(k);
}
function changek(){
    k+= 10;   <--let을 안붙이면 k의 수정도 가능합니다
    console.log(k)
}
viewk() //10
changek() // 20
viewk() //10
k //10

## 캡슐화 추상화

캡슐화란 ? 캡슐화가 되어있기때문에  function안의 공간을 독립적인 공간이라고 생각을해야됩니다

추상화란  자동차를 운전한다고해서 엑셀을 밟았을때 중력가속도가 얼마나 붙는지
이런거를 다 알아야될 필요가있을까요?
운전대는 방향에 대해서 추상화가 되어있습니다

땅다지기라고 추상화해놓으면 땅을 다진다고해놓으면 저걸 눌렀을때 땅을 다진다고 생각하는 거랑 같습니다



## 매개변수란? parameter 를 이용하면 임의의 데이터를 함수 안에 전달할 수 있습니다 매개변수는 인수(argument)라고 불리기도 합니다 엄밀히 말하면 같지는 않습니다



function add(a = 100, b = 200) {  // 입력을 안했을때는 a에 100을 주고 b에는 200을 주겠다 라는 것이므로 입력이 되면 사라지는 값입니다)
    return a + b;
}

add(10, 20);
30

add(10);    //a 에 10을 넣겠다
210

add();
300


function add(a = 100, b = 200){
    return a + b;
}    
add(b=300)  //a 값에다가 300을 넣었네??
500
<!-- ========================= -->
a를 default값으로 사용하려면
function add({ a = 100, b = 200 }) {
  console.log(a+b);
}
add({b: 300}); // 400  << 한마디로 객체화 한다고 생각하면 되나요?>>
구조분해할당????
<!-- =================== -->





마치 break처럼 return을 사용할 수 있습니다

function add(a =100, b =200){
    if( a== 100){
    return
    }
}

add(undefined,300) // 400이 출력
add(0,300) = add(null,300) // 300이 출력  자매품 add(``,300)



### function() 이름이 없는 함수 선언 방식

let hello = function() {
    console.log("hello");
}

hello();


let 치킨박스 = 0 // 빈 박스 선언

// 기름통 함수에 치킨넣기
function 기름통(치킨) {

    치킨 튀기기...

    return 치킨;
}

// 치킨박스에 튀겨진 치킨 할당
치킨박스 = 기름통(치킨);





런타임은 동작이라고 생각해도 될까요?


## 콜백함수


함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 나중에 호출하는 것이 콜백함수의 개념입니다




## Arrow Function 

let func = ( par , par , parn ) => expression

let func = function ( arg1, arg2, ...argN){
    return expression;
}

let add30 = (a,b) => a+b ;
add30(100, 100)


<hr>

<br><br><br><br>


# 재귀함수

1. 종료 조건 체크

2. 반복문으로 구현할 수 있는 것은 모두 재귀함수로 모두 구현 가능합니다. 하지만
재귀함수로 구현 가능한 것은 반복문으로 '대부분' 구현 가능합니다.

자기가 자기를 호출할 경우를 재귀함수라고 합니다

실무에서는 권하지 않습니다 : 가독성이 떨어집니다

### 사용 예시
- 다이나믹 프로그래밍 : 네비게이션에서 최단경로 찾기 

  => 네비게이션은 시간이랑 도로상태 고려해야겠지만, 다이나믹 프로그래밍으로 만듭니다

### 아래의 예제들은 시간을 가지고 꼭 외우세요

```js
//첫번째 예제
//N!
    function factorial(n){
        if(n<=1){
        //종료조건이 꼭 있어야합니다    
            return n
        }
        return n*factorial(n-1)
    }

    factorial(5); //120
    // factorial(5) == 5*factorial(4) == 5*24
    // factorial(4) == 4*factorial(3) == 4*6
    // factorial(3) == 3*factorial(2) == 3*2
    // factorial(2) == 2*factorial(1) == 2*1
    // factorial(1) == 1

```
```js
    //Sigma (n)
    function sigma(n){
        if(n<=1){
            //종료조건이 꼭 있어야합니다    
                return n
            }
            return n + sigma(n-1)
        }
    }
    sigma(5); // 15
    // sigma(5) == 5 + sigma(4) == 5 + 10
    // sigma(4) == 4 + sigma(3) == 4 + 6
    // sigma(3) == 3 + sigma(2) == 3 + 3
    // sigma(2) == 2 + sigma(1) == 2 + 1
    // sigma(1) == 1

```
```js
///문자열 뒤집기

    function reverse(text){
        text += '' ;
        //이렇게하면 텍스트아닌 숫자가 들어오더라도 문제 없이 처리가 됩니다.
        if (text.length<=1){
            return text
        }
        return reverse(text.slice(1)) + text[0]
    }
    reverse('hello') 
    // reverse('hello')  == reverse('ello') + 'h'
    // reverse('ello')  == reverse('llo') + 'e'
    // reverse('llo')  == reverse('lo') + 'l'
    // reverse('lo')  == reverse('o') + 'l'  
    // reverse('o')  == 'o'

```

```js
//피보나치 함수  [ 1 , 1, 2, 3, 5, 8, 13, 21, 34, 55,...]
    function fib(n){
        if(n<=1){
            //종료조건이 꼭 있어야합니다    
                return n
            }
            return fib(n-1) + fib(n-2)
        }
    }
    // fin(5) = fin(4) + fin(3)   //함수가 두개 들어가기때문에 다시 계산을 해줘야 합니다 
    // fin(4) = fin(3) + fin(2)   
    // fin(3) = fin(2) + fin(1)
    // fin(2) = 2
    // fin(1) = 1


```
- 메모리 효율 : 함수를 리턴할 경우 함수는 휘발성이라서 한번 사용한 뒤 똑같은 함수를 한번더 계산을 해야 합니다.

이러한 문제를 해결 하고자 다이나믹 프로그래밍(동적계획법)을 사용합니다 


```js
// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
    let fibo_cache = []
    //fibo_cache를 배열로 생성한뒤
    function fibo(n){
    if (n in fibo_cache) {
        // 캐시안쪽에 값이 들어있다면 계산하지 않아도 됩니다
        return fibo_cache[n]
        // 종료 코드
    }
    fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1)
    //3항 연산자 condition ?  yes: no
    return fibo_cache[n]
    }

    // 계산되는 과정을 보여드리면
    // fibo_cache = [0, 1, 1, 2, fibo(2) + fibo(3)]
    // fibo(4) == fibo_cache[4] == fibo(2) + fibo(3)
    // fibo(2) == fibo_cache[2] == fibo(0) + fibo(1)
    // fibo(0) == fibo_cache[0] == 0
    // fibo(1) == fibo_cache[1] == 1
    // fibo(3) == fibo_cache[3] == fibo(1) + fibo(2)
    // fibo(1) == 1
    // fibo(2) == 1
```
    

## In 연산자 
 - in은 '값'을 찾는 것이 아니라, 'index'를 찾는 것 입니다. 

```js
3 in [1,2,3]
// false 
3 in [1,2,2]
//false
3 in [1,2,2,3]
//true
3 in [1,2,2,4]
//true
```
여기서 아 그러면 includes처럼 boolean값을 반환하니까 비슷한가? 라고 생각이 듭니다
하지만 형태와 의미가 다릅니다.

- includes는  array.includes('찾을값',indexfrom)의 형식을 가지고 있습니다.

- in의 경우 index_number in array 이러한 형식을 가지고 있습니다. 


<hr>

<br><br><br><br>

# 즉시 실행함수

1. 즉시 실행하고 외부에서 컨트롤 할 필요가 없는 함수
2. function scope, 메모리 효율

```js
//익명 즉시 실행 함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
}());

// 기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
}());

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리
```

--배열부분---
## map

```js
// mdn 예제
let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2);
arr의 배열을 한번돌면서 각 값에다 function을 적용하는 함수 입니다
```

맵은 메서드 체이닝으로 여러가지를 믹싱해서 사용합니다

```js
function 제곱(x) {
    return x **2
}

let 값2 array.map(제곱);

square root
array.map(Math.sqrt).map(x=>x**3)
```


실무에서는 어떻게 사용 할까요?
```json
let data = [{
                반:1,
                번:1,
                이름:"상돈",
                중간고사점수:55
            },{
                반:1,
                번:2,
                이름:"길동",
                중간고사점수:35
            },{
                반:1,
                번:3,
                이름:"철수",
                중간고사점수:65
            },{
                반:1,
                번:4,
                이름:"짱구",
                중간고사점수:75
            },{
                반:1,
                번:5,
                이름:"맹구",
                중간고사점수:55
            },{
                반:1,
                번:6,
                이름:"영희",
                중간고사점수:45
            }]
```
엄격하게 지킬거면 ' ' 보다는 " "을 사용해야됩니다

- json파일을 map을 사용 할 경우

중간고사 점수만 뺄경우
```js
data.map(x=>x.중간고사점수) // 출력값 : [55, 35, 65, 75, 55, 45]

// --여러가지 값을 return하고 싶을 때, 배열로 mapping하는 방법 --
data.map(x=>[x.이름,x.중간고사점수]) //[Array(2), Array(2), Array(2),Array(2)]

data.map(x=>x) : 전체 배열 보기
```
forEach(callback)
점수를 뽑아냈는데 어떻게 더할 수 있을까?

```js
let s= 0;
data.map(x => x.중간고사점수).forEach(y=>s+=y)
// 이렇게 사용하면 중간고사의 모든 점수를 더 할 수 있습니다. 
```

```js

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

let array = [1, 2, 3, 4]
let result = []
function 제곱(x) {
    return x ** 2
}
array.forEach(x => result.push(x**2));
undefined
result
(4) [1, 4, 9, 16]
```
```js
let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
undefined
let newData = data.map(a => a.map(n => n *2));
```


<hr>

# 다시 정리하기

원시자료형과 객체자료형 이건가?

전화 상담때문에 수업을 못들으 10분
지금 뭘하고 있는 걸까?
<!-- ---------------------------- -->
배열이있는데 

함수 안에서는 값의 변경이 가능합니다?? 

<!-- -------------------------- -->
call by value


array object는 넘겨줄때 주의를 해라??



<br>
<hr>
<br>
<br>
<br>

## Filter

```js
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// mdn 예제
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter( a => a.length > 6);
//true인것만 가지고 온다 
console.log(result);
```

```js
let x = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9]
let result = x.filter(x => x >5);
                //필터는 배열 + 조건이 있어야 사용가능합니다. 
console.log(result); // [6, 8, 9]
```
```js
let 회원정보 = [{
            아이디 : 'jjang',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '남',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun1@gmail.com',
            가입연도 : '2020-12-02',
            주접속위치 : '125.242.161.149'
        }, {
            아이디 : 'jjang2',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '남',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun2@gmail.com',
            가입연도 : '2021-12-02',
            주접속위치 : '125.242.161.149'
        }, {
            아이디 : 'jjang3',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '여',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun3@gmail.com',
            가입연도 : '2021-12-02',
            주접속위치 : '125.242.161.149'
        }, {
            아이디 : 'jjang4',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '여',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun4@gmail.com',
            가입연도 : '2020-12-02',
            주접속위치 : '125.242.161.149'
        }];


// 1번 남자인 사람
회원정보.filter(el => el.성별 === '남');

// 2번 남자이면서 2021년도에 가입하신 분
// 2.1
회원정보.filter(el => el.성별 === '남' && el.가입연도.split('-')[0] === '2021');

// 2.2
회원정보.filter(el => el.성별 === '남' && el.가입연도.slice(0, 4) === '2021');

// 3번 아이디가 jjang인 사람을 찾아주세요.

let e = 회원정보.find(x => x.아이디 === 'jjang');

찾을 대상이 한개이면 find를 사용해서 메모리 사용을 줄여주고,
찾을 대상이 여러개이면 filter를 사용하세요.


// 글이 100개
// 25개는 일상
// 50개는 개발관련 글
// 25개는 취미
let blogs = [{
        id : 1,
        title : 'title1',
        content : 'content1',
        section : '일상'
    }, {
        id : 2,
        title : 'title2',
        content : 'content2',
        section : '취미'
    }, {
        id : 3,
        title : 'title3',
        content : 'content3',
        section : '개발'
    }, {
        id : 4,
        title : 'title4',
        content : 'content4',
        section : '개발'
    }];

let s = '개발';
let data = s? blogs.filter(b => b.section === s) : blogs;

//문제 3번

아이디가 jjang인 사람을 골라주세요

let jj = 회원정보.filter(a => a.아이디 === 'jjang')
console.log(jj);


filter는 조건을 만족하는 사람들을 다 찾습니다

하지만 find는 찾으면 멈추게 됩니다 따라서 메모리효율을 아낄 수 있습니다
```

### Find


<hr>
<br>
<br>

<br>




# Map 이란?  arr.map( 메서드입니다)이랑 다릅니다

- Map 객체는 [키- 값]을 가지는 '객체 자료형'의 한 종류입니다

배열이 아니라 객체입니다 

생긴것도 객체처럼 생겼어요 

키랑 벨류를 가지고 {} 를 사용합니다

만약 Object에서 키와 벨류의 값을 모두 불러 오려면

```js
    Object.entries(0) 
```

다른 언어들에서는
```js
b.key
```
이러식으로 값들을 호출 할 수 있습니다.

그래서 수정해달라고 했더니

Map을 만어 줬다 ;;;

오브젝트 순회가 안되요!!!!! 도대체 왜이러는거냐 우리한테 

for of는 안되지만 for in은 된다 이게 뭐냐

그래서 나왔다 Map

## Map 사용법

### let me =new Map();

맵을 사용하겠다고 선언을 합시다.

### 1. set
m.set('하나','one');
m.set('둘','two');
m.set('셋','three');
m.set('얍','yap');

### 2. get
m.get('하나')

### 3. has
m.has('하나')  //true /false값 반환

### 3. keys
m.keys()

### 3. values
m.values()

### 3. entries
m.entires()

### 3. size
m.size()

객체의 길이를 알고 싶을때 

let o = { a : 1, b:2, c:3}

Object.keys(o).length 이딴식으로 찾아야 됬습니다

맵에서는:
Map.prototype.size
m.size라고 하면 길이가 나옵니다

### 3. delete
m.delete('하나');


Map은 map안에 배열을 만들 수도 있고 배열을 map으로 변환 할 수 도 있습니다.

```js
let temp = new Map(Object(entries(arr))

```

map 과 object의 차이점

Object의 키는 문자열 타입으로만 지정해야 하지만

map의 키는 모든 값을 가질 수 있습니다


# Set

Set과 Map

- 교집합 합집합 차집합이 가능합니다

```js
let s = new Set('abcdeeeeeeeee');
console.log(s);
console.log(s.size);
```

- Set은 중복을 제거하는 용도로 사용을 합니다

- Set은 순서가 없습니다. 따라서 index로 호출할 수 없습니다.

## 합집합 
```js

const setA = new Set([1,2,3,4,5,6,7,8]); // array => set 으로 변환 (알아서 중복제거 됨)
const setB = new Set([3,4,5,6,7]);
const union = new Set([...setA, ...setB]); // set => array spread syntax 사용
// Set(8) {1, 2, 3, 4, 5, …}



```
참고 사이트
https://jun-choi-4928.medium.com/javascript%EB%A1%9C-set-%EC%A7%91%ED%95%A9-%EA%B4%80%EB%A0%A8-%ED%95%A8%EC%88%98-%ED%95%A9%EC%A7%91%ED%95%A9-%EA%B5%90%EC%A7%91%ED%95%A9-%EC%B0%A8%EC%A7%91%ED%95%A9-%EB%93%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-e7d4d820b03c

### for var of? 

### delete

### has

### add

let a = new Set('abc');
let b = new Set('cdf');

[...a].filter(value => b.has(value))

a를 전개해서 배열로만들어서 filter를 사용해서 값 중에 b가 가지고있는 값ㄱ



Set 없는 집합연산 ㅋㅋㅋㅋㅋ
https://88240.tistory.com/519

합집합
let c = new Set([...a].concat([...b]));
이것도 되나?
new Set([...a, ...b]); 








=====================
내가 알아들을 수 없는 용어들

stack 하고 힙? 데이터 적제 // 메모리 최적화


바벨은 하위호환성을 위해서 사용하는 프로그램이다

펑션스코프는 알겠는데 안에서 메모리가 사용된뒤 휘발되는데 왜 메모리가 절약이 되는 걸까요?

비밀번호 관련해서

https://emn178.github.io/online-tools/sha256.html
sha256
64자

레인보우 어택 방어하는방법
소금치기 salting 

유효성 검사


아이디 중복을 허락하게 하려면 태그를 사용해야합니다

lion #4422


아이디나 비밀번호중 한개를 틀렸으면  유추 방지를 위해서 '또는'을  사용해야됩니다


Iterable



여담이지만 
타입을 확실히 알고 싶을 때 
꼼수 같은거로.. 
Object.prototype.toString.call(데이터).slice(8, -1); 를 통해서 값을 알 수 있습니다.