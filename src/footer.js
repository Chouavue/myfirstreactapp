import {useState} from 'react';

function Footer() {

    const [num, setNum] = useState(0);
    const [str, setStr] = useState('');

  return (
    <footer className="App-header">
      <p>{"The component was updated " + (num + 1) + "times"}</p>
      <ul>
        <li onClick={() => setNum(num + 1)}>About us</li>
        <li>Contact us</li>
        <li>Privacy policy</li>
      </ul>
    </footer>
  );
}

export default Footer;


// import React from "react";

// class Footer extends React.Component {
//   state = {
//     num: 0,
//     str: "",
//   };
//   componentDidMount() {
//     let currState = this.state.num;
//     this.setState({ num: currState + 1, str: "The component was updated" });
//   }
//   componentDidUpdate() {}
//   componentWillUnmount() {}

//   handleClick(){
// let currState = this.state.num;
// this.setState({ num: currState + 1, str: "The component was updated " + (currState+1) + ' times' });
 
//   }

//   render() {
//     return (
//       <footer className="App-header">
//         <ul>
//           <li>
//             {this.state.num} -{this.state.str}
//           </li>
//           <li onClick={() => this.handleClick()}>About us</li>
//           <li>Contact us</li>
//           <li>Privacy policy</li>
//         </ul>
//       </footer>
//     );
//   }
// }

// export default Footer;
