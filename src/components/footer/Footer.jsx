import React from 'react';
import './footer.css';
import logo from '../../assets/01.jpg';
import {FaRegEnvelope, FaCaretRight, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import {AiOutlinePhone} from  'react-icons/ai'  ;
import {MdOutlineLocationOn} from 'react-icons/md'; 
const Footer = () => {
  return (
 <footer className="footer">
    <div className="footer__grid container grid">
        <div className="footer__content">
            {/* <a href="" className="footer__logo">
                <img src={logo} alt="" className="footer__logo-img" />
            </a> */}

            {/* <p className="footer__description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam cumque commodi necessitatibus, tenetur dolor culpa harum dicta dolorum et expedita?
            </p> */}

<div>
    
<ul className="footer__contact">
    <h3>First Location</h3>
                <li className="footer__contact-item">
                    <AiOutlinePhone className='icon' /> 600-123-4567


                </li>

                <li className="footer__contact-item">
                    <MdOutlineLocationOn className='icon' />212 X Street

                </li>

                <li className="footer__contact-item">
                    <FaRegEnvelope className='icon' />example@gmail.com

                </li>
            </ul>

            <ul className="footer__contact">
            <h3>Second Location</h3>

                <li className="footer__contact-item">
                    <AiOutlinePhone className='icon' /> 778-123-4567


                </li>

                <li className="footer__contact-item">
                    <MdOutlineLocationOn className='icon' />Y 1234 Street

                </li>

                <li className="footer__contact-item">
                    <FaRegEnvelope className='icon' />example@gmail.com

                </li>
            </ul>
</div>
        </div>

        <div className="footer__content">
            <h3 className="footer__title">Quick Links</h3>

            <ul className="footer__links">
                <li>
                    <a href="#about" className="footer__link">
                        <FaCaretRight className='icon'/> About Us
                    </a>
                </li>

                <li>
                    <a href="#menu" className="footer__link">
                        <FaCaretRight className='icon'/> Menu
                    </a>
                </li>

                <li>
                    <a href="#features" className="footer__link">
                        <FaCaretRight className='icon'/> Features
                    </a>
                </li>

                <li>
                    <a href="#gallery" className="footer__link">
                        <FaCaretRight className='icon'/> Gallery
                    </a>
                </li>

                <li>
                    <a href="#team" className="footer__link">
                        <FaCaretRight className='icon'/> Team
                    </a>
                </li>

                <li>
                    <a href="#reservation" className="footer__link">
                        <FaCaretRight className='icon'/> Reservation
                    </a>
                </li>
            </ul>
        </div>

        <div className="footer__content">
            <h3 className="footer__title">Opening Hours</h3>

            <div className='footer__opening-hour'>
                <ul className="opening__hour-list">
                    <li className="opening__hour-item">
                        <span>Saturday:</span>
                        <span>08AM - 08PM</span>
                    </li>
                    <li className="opening__hour-item">
                        <span>Sunday:</span>
                        <span>08AM - 08PM</span>
                    </li>
                    <li className="opening__hour-item">
                        <span>Monday:</span>
                        <span>08AM - 08PM</span>
                    </li>
                    <li className="opening__hour-item">
                        <span>Tuesday:</span>
                        <span>08AM - 08PM</span>
                    </li>
                    <li className="opening__hour-item">
                        <span>Wednesday:</span>
                        <span>08AM - 08PM</span>
                    </li>
                    <li className="opening__hour-item">
                        <span>Thursday:</span>
                        <span>08AM - 08PM</span>
                    </li>
                    <li className="opening__hour-item">
                        <span>Friday:</span>
                        <span>08AM - 08PM</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="footer__content">
            <h3 className="footer__title">Newsletter</h3>
            <p className="footer__description">
                Subscribe to our newsletter to get our latest news.
            </p>

        <form action="" className='subscribe__form'>
            <input type="text" placeholder="Your Email" className="form__input subscribe__input" />
            <button className='btn btn--flex subscribe__btn'>
                <FaRegEnvelope /> Subscribe now
            </button>
        
        </form>

        <div className="footer__socials">
            <h3 className="footer__social-follow">Follow Us:</h3>
            <div className="footer__social-links">
                <a href="/" className="footer__social-link">
                    <FaFacebookF />
                </a>
                <a href="/" className="footer__social-link">
                    <FaTwitter />
                </a>
                <a href="/" className="footer__social-link">
                    <FaLinkedinIn />
                </a>
                <a href="/" className="footer__social-link">
                    <FaYoutube />
                </a>
            </div>
        </div>
        </div>
        </div>
<p className="copyright__text">&copy; copyright 2023 <span>Arash</span> All right reserved.</p>
    </footer>
  )
}

export default Footer
