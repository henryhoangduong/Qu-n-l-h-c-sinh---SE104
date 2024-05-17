import styles from './Input.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input() {
    return (
<div className={styles.container}>
            <FontAwesomeIcon icon={faSearch} className={styles.input_icon} />
            <div className={styles.input_container}>
                <input type="text" className={styles.input_article} />
            </div>
</div>
    )
}

export default Input;