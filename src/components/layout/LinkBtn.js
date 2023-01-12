import { Link } from 'react-router-dom'

import styles from './LinkBtn.module.css'

function LinkBtn({ to, text}) {
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkBtn