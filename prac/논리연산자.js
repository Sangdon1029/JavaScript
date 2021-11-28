// 자바스크립트에는 3가지 연산자가 있습니다

// 1.Or ||
// - 둘 중 하나만 성립하면 True값이 나옵니다

// 2.And &&
// - 둘다 성립해야 True값이 나옵니다.

// 3.Nor !
// -True 를 False로 , False를 True로 반환합니다.

// ------------------------------------------------

// 이러한 논리 연산자(or,and)는 불특정 다수의 정보를 분류할 때 사용됩니다.

// 예를 들어서 성인이면서 80kg이 넘고 남자인 사람을 찾는 다고 가정 하였을 때
// 순서로 80kg의 분류값이 맨 앞에 오는 것이 좋습니다
// 맨 처음부터 제일 없을 것 같은 value로 분류를 하고나서 나머지 적은 확률 순으로 분류를 해야됩니다
// 따라서 다시 작성을 한다고 하면
// 80kg이면서 성인이며 남자인 사람을 찾습니다 이렇게 바꾸는 것이 논리적으로 좋습니다

// 사용법

// Or 은 || 2개를 사용 하면 됩니다
// And 는  && 2개를 사용 합니다
// Not 은 !를 사용 하면 됩니다

const name = "John";
const age = 20;

if (name === "John" && age >19 ) {
    console.log("pass");
} else {
    console.log("fail");
}
//통과

if (name === "Jane" || age >19){
    console.log("통과");
} else {
    console.log("불일치");
}
//역시 통과

// 나이를 입력받아서 성인이 아니면 돌아가는 예제

const age = prompt ("나이를 입력해주세요")
const isAge = age > 19 ;
if (!isAge){
    console.log('돌아가') 
} else {
    console.log('통과')
}

// 비교연산자에게도 우선 순위가 있습니다.

// Or값이 가장 우선 순위가 높습니다.
