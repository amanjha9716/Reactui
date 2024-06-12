import React from 'react'
import './chatbot.css'
import chatbot from '../assets/GenAi Chatbot.png'
import frm386 from '../assets/Frame 386.png'
import send from '../assets/Send.png'
export default function Chatbot({handlechat}) {
  return (
    <div class="chat-container">
        <div class="chat-header">
            <h2>GenAI Chatbot</h2>
            <button class="close-button"onClick={handlechat}>&times;</button>
        </div>
        <div class="chat-messages">
            <div class="message message-bot">
                <img src={chatbot} alt="Bot Avatar" class="avatar"/>
                <div class="message-content">
                    <p>Welcome to the NIELIT website. How can I assist you today?</p>
                </div>
            </div>
            <div class="message message-user">
                <img src={chatbot} alt="User Avatar" class="avatar"/>
                <div class="message-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</p>
                </div>
            </div>
            <div class="message message-bot">
                <img src={chatbot} alt="Bot Avatar" class="avatar"/>
                <div class="message-content">
                    <ul>
                        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</li>
                        <li>Duis aute irure dolor in reprehenderit</li>
                        <li>Ex fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="chat-input">
            <input type="text" placeholder="Write your message here..."/>
            <div class="chat-buttons">
                <img src={frm386} alt="" />
                
                <button class="send-button"><img src={send} alt="" /></button>
            </div>
        </div>
    </div>
  )
}
