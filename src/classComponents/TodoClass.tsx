import React from "react";


interface IProps {
  text: string;
  delete: () => void;
}

class TodoClass extends React.Component<IProps> {
  //Pasamos las propiedades y el estado
  constructor(props: any) {
    super(props); //Super llama al constructor de la clase que extiende
    //Y aquí debajo hago mis cosas
    
  }
  render() {
    return (
      <div>
        <div className="card-body text-dark">
          <p className="card-text">{this.props.text}</p>
        </div>
              
        <div className="card-footer">
            <button onClick={this.props.delete}>DELETE</button>
        </div>
      </div>
      
    );
  }
}

export default TodoClass;



