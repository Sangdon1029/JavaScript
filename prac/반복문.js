// 1~10까지 출력해야됩니다

// 동일한 작업을 여러번 반복하기 위해서 사용하는 방법입니다

// 1.for

for (let i = 0; i<10; i++){
    //반복할 코드를 적습니다.
    console.log(i+1);
}
// for문은 ;(세미콜론)으로 구별하며 총 3구역으로 나뉩니다.
// i를 암묵적으로 사용합니다 다른 k y 값도 사용이 가능합니다


// 2.while
// let i=0 ;

// while (condition) {
//     //반복할 코드를 작성 합니다.
// }

// let i=0;

// while (i<10){
//     console.log(i);
// }
// 이런 식으로 코드를 실행하게 된다면 브라우저는 뻗어버릴 것입니다

// 따라서 i의 값을 한번 반복 할 때마다 1씩 증가 시키게 된다면 10번 loop 를 실행하고 나서 멈추게 됩니다

let i=0;

while (i<10){
    console.log(i);
    i ++;
}

// 3.do..while 

// while과 비슷하지만 조건문을 아래로 옮길 수 있습니다.

let i =0 ;

do {
    //반복할 코드를 작성합니다.
    i ++;
} while (i<10)

// while과 의 차이점은 먼저 코드를 실행하고 나서 condition을 체크합니다

// 4.Break, continue

// break를 만나는 순간 바로 반복문을 빠져나옵니다 
// continue를 만나는 순간 멈추고 다음 반복문으로 점프 합니다

while(true) {
    let answer = confirm ('계속할까요');
    if(!answer){
        break;
    }
}
// 무한 반복문은 특정 조건이 만족됬을때 break를 사용하는것이 무척 중요합니다
