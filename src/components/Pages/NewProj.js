import { useNavigate } from "react-router-dom";

import Form from "../Project/Form";
import styles from "./NewProj.module.css";

function NewProj() {
  const navigate = useNavigate();

  function createPost(project) {
    //inicialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate("/projs", { message: "Projeto criado com sucesso!" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.np_container}>
      <h1> Criar Projeto </h1>
      <p> Crie seu projeto para depois adicionar os serviços</p>
      <Form handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProj;
