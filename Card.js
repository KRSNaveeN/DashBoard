import styles from './Card.module.css';
const Card = (props) =>{
    return <div className={styles.modal}>
    {props.children}
    </div>
}
export default Card;