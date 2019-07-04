import React from "react";

interface IProps {
  imageUrl: string;
  name: string;
  text: string;
  
}

const Card: React.FC<IProps> = props => {
  
  const [nClicks, setnClicks] = React.useState(0);
  
  const clickOnImage = () => {
      setnClicks(oldnClicks => oldnClicks + 1);
  }

  const clickOnName = () => {
    setnClicks(oldnClicks => oldnClicks - 1);
  }

  return (
    <div className="card border-dark" style={{ width: "18rem" }}>
      {/* eslint-disable-next-line */}
      <img
        src={props.imageUrl}
        className="card-img-top logo"
        onClick={clickOnImage} //Llamamos así a la función
      />
      <div className="card-body text-dark">
        <h5 className="card-title" onClick={clickOnName}>{props.name}</h5>
        <p className="card-text">{props.text}</p>
        <p className="card-text">{nClicks}</p>
      </div>
     
    </div>
  );
};







export default Card;
