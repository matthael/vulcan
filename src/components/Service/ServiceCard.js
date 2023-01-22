import { BsFillTrashFill, BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

import styles from "../Project/Card.module.css";

function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  };

  return (
    <div className={styles.project_card}>
      <h4> {name} </h4>
      <p>
        <span> Custo total: </span> R${cost}
      </p>
      <p> {description} </p>
      <div className={styles.project_card_actions}>
        <Link to={`/services/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
