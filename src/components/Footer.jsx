import React from 'react'
import "../styles/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='sociaMedia'>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <GitHubIcon/>
            </div>
        <p>&copy; 2022 pedrotechpizza.com</p>
    </div>
  )
}
