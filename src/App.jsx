import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGjDM_SJ5WDkA/profile-displayphoto-shrink_400_400/B4DZZUGZwAHwAg-/0/1745167687092?e=1750896000&v=beta&t=kRKdY3vzQWrscxkKOLsSnkMf4N8lFFccgGYIz4yZ8PQ',
      name: 'Igor Aurelino',
      role: 'Desenvolvedor Web'
    },
    content: [
      {type: 'paragraph', content: '🚀 Novo projeto!'},
      {type: 'paragraph', 
        content: `Apresento o "Modelo Guaraná", uma proposta visual inspirada em campanhas de bebidas, com foco em interatividade, identidade de marca e uma pegada criativa no design.
                  Utilizei HTML, CSS e JavaScript para desenvolver uma interface responsiva, com carrossel de slides, animações suaves e elementos gráficos personalizados. Tudo pensado pra proporcionar uma experiência moderna e envolvente na web.
                  Tô sempre buscando evoluir e testar novas ideias. 😎`},
		  {type: 'Link' , content: '<jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-04-21 16:21:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQHnjYAJr4Dv_Q/profile-displayphoto-shrink_400_400/B4DZPSOkTQHgAg-/0/1734398855148?e=1750896000&v=beta&t=oOf4Z4waUdaCBL6PXLJxToQxz8Z3zQfRCT5pwR5kbI8',
      name: 'Lucas Ferreira',
      role: 'Desenvolvedor Front-End',
    },
    content: [
      {type: 'paragraph', content: 'Olá comunidade! 👋'},
			{type: 'paragraph',
        content: `Iniciando o processo de refatoração em um projeto feito por mim bem no inicio dos meus estudos envolvendo tecnologias frontend. 
                  Ao analisar o código, decidi que era necessário reestrutula-lo, dessa maneira,
                  melhorando a legibilidade do código e deixando mais fácil a questão de futuras melhorias!`},
		  {type: 'Link' , content: '<lucasferreira/linkedin'},
    ],
    publishedAt: new Date('2025-04-01 17:30:00'),
  },

];

export function App(){
  return(
    <div>
      <Header />
    
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
          return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt= {post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </div>
  )
}
