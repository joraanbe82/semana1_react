import React from "react";

//Definimos las propiedades
interface IProps {
  imageUrl: string;
  name: string;
  text: string;
  remove: () => void;
}

//Definimos el estado
interface IState {
  nClicks: number;
}

class CardClass extends React.Component<IProps, IState> {
  //Pasamos las propiedades y el estado
  constructor(props: IProps) {
    super(props); //Super llama al constructor de la clase que extiende
    //Y aquí debajo hago mis cosas
    this.state = {
      nClicks: 0
    };
    this.click = this.click.bind(this);
    this.clickless = this.clickless.bind(this);
  }

  click() {
    this.setState({ nClicks: this.state.nClicks + 1 });
    console.log(this.props.name);
  }

  clickless() {
    if (this.state.nClicks > 0) {
      this.setState({ nClicks: this.state.nClicks - 1 });
    }
  }

  
  componentDidMount() {
    console.log("componentDidMount " + this.props.name);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate " + this.props.name);
  }

  componentWillUnmount() {
    console.log("componentWillunmount " + this.props.name);
  }

  render() {
    return (
      <div
        className="card border-dark"
        style={{ width: "18rem", margin: "auto" }}
      >
        {/* eslint-disable-next-line */}
        <img
          src={this.props.imageUrl}
          className="card-img-top logo"
          onClick={this.click} //al llamar a la función ponemos this y el bind
        />
        <div className="card-body text-dark">
          <h5 className="card-title" onClick={this.clickless}>
            {this.props.name}
          </h5>
          <p className="card-text">{this.props.text}</p>
          <p className="card-text">{this.state.nClicks}</p>
        </div>
        <div className="card-footer">
          <button onClick={this.props.remove}>DELETE</button>
        </div>
      </div>
    );
  }
}

export default CardClass;
