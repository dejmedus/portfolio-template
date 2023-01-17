import styles from './Footer.module.css'
import { email } from '../../assets/data/settings'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/dejmedus/portfolio-template"
        target="_blank"
        rel="noopener noreferrer"
      >
        Use this template
      </a>
      <a
        className={styles.contact}
        href={`mailto:${email}`}
      >
        Contact Me
      </a>
    </footer>
  )
}

export default Footer
