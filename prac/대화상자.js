1. 
// alert 알려줌
//  일방적으로 알려 주는 용도로 사용 됩니다
//  비밀번호가 틀렸을 경우 


2.
// prompt 입력받음
// -사용자에게 어떠한 값을 입력 받을 때 사용합니다
const name = prompt ("이름을 입력하세요");
// alert ("환영합니다," + name + "님");
alert(`환영합니다 ${name} 님`);

// 만약 사용자가 취소를 하게 되면 console창에서 null값을 반환하게 됩니다.

// prompt는 두개의 인수를 받을 수 있습니다
// prompt ("입력해주세요", "2021-11")
// default 값으로 두번째 인자를 설정 할 수 있습니다

3.
// confirm 확인 받음

const isAdult = confirm ("당신은 성인 입니까?");
const isAdult = confirm ("결제하시겠습니까?");
const isAdult = confirm ("개발자 입니까?");

console.log(isAdult);

// 기본적으로 제공되는 창들은
// 스크립트가 일시 정지 됩니다. 
// 스타일링이 불가능 합니다
// 브라우저마다 모양이 다릅니다

// 그래서 css창으로 만드는 모달창으로 변경해서 사용합니다