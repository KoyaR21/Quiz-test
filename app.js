const quiz = [
  {
    question: '使用頻度の高い助動詞は、次のうちどれ？',
    answers: [
      'SHOULD',
      'MIGHT',
      'CAN',
      'COULD'
    ],
    correct: 'CAN'
  },{
    question: 'カレーの発祥地は、次のうちどれ？',
    answers: [
      'インド',
      'アメリカ',
      '横須賀',
      '大分'
    ],
    correct: '横須賀'
  },{
    question: 'WHOの正式名称は、次のうちどれ？',
    answers: [
      'whooo heeeey  oooops',
      'wow  happy  oppotunity',
      'world health organization',
      'わだかまりなく、平和に、おおらかに'
    ],
    correct: 'world health organization'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let  score = 0;

// const question='使用頻度の高い助動詞は、次のうちどれ？';
// const answers = [
//   'SHOULD',
//   'MIGHT',
//   'CAN',
//   'COULD'
// ];
// const correct = 'CAN';

//定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = quiz[quizIndex].question;

const $button = document.getElementsByTagName('button');


const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength ){
$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
buttonIndex++;
}
}

setupQuiz();
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// let buttonIndex = 0;
// let buttonLength = $button.length;
// while(buttonIndex < buttonLength ){
// $button[buttonIndex].textContent = answers[buttonIndex];
// buttonIndex++;
// }

//ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent ){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }

  quizIndex++;
  if(quizIndex < quizLength){
    //問題数があればこちらを実行
    setupQuiz();
  } else {
    //問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は'+ score +'/' + quizLength + 'です！');
  }
};

let handlerIndex = 0;
const buttonlength = $button.length;
while(handlerIndex < buttonlength ){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });
