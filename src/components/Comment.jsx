import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Comment({content, onDeleteComment}) {
    const [LikeCount, setLikeCount] = useState(0)

    function handleDeleteCommnet(){
        onDeleteComment(content)
    }

    function handleLikeComment (){
        setLikeCount (LikeCount + 1);
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/v2/D4D03AQGjDM_SJ5WDkA/profile-displayphoto-shrink_400_400/B4DZZUGZwAHwAg-/0/1745167687092?e=1750896000&v=beta&t=kRKdY3vzQWrscxkKOLsSnkMf4N8lFFccgGYIz4yZ8PQ" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igor Aurelino</strong>
                            <time title="21 de abril às 10:38h" dateTime="2025/04/21">Cerca de 1h atrás</time>
                        </div>

                        <button onClick= {handleDeleteCommnet} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{LikeCount}</span>
                    </button>
                </footer>
            </div>{/* Fim div commentBox */}


        </div>
    )
}