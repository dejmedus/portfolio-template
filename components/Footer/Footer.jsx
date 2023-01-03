import styles from './Footer.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/dejmedus"
        target="_blank"
        rel="noopener noreferrer"
      >
        ❤️ Use this template
      </a>
    </footer>
  )
}

export default Footer