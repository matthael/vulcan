import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitBtn from '../Form/SubmitBtn'

import styles from './Form.module.css'

function Form({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                text="Nome do Projeto" 
                type="text" 
                name="name" 
                placeholder="Insira o nome do projeto" 
            />
            <Input 
                text="Orçamento do Projeto" 
                type="number" 
                name="budget" 
                placeholder="Insira o orçamento toal" 
            />
            <Select
                text="Selecione uma categoria"
                name="category_id"
            />
            <SubmitBtn
                text={btnText}
            />
        </form>
    )
}

export default Form