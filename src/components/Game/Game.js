import React, { Component } from 'react';
import quizQuestions from '../quizQuestions'
import Questions from '../Questions/Questions'
import './Game.css';
import Header from '../Header/Header'

class Game extends Component {
  state ={ 
    quizQuestions,
    score: 0,
    complete: false
  }

  componentDidMount(){
    this.setState({quizQuestions})
  }

  checkAnswer = answer => {
    let guessedCorrectly = false;
    const newData = this.state.quizQuestions.map(item=>{
      const newItem = { ...item };
      console.log(newItem.answers.answer)
      if (newItem.answers.answer === answer) {
        console.log("false")
      } else {
        console.log("no")
      }
    })
    // answer ? this.handleCorrectGuess() : this.handleIncorrectGuess()
  }

  handleCorrectGuess = () => {
    const { score } = this.state;
    const newScore = score + 1;
    this.setState({
      score: newScore,
      complete: true
    })
  }
  
  handleIncorrectGuess = () => {
    this.setState({
      complete: true
    })
  }
  

  render() {
    return (
      <div>
      <Header score={this.state.score}/>
      {this.state.quizQuestions.map(item => (
        <Questions 
        key={item.answerindex}
        id={item.answerindex}
        checkAnswer={this.checkAnswer}
        question={item.question}
        answers={item.answers}
        display={item.display}

        />
      ))}
      </div>

    )

  }

}
export default Game;
