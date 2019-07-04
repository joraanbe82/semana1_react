import React from "react";
import "./App.css";
import TodoClass from "./classComponents/TodoClass";

interface IState {
  texts: string[];
  inputValue: string;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: "",
      texts: []
    };
    
  this.updateInput = this.updateInput.bind(this);
  this.addTodo = this.addTodo.bind(this);
  }

  updateInput(event: React.ChangeEvent<HTMLInputElement>){
    this.setState({inputValue: event.target.value})
  }

  addTodo() {
    const texts = this.state.texts;
    texts.push(this.state.inputValue);
    this.setState({texts, inputValue: "" });
  }

  deleteTodo(index: number){
    const texts = this.state.texts;
    texts.splice(index, 1);
    this.setState({texts});
  }


  render() {
    return (
      <div>
        <input type="text" 
          value={this.state.inputValue} 
          onChange={this.updateInput} 
        />
        <button onClick={this.addTodo}>ADD</button>

        <div>
          {this.state.texts.map((text, index) => (
            <TodoClass 
            key={text + index} 
            text={text} 
            delete={() => this.deleteTodo(index)} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
