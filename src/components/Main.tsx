import React from "react";

interface IProps {
  color: string;
  text?: string;
}

const Main: React.FC<IProps> = props => {
  return (
    <main
      style={{
        backgroundColor: props.color
      }}
    >
      {props.text ? props.text : "no hay texto"} {/*Podemos meter condiciones a las propiedades*/}
      
    </main>
  );
};

export default Main;
