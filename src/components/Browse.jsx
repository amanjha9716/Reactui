import React from 'react'
import './browse.css'
import art from '../assets/art.svg'

export default function Browse() {
  return (
    <div className="browse-cont">
        <div className="head">
            <div className="txt">
                <h1>Browse by Categories</h1>
                <br />
                <p>Select the topics below to view corresponding courses.</p>
            </div>
            <img src={art} alt="" />
        </div>
        
        <div className="butlist">
            <button>Java Script</button>
            <button>Web Development</button>
            <button>Node.Js</button>
            <button>HTML & CSS</button>
       
            <button>Product Design</button>
            <button>React JS</button>
            <button>Unreal Engine</button>
            <button>Design Theory</button>
        </div>

    </div>
  )
}
