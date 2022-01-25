// 이넘(Enum)
enum Avengers {
  Capt,
  Ironman,
  Hulk,
}
const myHero = Avengers.Capt;

// any
let a: any = 'hi';
a = 20;
a = false;

// void
function sayHi(): void {
  // return 'a';
}

// 타입 추정 (type assertion)
let str = '이건 문자열 타입이 됩니다.';

let num: number;
num = 'str' as any;

const divElement = document.querySelector('#app');
divElement.innerHTML;
// const empty = document.querySelector('#app') as null;
// empty.innerHTML;

enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스"
}

var myShoes = Shoes.Nike;


enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer){
  if(answer === Answer.Yes){
    console.log(1)
  }
  if(answer === Answer.No){
    console.log(2)
  }
}
