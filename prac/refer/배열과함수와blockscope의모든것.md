# 날짜
```js
let d = new Date();
d
Wed Dec 01 2021 10:35:01 GMT+0900 (한국 표준시)
d.getMonth()
11
// 월은 0부터 시작합니다.

d.getDate()
1
// 일은 1부터 시작합니다.

d.getDay()
3
// 일요일부터 0입니다.

d.getHours()
10
d.getMinutes()
35
d.getSeconds()
1
```
<br> 
<br> 
<br> 


# 배열 Array

```js
// 배열을 만드는 여러가지 방법
let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
let 과일2 = new Array(5);
let 과일3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');
과일[0] = '한라봉';
과일; //(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']
```

## 배열과 문자열의 차이점 

- 배열은 호출해서 변경이 가능하지만 문자열은 호출해서 변경이 안됩니다
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


예제 ) 각각의 반의 평균을 구하라

-배열의 길이 구하기 :total[i].length
```js
    let suma = 0;
    let sumb = 0;
    let total = [
            // 1반
            [[10, 20, 30, 40, 50],
            [20, 30, 40, 50, 60]],
            // 2반
            [[10, 20, 30, 40, 50],
            [20, 30, 40, 50, 60]],
            ];
    for(let k=0; k<total.length;k++){
        //1~2반 학생 전체 합
        for (let j=0; j<total[0].length;j++){
            //1반 학생 전체 합
            for (let i=0; i<total[0][j].length; i ++){
                //a학생의 전체 합
                if(k ===0){
                    suma += total[k][j][i];
                    meana = suma/(total[0][0].length*total[0].length)
                }else{
                    sumb += total[k][j][i];
                    meanb = sumb/(total[0][0].length*total[0].length)
                }
            }
        }
    }        
    console.log(meana); //1반의 평균
    console.log(meanb); //2반의 평균
    let meanTotal = (meana+meanb)/total.length; //전체 평균

```


<hr>

<br> 
<br> 
<br> 


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



# Object 우와 객체다

```js
let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
  이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'},
  10 :100

}
```
형태 : {key:value}
호출 : 변수명  // 변수명.key

주의 person.'name' : error / person[name]: undefined

person의 이력의 첫번째 직장은 어떻게 구할까요?

=> person.이력.첫번째직장 이거 맞네

두번째 방법은
person['이력'].첫번째직장 이렇게해도 호출이 가능합니다

Q.key가 숫자가 될 수 있나요?

person.10 =>syntax error    왜 문법 오류가 나오지
person[10] => 100 출력됨
person['10'] => 100 출력됨

1.첫번째 이유: 내생각 - 10은 숫자는 변수명으로 설정할 수 없어서
.을찍으면 멤버접근 연산자이므로 가능합니다

O(n) 이게 뭘까요 나중에 알아봅시다 에 넣어놔야지

Object.keys(person) 이러면 키값만 받아옵니다
Object.values(person) 이러면 value 값만 받아옵니다
Object.entries(person) 이러면 ___값만 받아옵니다

key와 value값 둘다 동시에 뽑아 내야 되는 경우가 생깁니다
어떠한 경우일까요?? 

let data = Object.entries(person);
이러면 배열안의 배열로 key와 value값을 넣어줍니다

저렇게 뽑으면 어디에서 좋을까요? 반복문에서 좋습니다


for (const [key, value] of Object.entries(object1)) {
  console.log(${key}: ${value});
}


for (let [i, j] of [[1, 2], [3, 4]]) {
    console.log(i, j);
}
//1 2
 3 4




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