import React from 'react'
import './Collab.css'
import rec6 from '../assets/Card/Rectangle 6.png'
import rec61 from '../assets/Card/Rectangle 6-1.png'
import rec62 from '../assets/Card/Rectangle 6-2.png'
import img6 from '../assets/image 6.svg'
import img7 from '../assets/image 7.svg'
import img8 from '../assets/image 8.svg'
import img9 from '../assets/image 9.svg'
import img10 from '../assets/image 10.svg'


import frm25 from '../assets/Frame 52.png'
import vector from '../assets/Vector.svg'
import frm172 from '../assets/Frame 172.png'
import code from '../assets/3d-code-icon-script-modern-programmer-software-developer-symbol-computer-science-technology 1.svg';
import grp87 from '../assets/Group 87.png'
export default function Collab() {
  return (
<div className="collab-cont">
    <p>Top Selling in Technology <img src={grp87}/></p>
    <div className="card-cont">
        <div className="card">
            <img src={rec6} alt="" />
            <div className='cardtxt'>
                <p>Internet of Things and its Applications - Self Paced</p>
                <span>
            <img src={frm25} alt="" />
            4.0 by 615 students
                </span>
                <span>Teacher: Mrs.Anbumalar Pandian</span>
                <div className='last'>
                <h4>₹399</h4>
                <img src={vector} alt="" />
                </div>
            </div>
        </div>
        <div className="card">
            <img src={rec61} alt="" />
            <div className='cardtxt'>
                <p>Certificate course in Electric Vehicle Design</p>
                <span>
            <img src={frm25} alt="" />
            4.0 by 618 students
                </span>
                <span>Teacher: Mrs.Anbumalar Pandian</span>
                <div className='last'>
                <h4>₹699</h4>
                <img src={vector} alt="" />
                </div>
            </div>
        </div>
        <div className="card">
            <img src={rec62} alt="" />
            <div className='cardtxt'>
                <p>Internet of Things and its Applications - Self Paced</p>
                <span>
            <img src={frm25} alt="" />
            4.0 by 615 students
                </span>
                <span>Teacher: Mrs.Anbumalar Pandian</span>
                <div className='last'>
                <h4>₹399</h4>
                <img src={vector} alt="" />
                </div>
            </div>
        </div>
    </div>
<img src={frm172} alt=""  />
<img src={code} alt="" />
<div className="collaboration">
    <div className="collabtxt">
        <span>
        Our Collaborations
        </span>
        <p>
        We've partnered with industry leaders to deliver courses that not only educate but also immerse you in real-world scenarios, fostering your career growth
        </p>
    </div>
    <div className="partners">
    <img src={img6} alt="" />
    <img src={img7} alt="" />
    <img src={img8} alt="" />
    <img src={img10} alt="" />
    <img src={img9} alt="" />


    </div>
</div>
</div>
)
}
