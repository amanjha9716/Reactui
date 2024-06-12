import React, { useState } from 'react'
import './main.css'
import cap from '../assets/Frame-1.png'
import main from '../assets/Group 132.png'
import li1 from "../assets/Group 60.png"
import li2 from "../assets/Group 60-1.png"
import li3 from "../assets/Group 60-2.png"
import brief from"../assets/Briefcase 1.png"
import chatbot from '../assets/GenAi Chatbot.png'
import Chatbot from './Chatbot'
export default function Main() {
  const [chat,setChat]=useState(false);
  function handlechat()
  {
    setChat(prev=>!prev);
    // console.log(chat);
  }
  return (
    <div className="main-cont">
        <div className="left">
        <p>
        Skyrocket your<br/> <span>career towards excellence</span>
</p>

    <ul>
        <li><img src={li1} alt="" />Flexible Learning</li>
        <li><img src={li2} alt="" />Interactive Learning Experience</li>
        <li><img src={li3} alt="" />Career Opportunities</li>

    </ul>
<img src={brief} className='brief' alt="" srcset="" />
        </div>
        
<div className="right">
<img src={main} alt="" className='stud'/>

<img className='cap' src={cap} alt="" />
<img src={chatbot} onClick={handlechat}style={{position:'fixed',top:'470px',left:'1160px',zIndex:'100',cursor:'pointer'}} alt="" />
{chat?<Chatbot handlechat={handlechat}/>:''}
</div>
    </div>
  )
}
