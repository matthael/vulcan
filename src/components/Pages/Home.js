import styles from './Home.module.css'

import LinkBtn from '../layout/LinkBtn'

import savings from '../../Img/savings.svg'

function Home() {

    return(
        <section className={styles.home_container}>
            <h1> Bem-vindo ao <span>Vulcan</span> </h1>
                <p> Comece a gerenciar o seus projetos agora mesmo! </p>
            <LinkBtn to="/newproj" text="Criar Projeto" />
            <img src={savings} alt="Vulcan" />
        </section>
    )
}

export default Home