
import React from "react";
import Lottery from "./Lottery";
import "./App.css"


export default function App(){
  return(
  <>
  <Lottery n={3} winningSum={15}/>
  </>
  );
 
}
