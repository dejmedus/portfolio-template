import styles from './Footer.module.css'


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
        href="mailto:email96123@gmail.com"
      >
        Contact Me
      </a>
    </footer>
  )
}

export default Footer
