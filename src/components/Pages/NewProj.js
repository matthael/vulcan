import Form from '../Project/Form'
import styles from './NewProj.module.css'

function NewProj() {

    return(
        <div className={styles.np_container}>
            <h1> Criar Projeto </h1>
            <p> Crie seu projeto para depois adicionar os serviços</p>
            <Form btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProj