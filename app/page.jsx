import styles from './page.module.css'
import { Words } from '../components/Words'
import Main from '../components/Main/Main'
import { name } from '../assets/data/settings'

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Hi, I'm {name}!
          </h1>

          <p className={styles.description}>
            I build <Words /> web experiences.
          </p>
        </div>
        <Main />
      </main>
    </div>
  )
}