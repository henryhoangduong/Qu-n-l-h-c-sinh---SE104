import styles from './SearchByName.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchByName({handleSearch}) {
    return (
        <div className='flex flex-row items-center'>
        <span className="mr-3"> Tìm theo tên: </span>
        <div className={styles.container}>
            <FontAwesomeIcon icon={faSearch} className={styles.input_icon} />
            <div className={styles.input_container}>
                        <input onChange={(e) => {
                            handleSearch(e.target.value)
                        }} type="text" className={styles.input_article} />
            </div>
            </div>  
            </div>  
             

    )
}