import React from 'react'
import './footer.css'
import call from '../assets/call.svg'
import sms from '../assets/sms.svg'
import facebook from '../assets/Icon/Facebook.svg'
import grp19 from '../assets/Group 19.svg'
// import { flushSync } from 'react-dom'
import Ai from '../assets/AI@2x 1.svg'
export default function Footer() {
  return (
    <div className="footer">
       <div className="firfooter">
        <span>Contact Us</span>
        <br />
        <p>Plot No. 12, ABC Pocket, Sector-08, Uttam Nagar,
New Delhi - 110058</p>
<br />
<p><img src={call} alt="" />(+91) 9876543210</p>
<br />
<p><img src={sms} alt="" />contactedu@gmail.com</p>
       </div>
       <div className="secfooter" style={{display:'flex'}}>
        <div style={{padding:'60px'}}>
        <span style={{fontSize:'28px',fontWeight:'500',display:'block'}}>Social Media</span>
        <div style={{display:'flex',alignItems:'center'}}><img src={facebook} alt="" />
        <img src={grp19} alt="" /></div>
        
        </div>
        <img src={Ai} alt="" style={{position:'relative',top:'90px'}}/>
       </div>
    </div>
  )
}
