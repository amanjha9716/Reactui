import React from 'react'
import './testimonial.css'
import pen from '../assets/Asset 7@2x 1.svg'
import frm52 from '../assets/Frame 52.svg'
import qut from '../assets/“.svg'
import grp110 from '../assets/Group 110.svg'
import grp1101 from '../assets/Group 110-1.svg'

export default function Testimonial() {
  return (
   <div className="test-cont">
    <img src={pen} className='pen' alt="" />
    <div className="txtcont" style={{display:'flex',padding:'20px'}}>
        <div className="first">
            <span>Testimonials</span>
            <br />
            <p><img src={frm52} alt="" />
            <br />
            4.5 by 1,724 users
            </p>
        </div>
        <div className="second">
       <img src={qut} alt="" />
       <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq ua ut enim ad minim veniam</p>
        <div className="profile">
            <img src={grp110} alt="" />
            <div>
                <p>Simran Kalra</p>
                <span>Software Engineer</span>
            </div>
        </div>
        </div>
        <div className="third">
        <img src={qut} alt="" />
       <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
        <div className="profile">
            <img src={grp1101} alt="" />
            <div>
                <p>Suhani Jain</p>
                <span>Student</span>
            </div>
        </div>
        </div>
    </div>
   </div>
  )
}
