import {useState} from 'react';
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

    if (isQuizComplete) {
        return <div id="summary">
            <img src={quizComplete} alt="Trophy icon." />
            <h2>Quiz Completed!</h2>
        </div>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort((a,b) => Math.random() - 0.5);

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        })
    }


    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => {
                        return (
                            <li key={answer} className='answer'>
                                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}