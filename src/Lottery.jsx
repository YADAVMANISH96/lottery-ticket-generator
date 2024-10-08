import {useState} from "react";
import "./Lottery.css";
import { generateTicket,sum } from "./helper";
import Ticket from "./Ticket";



export default function Lottery({n=3, winningSum=15}){
    let [ticket, setTicket] = useState(generateTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let BuyTicket = () =>{
        setTicket(generateTicket(n));
    }
    
return(
        <>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <button onClick={BuyTicket}>Buy New Ticket</button>
        <h3>{isWinning && "Congratulations you won!"}</h3>
        </>
    );

}