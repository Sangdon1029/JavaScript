예제
1. false  || true                   // true 
2. true && false ;                  // false ;
3. !true                            //false;
4. !((true&&false)||(true&&false));  //true  : 둘다 false 이므로 
5. let x =10 ;                       //true
   !((x% 5 && x%2 == 0)||(x/2 == 5 &&false))   //0이니까 (true or false ) = ! (ture) =0 (false) 

6. let y = 10 ;                      //false
  (false &&y%2 ==0) &&(y/2 ==5 &&false) // ( 0 and true ) and (true and false ) = false and false =false

7. let z = 3                         //true
(true &&z %3 ==0) || (z/2 !=!=5 &&false  )  //true or ( true &&false = 0) true 

//앞에 것이 맞고 or가 나온다면 뒤에것을 확인 하지 않습니다
1.true 정답 2.false 정답 3.false 정답 4.true 정답 5.true 틀림  6.false 정답 7.true가아니라 error입니다

// --- 드모르간 법칙 
// -- not이 전체적으로 덧씌워져있을대 각각을 not으로 바구고 합을 곱으로 변환한다
!(x||y) === (!x&& !y);
!(x&&y) === (!x ||!y);

//--- 3항연산자 (a ? x: y) 대체 용법
true &&'완료 '||'미완료';
// ===조건부 연산자
// let result = condition ? value 1 :value2; 

let age = 10 ;
let accessAllowed = (age > 18) ? console.log('성인입니다!!') : console.log('미성년자입니다!!') //미성년자 입니다

let accessAllowed = true && '완료 '||'미완료';

// 하지만 가독성이 떨어지므로 사용하지 맙시다 if문으로 사용합시다

