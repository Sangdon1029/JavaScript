// 모든 Switch문은 if else로 작성이 가능합니다

// Case가 다양할 경우 보다 간결하게 쓸 수 있다는 장점 때문에 작성합니다

// if(condition == A ) {             |       switch(condition) {
//     //code                        |          case A:                 
// } else if (condition == B){       |              //A일경우 code
//     //code                        |          case B:
// }                                 |              //B일경우 code
//                                   |          }
// 비교 입니다.

// object { 사과 : 100원 , 바나나 : 200원 , 키위 : 300원 , 멜론 :500원 , 수박 :500원 }

let fruit = prompt ('무슨 과일을 사고 싶나요?');

switch(fruit){
    case '사과':
        console.log('100원 입니다');
        break;
    case '바나나':
        console.log('200원 입니다');
        break;
    case '키위':
        console.log('300원 입니다');
        break;
    case '멜론':
        console.log('500원 입니다');   //멜론과 수박의 출력 문이 같은경우  아래와 같이 작성 해주면 됩니다
        break;                       // case'멜론':
    case '수박':                      // case'수박':
        console.log('500원 입니다');   //console.log('500원입니다');
        break;                      //break;
    default:
        console.log('그런 과일은 없습니다')
}
// case는 fruit가 반환할 때 모든 코드를 실행합니다 따라서 break를 넣어 주셔야 합니다
// 만약 없는 항목의 아이템을 입력했을 경우 default값을 실행해서 예외 처리를 해줍니다 