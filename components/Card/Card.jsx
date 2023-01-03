import Image from 'next/image'
import styles from './Card.module.css'

const Card = ({ link, title, desc, alt, img, repo }) => {


    return (
        <div className={styles.card}>
            <Image className={styles.img} width={280} height={140} alt={alt} src={require(`/assets/images/${img}.png`)} />
            <h2>{title}</h2>
            <div className={styles.box}>
                <p>{desc}</p>
                <div className={styles.links}>
                    {repo ? <a className={styles.link} href={repo} target="_blank" rel="noopener noreferrer"><CodeSVG /></a> : null}
                    {link ? <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer"><LinkSVG /></a> : null}
                </div>
            </div>
        </div>
    )
}

export default Card

function LinkSVG() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>)
}

function CodeSVG() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
}