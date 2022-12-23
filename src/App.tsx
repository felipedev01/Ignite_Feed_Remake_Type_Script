import { useState } from 'react'
import { Header } from './Components/Header'
import { Post } from './Components/Post'
import './global.css'
import styles from '../src/App.module.css'
import { SideBar } from './Components/SideBar'

export function App() {


  const post=[
    {
      id:1,
      author:{
        authorAvatar:"https://avatars.githubusercontent.com/u/11328606?v=254",
        authorName:"Angry Bird",
        authorRole:"Bird",
      },
      publishedAt:new Date('2022-12-11 12:00:00'),
      content:[{
          type:"paragraph",
          content:"Fala galeraa testando 👋 ",

      },
       {
        type:"paragraph",
        content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",

       },
       {
        type:"link",
        content:"ane.design/doctorcare",
       }
    
    ]

    }
  ]
  

  return (
    <div>
    <Header/>

    <div className={styles.Wrapper}>
      
        <SideBar/>
        <main>
        {post.map(posts=>{
          return(
            <Post 
            key={posts.id}
            author={posts.author}
            content={posts.content}
            publishedAt={posts.publishedAt}
            
            />
          )
        })}
        </main>
       
    </div>
    </div>

    

  )
}


