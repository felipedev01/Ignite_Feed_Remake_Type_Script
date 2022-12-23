import {format, formatDistance, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from '../Components/Post.module.css'
import {Avatar} from '../Components/Avatar'
import {Comment} from '../Components/Comment'
import { FormEvent, useState } from 'react'


interface postProps{
    author:{
        authorAvatar:string;
        authorName:string;
        authorRole:string;
    }
   content:[{
         type: 'paragraph' | 'Link';
         content:string;
   }]
   publishedAt:Date;
}

export function Post({author,content,publishedAt}:postProps){

    const [commentList,setCommenList]=useState([
        'Post muito bacana!',
        'Mais um post muito bacana'
    ])

    const [newCommentText, setNewCommentText]=useState(''

    )

    function handleCreateNewComment(event :FormEvent){
        event.preventDefault()
        setCommenList([...commentList,newCommentText])
        setNewCommentText('')

    }
    function handleCommentTextChange(event :FormEvent){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        console.log(newCommentText)
    }
    function deleteComment(commentToDelete){
        const commentsWithoutTheDeleteOne= commentList.filter(comment =>{
            return(
                comment != commentToDelete
            ) 
        })


        setCommenList(commentsWithoutTheDeleteOne)
    
    }
    function handleNewCommentInvalid(){
        
        event.target.setCustomValidity('Preencha este campo')
     
    }
    const publishedDateFormatted= format(publishedAt,"d 'de' MMMM 'de' y 'às' H mm ss 'h'",{
        locale:ptBR,
    })

    const publishedDateRelativeToNow=formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix:true,
    })
    console.log(author)
   
    const isNewCommentEmpty=newCommentText.length==0

    return(

        <article className={styles.Post}>
            <header>
                <div className={styles.Author}>
                <Avatar  src={author.authorAvatar} />
                <div className={styles.AuthorInfo}>
                    <strong>{author.authorName}</strong>
                    <span>{author.authorRole}</span>
                </div>

                </div>
              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.Content}>
                {content.map(line=>{
                    if(line.type=="paragraph"){
                        return(
                            <p key={line.content}>{line.content}</p>
                        )
                    }else{
                        return(
                            <p key={line.content}><a href="#">{line.content}</a></p> 
                        )
                       
                    }
                })}
            
              <p> 
                <a href="">#novoprojeto </a>
                <a href="">#nlw </a> 
                <a href="">#rocketseat </a>
                </p>
                
            </div>
             
             <form action="" className={styles.contentForm} onSubmit={handleCreateNewComment}>

                <strong>Deixe seu Feedback</strong>
                <textarea
                placeholder="Deixe seu comentário"
                name="content"
                onChange={handleCommentTextChange}
                value={newCommentText}
                onInvalid={handleNewCommentInvalid}
                required
                 />
                 <footer>
                 <button type="submit" disabled={isNewCommentEmpty}> Publicar</button>
                 </footer>
              
             </form>
            <div className={styles.commentList}>
            {
                commentList.map(comment =>{
                        return(
                            <Comment key={comment} content={comment} ondeleteComment={deleteComment}/>
                            
                    )
                    })
                }
                
             </div>
        </article>
        
        
    )
}