import { useState } from 'react';
import styles from './flashcard.module.css'

export default function Flashcard({ question, answer }) {

    const [ showAnswer, setShowAnswer ] = useState(false)

    function handleClick() {
        setShowAnswer(!showAnswer)
    }

    return (
        <div className={styles.flashcard}>
            {!showAnswer && <div onClick={handleClick}>
                🤔
                {question}
            </div>}
            {showAnswer && <div onClick={handleClick}>
                 🤯
                 {answer}
            </div>}
        </div>
    )
}