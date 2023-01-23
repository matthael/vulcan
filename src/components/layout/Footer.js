import {FaGithub, FaInstagram, FaLinkedin,} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {

    return (
        <footer className={styles.footer}> 
            <ul className={styles.social_list}>
                <li>
                    <a href="https://github.com/Biganao" target="blank"> <FaGithub /> </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/matheuzinho_filipe/" target="blank"> <FaInstagram /> </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/matheus-filipe-946430237/" target="blank"> <FaLinkedin /> </a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Vulcan</span> &copy; 2023
            </p>
        </footer>
    )

}

export default Footer