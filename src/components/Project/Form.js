import { useEffect, useState } from "react";

import Input from "../Form/Input";
import Select from "../Form/Select";
import SubmitBtn from "../Form/SubmitBtn";

import styles from "./Form.module.css";

function Form({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        placeholder="Insira o orçamento total"
      />
      <Select
        text="Selecione uma categoria"
        name="category_id"
        options={categories}
      />
      <SubmitBtn text={btnText} />
    </form>
  );
}

export default Form;
