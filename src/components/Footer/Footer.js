import React from 'react'

import './footer.scss'

export default function Footer(props) {
    const imgFacebook = props.images.find(image => image.name === "imgFacebook");
    const imgInstagram = props.images.find(image => image.name === "imgInstagram");
    const imgTwitter = props.images.find(image => image.name === "imgTwitter");

    return (
        <footer className='footer'>
            <div className="container-center">
                <div className='footer__follow flex flow-column'>
                    <h3 className='flex content-center'>Follow us</h3>
                    <div className='flex content-center'>
                        <a href=''>
                            <img src={imgFacebook.url} alt={imgFacebook.title} />
                        </a>
                        <a href=''>
                            <img src={imgInstagram.url} alt={imgInstagram.title} />
                        </a>
                        <a href=''>
                            <img src={imgTwitter.url} alt={imgTwitter.title} />
                        </a>
                    </div>
                </div>

                <div className='footer__links flex space-between'>
                    <div>
                        <h4>About Us</h4>
                        <p>we want to help passengers to reach their destinations</p>
                    </div>
                    <div>
                        <h4>Explore</h4>
                        <ul>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>Destinations</a></li>
                            <li><a href=''>About</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Information</h4>
                        <ul>
                            <li><a href=''>More search</a></li>
                            <li><a href=''>Blog</a></li>
                            <li><a href=''>Testimonials</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Services</h4>
                        <ul>
                            <li><a href=''>Manage My Bookings</a></li>
                            <li><a href=''>Checkin</a></li>
                            <li><a href=''>Hotel</a></li>
                            <li><a href=''>Cars</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
