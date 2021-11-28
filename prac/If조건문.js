if(age<19) {
    console.log('환영합니다.');   
}

// if (boolean) {
//     -중괄호는 생략이 가능하지만 여러줄일경우 표시하는 경우가 좋기 때문에 평소에도 사용합시다
//     if  boolean 값이 참일경우 중괄호 안의 명령을 수행해주는 것입니다
// }
// -------------------
// if (age >19){
//     console.log('환영합니다');
// }
// if(age <= 19){
//     console.log('다음에 뵙겠습니다.');
// }

// 아래의 코드는 위의 코드와 같은 결과를 반환합니다
if (age>19) {
    console.log('환영합니다');
}   else {
    console.log('다음에 뵙겠습니다');
}

// 추가적으로 조건을 넣고 싶을 때에는 else if를 사용합니다

if (age>19) {
    console.log('환영합니다');
}  
else if(age === 19) {
    console.log('축하합니다')
} 
else {
    console.log('다음에 뵙겠습니다');
}
