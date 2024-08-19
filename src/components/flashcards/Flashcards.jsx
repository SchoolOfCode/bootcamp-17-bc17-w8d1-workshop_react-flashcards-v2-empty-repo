import FlashCard from './flashcard/Flashcard'
import styles from './flashcards.module.css'

export default function Flashcards() {

    let flashcardBank = [
        {
            question: "What is React?",
            answer: "React is a free and open-source front-end JavaScript library for building user interfaces."
        },
        {
            question: "What is JSX?",
            answer: "JX stands for JavaScript XML. It allows us to write HTML in React."
        },
        {
            question: "How do you create a React component?",
            answer: "You write a function (beginning with an uppercase letter) that returns some JSX code."
        }
    ]

    return (
        <>
            <section className={styles.flashcards}>

                <FlashCard
                    question={flashcardBank[0].question}
                    answer={flashcardBank[0].answer}
                ></FlashCard>

                <FlashCard
                    question={flashcardBank[1].question}
                    answer={flashcardBank[1].answer}
                ></FlashCard>

                <FlashCard
                    question={flashcardBank[2].question}
                    answer={flashcardBank[2].answer}
                ></FlashCard>

            </section>
        </>
    )
}