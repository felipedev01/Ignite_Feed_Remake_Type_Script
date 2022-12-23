import styles from '../Components/Comment.module.css'
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import {Avatar} from './Avatar'
import { useState } from 'react'
export function Comment({content, ondeleteComment}){

    const [likeCount, setLikeCount]=useState(0)

    function handleDeleteComment(){
        ondeleteComment(content)
    }

    function handleLikeComment(){
       setLikeCount(likeCount+1)
    }

    console.log(content)
    return(
        
        <div className={styles.comment}>
              <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/81122606?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                    <div className={styles.authorInfo}>
                    <strong>Felipe</strong>
                    <time title="08 de dezembro às 08:13h" dateTime="2022-12-08 08:13h">Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title="Deletar Comentário" className={styles.deleteButton}>
                    <Trash size={24} className={styles.trash}/>
                    </button>
                    
                    </header>
                    <p>{content}</p>
                  
                </div> 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                
                <footer>
                    <button className={styles.likeButton} onClick={handleLikeComment}>
                    <ThumbsUp size={20} />
                    Aplaudir
                    <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        
        </div>
    )
}