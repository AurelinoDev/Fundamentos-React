import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className= {styles.cover}
                src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
        <div className={styles.profile}>
            <Avatar src=
            "https://media.licdn.com/dms/image/v2/D4D03AQGjDM_SJ5WDkA/profile-displayphoto-shrink_400_400/B4DZZUGZwAHwAg-/0/1745167687092?e=1750896000&v=beta&t=kRKdY3vzQWrscxkKOLsSnkMf4N8lFFccgGYIz4yZ8PQ"
            />
            <strong>Igor Aurelino</strong>
            <span>Desenvolvedor Web</span>
        </div>
        
        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
        
        </aside>
    ); 
}
   