import React from 'react'
import defaultImg from '../img/default.png';

const Box = (props) => {
    let result;
    if(props.title == "Computer" && props.result !== "tie" && props.result !== ""){
        result = props.result === "win"?"lose":"win"
    }
    else{
        result = props.result;
    }
    return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2 data-testid="item-name">{props.item && props.item.name}</h2>
       <img className="item-img"
            src={props.item ? props.item.img : defaultImg}
            alt={props.item ? props.item.name : "default"}
      />
      <h2>{result}</h2>
    </div>
  );
};

export default Box

