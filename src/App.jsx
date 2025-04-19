import { Header } from './components/Header';
import { Post } from './Post';
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App(){
  return(
    <div>
      <Header />
    
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      <Post
        author= "Igor Aurelino"
        content= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sit vel incidunt ut dolores totam, voluptatem exercitationem nam autem magnam, officiis, tenetur voluptate ad dicta illum! Necessitatibus commodi libero omnis."
      />
      <Post
        author= "Melina Tomé"
        content= "Eu te amo"
      />
        
      </main>
    </div>
    </div>
  )
}
