let sample = [10, 20, 30, 40, 50 , 60, 70]
// 최대값 구하기
// 1. Math.max(...sample);
let temp = sample[0];
for (let i= 0; i<sample.length;  i++){
    if (temp < sample[i]){
        temp = sample [i];
    }
}
console.log(temp)
// 자기보다 큰값이 나오면 덮어 씌우기를 하고 있는 코드 입니다


// 최소값 출력하기
let mini = sample[0];

for(let i=0; i<sample.length; i ++){
    if(mini > sample[i]){
        mini =sample[i];
    }
}
console.log(mini);

let text = 'javascript';

for (let i =1 ; i< text.length ; i ++){
    console.log(text[i-1], text [i]);
}


// 다음 입사문제 코테 

let value = [1, 3, 4, 8, 13, 17, 20];
let temp = value[1] - value[0]

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        console.log(value[i], value[i + 1])
    }
}
// 10점 만점에 1점 정도의 코드

// map을 배우게 된다면 배열 하나를 잘라내고 새로 생성하는 기능입니다
// -자매품으로 sort도 있습니다 (정렬)


// ====================================================================================================
// ====================================================================================================
// 정답코드
let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0];  // 4 - 1 -> 3, 초기 temp는 3
let result = 0;

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i];
        result = i;
    }
}

console.log(value[result], value[result+1]);
////////////////////////


// 1번째 순회(i==0, temp=3, result=0)
for (let i = 0; i < 8; i++) {
    if (3 > 3){
        temp = value[i+1] - value[i];
        result = i;
    }
}

// 2번째 순회(i==1, temp=2, result=1)
for (let i = 0; i < 8; i++) {
    if (3 > 2){
        temp = 2;
        result = 1;
    }
}

// 3번째 순회(i==2, temp=2, result=1)
for (let i = 0; i < 8; i++) {
    if (2 > 2){
        temp = value[i+1] - value[i];
        result = i;
    }
}
