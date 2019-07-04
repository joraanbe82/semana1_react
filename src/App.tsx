import React from "react";
import "./App.css";
import Main from "./components/Main";
import Card from "./components/Card"; //Componente con función
// import CardClass from "./classComponents/CardClass"; //Componente con clases

//Le damos un tipado a las propiedades para restringuir el uso
interface IUser {
  name: string;
  text: string;
  imageUrl: string;
}

// ************ CON FUNCIONES ************

const App: React.FC = () => {

  //tambien se podria definir : IUser[] =
  //Si queremos añadir cualquier otra propiedad aparte de las definidas pondriamos
  //Array<IUser & any?
  const users: Array<IUser>  = [
    {
      name: "Darth Vader",
      text:
        "Habrá una recompensa sustancial para aquel que encuentre el Halcón Milenario.",
      imageUrl:
        "https://i.pinimg.com/originals/7e/5e/10/7e5e10fab07737024c913ba93d1b2651.png"
    },
    {
      name: "Darthy Boop",
      text: "booobooobooooo",
      imageUrl: "https://image.flaticon.com/icons/png/512/39/39797.png"
    }
  ];

  return (
    <div className="App">
      <header>Mi header</header>
      <Main color="orange" text="hay texto" />
      <Main color="blue" />

      <div className="container">
        <div className="row">
          {users.map(user => (   //Ponemos una key (única) en el primer elemento que se va a crear
            <div key={user.name} className="col-6">
              <Card
                imageUrl={user.imageUrl}
                name={user.name}
                text={user.text}
              />
            </div>
          ))}
        </div>
      </div>

      <footer>Mi footer</footer>
    </div>
  );
};

// *********** CON CLASES **************

// const users: Array<IUser> = [
//   {
//     name: "Peter",
//     text: "Description",
//     imageUrl: "https://www.pngarts.com/files/3/Boy-Avatar-PNG-Photo.png"
//   },
//   {
//     name: "John",
//     text: "Description",
//     imageUrl:
//       "https://www.pngarts.com/files/3/Cool-Avatar-Transparent-Image.png"
//   },
//   {
//     name: "Steve",
//     text: "Description",
//     imageUrl: "https://pickaface.net/assets/images/slides/slide2.png"
//   }
// ];
  
// interface IState {
//   showLastCard: boolean;
//   showFirstCard: boolean;
// }

// class App extends React.Component<{}, IState> {
//   constructor(props: any) {
//     super(props); //Super llama al constructor de la clase que extiende
//     //Y aquí debajo hago mis cosas
//     this.state = {
//       showFirstCard: true,
//       showLastCard: true
//     };
//     this.clickOnButton = this.clickOnButton.bind(this);
//     this.clickOnButton2 = this.clickOnButton2.bind(this);
//   }

//   clickOnButton() {
//     this.setState({ showFirstCard: !this.state.showFirstCard });
//   }
//   clickOnButton2() {
//     this.setState({ showLastCard: !this.state.showLastCard });
//   }

//   render() {
//     return (
//       <div className="App">
//         <header>Mi header</header>
//         {/* <Main color="orange" text="hay texto" />
//         <Main color="blue" /> */}
//         <input
//           className="btn btn-danger m-2"
//           type="button"
//           value="Hidden/Show First Card"
//           onClick={this.clickOnButton2}
//         />
//         <input
//           className="btn btn-danger m-2"
//           type="button"
//           value="Hidden/Show Last Card"
//           onClick={this.clickOnButton}
//         />
//         <div className="container">
//           <div className="row">
//             {users.map((user, i) => {
//               if (i === users.length - 1 && !this.state.showLastCard) {
//                 return null;
//               }
//               if (i === 0 && !this.state.showFirstCard) {
//                 return null;
//               }
//               return (
//                 <CardClass
//                   key={user.name}
//                   imageUrl={user.imageUrl}
//                   name={user.name}
//                   text={user.text}
//                   remove={() => {
//                     if (i === 0) {
//                       this.setState({ showFirstCard: false });
//                     }
//                     if (i === users.length - 1) {
//                       this.setState({ showLastCard: false });
//                     }
//                   }}
//                 />
//               );
//             })}
//           </div>
//         </div>
        
        
//       </div>
//     );
//   }
// }

export default App;
