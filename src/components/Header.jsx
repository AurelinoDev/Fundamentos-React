import styles from './Header.module.css'
import igniteLogo from '../img/ignite-logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteLogo}/>
            {/* <strong>Ignite Feed</strong> */}
        </header>
    );
}