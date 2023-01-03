'use client'
import { useState, useEffect } from 'react'
import styles from './TechStack.module.css'
import { techStack } from '../../assets/data/cards'

const TechStack = ({ cards, setFilteredCards }) => {

    const [selected, onSelected] = useState({})

    function handleOnSelected(e) {
        const { name } = e.target;

        onSelected(current => ({
            ...current,
            [name]: !current[name],
        }))
    }

    useEffect(() => {
        return setFilteredCards(filter(cards, selected))
    }, [selected])


    return (
        <div className={styles.stack}>
            {techStack.map(tech => {
                return <button className={selected[tech] ? styles['selectedTech'] : styles['tech']} key={tech} name={tech} onClick={handleOnSelected}>{tech}</button>
            })}
        </div>
    )
}

function filter(cards, selected) {
    // find tech that has been selected
    // return array of cards with tech stacks including selected tech
    if (selected != {}) {
        const selectedArr = Object.keys(selected).filter(key => selected[key] == true)
        if (selectedArr.length > 0) {
            const filtered = cards.filter(card => card.stack.some(a => selectedArr.indexOf(a) >= 0))
            return filtered
        }
    }
    return cards
}

export default TechStack