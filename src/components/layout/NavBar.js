import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import styles from "./NavBar.module.css";

import logo from "../../Img/vulcan_logo.png";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" id={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Vulcan" className={styles.logo} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
