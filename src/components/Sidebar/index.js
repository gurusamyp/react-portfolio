import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    
        <div className="nav-bar">
          <Link className='logo' to='\' >
            <img src={logoS} alt="logo" />
            <img className='sub-logo' src={logoSubtitle} alt="Slobodan" />
          </Link>
          <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
              <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
              
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
              <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' to='/contact' className='contact-link'>
              <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
          </nav>
          <ul>
            <li>
              <a href="https://github.com/" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>

              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>

              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>

              </a>
            </li>
            <li>
              <a href="https://github.com/" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faSkype} color='#4d4d4e'/>
              </a>
            </li>
          </ul>

     
        </div>
    
);

export default Sidebar;