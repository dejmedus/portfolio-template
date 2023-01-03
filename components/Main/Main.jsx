'use client'
import { useState } from 'react'
import Card from '../../components/Card/Card'
import TechStack from '../../components/TechStack/TechStack'
import { email } from '../../assets/data/settings'

import cards from '../../assets/data/cards'

import styles from './Main.module.css'

const Main = () => {

    const [filteredCards, setFilteredCards] = useState(cards)

    return (
        <>
            <div className={styles.filter}>
                <TechStack cards={cards} setFilteredCards={setFilteredCards} />
            </div>

            <div className={styles.grid}>
                {filteredCards.map(card => {
                    return <Card key={card.title} link={card.link} repo={card.repo} title={card.title} desc={card.desc} alt={card.alt} img={card.img} />
                })}
            </div>


            <a href={`mailto:${email}`} className={styles.email}>
                <EmailSVG />
            </a>
        </>
    )
}

export default Main

function EmailSVG() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>)
}