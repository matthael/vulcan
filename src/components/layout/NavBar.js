import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'

import Container from './Container';
import logo from '../../Img/vulcan_logo.png';

function NavBar() {

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                     <img src={logo} alt="Vulcan" className={styles.logo} />
                </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/"> Home </Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/projs"> Projetos </Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/about"> Sobre </Link>
                        </li>   
                        <li className={styles.item}>
                            <Link to="/cont"> Contato </Link>
                        </li>
                    </ul>
            </Container>
        </nav>
    )

}

export default NavBar