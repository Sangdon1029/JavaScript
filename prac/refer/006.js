// 반복문 for

// let cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
// 배열을 사용하는 이유
// var car1 = 'BMW' ,car2 "Volvo" 이런식으로 줬었어야 했다

// cars 로 호출이 가능하다
// cars [0] 0번째 value를 호출한다

let cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
for( let i=0 ; i <cars.length ; i++){
    console.log(cars[i]);
}


let cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
for( let i=0 ; i <cars.length ; i += 2){
    console.log(cars[i]);
}

// 그럼 이런 배열로 반복하면서 평균나이를 구할 수 있다

let result = 0 ;

for ( i = 0 ; i < 100 ; i ++){
    result += i;
}
console.log(result)

// 순회를 돌지 않아도 될 연산들은 수학공식으로 계산을 하면 순회를 하지 않아서 브라우저에 무리를 주지 않습니다
// 따라서 수학 공식을 알고 있다면 수학 공식을 사용 하세요

// 만약에 n까지의 함수를 구하고 싶다면

let n = prompt('숫자 입력하세요');

let nplus = n*(n+1)/2;

console.log(nplus);


// (i++)++ 이런식으로 작성하면 SyntaxError가 나옵니다



// ======================구구단 코드==========================
// 구구단 코드는 외워주시면 감사하겠습니다

for (let i=2; i<10 ; i ++){
    for (let j =1; j <10; j ++){
        console.log(`${i} X ${j} , ${i*j}`)
    }
}

// 첫번째 for문을 나와서 i = 2일 경우 두번째 for문에서 j는 1~10까지 반복하면서 i*j를 출력하고나서 
//                       i =3 일경우로 반복해서 출력됩니다