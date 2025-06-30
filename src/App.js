import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import paper from './img/paper.png';
import rock from './img/rock.png';
import scissors from './img/scissors.png';
import game from './img/game.png';

//1. 박스2개 (타이틀, 사진, 결과)
//2. 버튼을 클릭하게 되면 클릭한 값이 박스에 보임
//3. 컴퓨터는 랜덤하게 아이템 선택
//4. 결과에 따른 승패 여부 결정
//5. 승패 결과에 따라 테두리 색이 변경

const choice = {
  rock: {
    name: "Rock",
    img: rock
  },
  scissors: {
    name: "Scissors",
    img: scissors
  },
  paper: {
    name: "Paper",
    img: paper
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const play= (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice)) 
  };

  const judgement = (user,computer) => {
    console.log(user,computer);

    if(user.name == computer.name){
      return "tie"
    }else if(user.name == "Rock")
      return computer.name =="Scissors"?"win":"lose";
    else if(user.name == "Scissors")
      return computer.name == "Paper"?"win":"lose";
    else if(user.name == "Paper")
      return computer.name == "Rock"?"win":"lose";   
  };

  const randomChoice=() => {

    let itemArray = Object.keys(choice);//객체에 키 값만 뽑아서 배열로 만들어주는 함수
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
  <div>
    <div className="subject">Jin's <span id="rock">rock</span>-<span id="scissors">scissors</span>-<span id="paper">paper</span> GAME <img title="logo-image" src={game}></img></div>
    <div className="main">
      <Box title="You" item={userSelect} result={result} />
      <Box title="Computer" item={computerSelect} result={result} />
    </div>
    <div className="main">
      <button title="scissors-box" onClick={() => play("scissors")}></button>
      <button title="rock-box" onClick={() => play("rock")}></button>
      <button title="paper-box" onClick={() => play("paper")}></button>
    </div>
  </div>
  );
}

export default App;

