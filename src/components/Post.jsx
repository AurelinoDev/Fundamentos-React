import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img src="https://media.licdn.com/dms/image/v2/D4D03AQGjDM_SJ5WDkA/profile-displayphoto-shrink_400_400/B4DZZUGZwAHwAg-/0/1745167687092?e=1750896000&v=beta&t=kRKdY3vzQWrscxkKOLsSnkMf4N8lFFccgGYIz4yZ8PQ" />
					<div className={styles.authorInfo}>
						<strong>Igor Aurelino</strong>
						<span>Desenvolvedor Web</span>
					</div>
				</div>

				<time title="21 de abril às 10:38 " datetime="2025/04/21">Publicado há 1h</time>
			</header>

			<div className={styles.content}>
					<p>Fala galeraa 👋</p>

					<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

					<p><a href="">jane.design/doctorcare</a></p>

					<p> 
						<a href="">#nlw </a> {''}
						<a href="">#novoprojeto</a> {''}
						<a href="">#rocketseat</a> {''}
					</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

			<textarea
			placeholder='Deixe seu comentário'
			/>
			<footer>
			<button type='submit'>Publicar</button>
			</footer>
			</form>
		</article>
	)
}