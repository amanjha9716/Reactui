import React from 'react'
import './Topselling.css'
import rec28 from '../assets/Rectangle28.png'
import rec6 from '../assets/Rectangle6.png'

import assex from '../assets/Asset 11@2x 1.svg'
import img13 from '../assets/image13.png'
import vector from '../assets/Vector.svg'
import frm52 from '../assets/Frame 52.svg'
import subs from '../assets/Subtract.svg'
import grp91 from '../assets/Group91.svg'
export default function Topselling() {
  return (

    <div className="tscont">
        <div className="course">
        <img src={assex} alt="" className='assex'/>
        <div className="topsellcour">
            <h1>Top Selling Courses</h1>
            <div className='crs'>
                <img src={rec28} alt="" />
                <p>Bitcoin Technology and Application</p>
            </div>
            <hr />
            <div className='crs'>
                <img src={img13} alt="" />
                <p>Course on Computer Concepts </p>
            </div>
            <div className='crs'>
                <img src={rec6} alt="" />
                <p>Data Analytics & Machine Learning (Python)</p>
            </div>
        </div>
        <div className="viewall">
            <p>View All Courses <img src={vector} alt="" /></p>
            <p>Discover the essentials of computing with our 'Course on Computer Concepts. From hardware to programming languages, delve into the fundamentals and unlock the keys to navigating the digital world confidently.</p>
            <br />
            <p><strong>Teacher:</strong> Mrs. Bhawna</p>
            <br />
            
            <p><img src={frm52} alt="" /> 4.5 by 1,724 students</p>
            <br />
            <h2>₹599 <span>(inclusive of taxes)</span></h2>
            <br />
            <a href="">View All <img src={vector} alt="" /></a>
            <a href="">Wishlist Course <img src={vector} alt="" /></a>

        </div>
        </div>
        
        <div className="bottom">
            <div className="div">
                <img src={subs} className='subs'alt="" />
                <img src={grp91} className='grp91'alt="" />
            </div>
            <div className="text">
              <h1>Take a practice Quiz designed to sharpen your skills</h1>
            </div>
            <button className='takeq'> Take Quiz</button>
        </div>
    </div>
  )
}
