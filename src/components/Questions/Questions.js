import React from 'react';

const Questions = props => (
  <div className= { props.display ? "display" : "noDisplay"}> 
      <h1>{props.question}</h1>
      
      <div className="d-grid gap-2 col-6 mx-auto">
  {props.answers.map(item=>(
        <button role="question" className="btn btn-outline-info" key={item.answerID} onClick={() => props.checkAnswer(item.answer)}>
        {item.content}</button>
       
  ))}
   </div>
  </div>

)



export default Questions;