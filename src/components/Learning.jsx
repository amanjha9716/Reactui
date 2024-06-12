import React from 'react'
import './learning.css'
import grp87 from '../assets/Group 87.png'
// import rec6 from '../assets/Card/Rectangle 6.png'
import rec61 from '../assets/Rectangle 6-1.png'
import rec62 from '../assets/Rectangle 6-2.png'
import rec63 from '../assets/Rectangle 6-2.png'

import frm172 from '../assets/Frame 172.png'

import frm25 from '../assets/Frame 52.png'
import vector from '../assets/Vector.svg'
export default function Learning() {
  return (
    <div className="learn-cont">
    <p>Blended Learning <span> <a href="">View All courses</a><img src={grp87}/></span></p>
    <div className="card-cont">
        <div className="card">
            <img src={rec61} alt="" />
            <div className='cardtxt'>
                <p>PG Program in Data
Engineering</p>
                <span>
            <img src={frm25} alt="" />
            4.5 by 1,724 students
                </span>
                <span>Teacher: Mr. Balamurugan N & Harish R</span>
                <div className='last'>
                <h4>₹499</h4>
                <img src={vector} alt="" />
                </div>
            </div>
        </div>
        <div className="card">
            <img src={rec62} alt="" />
            <div className='cardtxt'>
                <p>Certificate course in Aws</p>
                <span>
            <img src={frm25} alt="" />
            4.0 by 615 students
                </span>
                <span>Teacher: Mr. Yatish Kumar Appu RP (Cloud Computing)</span>
                <div className='last'>
                <h4>₹499</h4>
                <img src={vector} alt="" />
                </div>
            </div>
        </div>
        <div className="card">
            <img src={rec63} alt="" />
            <div className='cardtxt'>
                <p>Certified Full Stack Web Developer Feb 2024 Summary</p>
                <span>
                    <br />
            <img src={frm25} alt="" />
            3.9 by 917 students
                </span>
                
                <span>Teacher: Mahalaskhmi P</span>
                
                <div className='last'>
                <h4>₹699</h4>
                <img src={vector} alt="" />
                </div>
            </div>
        </div>
    </div>
<img src={frm172} alt=""  />
</div>

  )
}
