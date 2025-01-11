import React, { useState } from 'react';
import './index.css';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "2", "4", "5"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
];

const QuizApp = () => {
    const [started, setStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleStartQuiz = () => {
        setStarted(true);
        setScore(0);
        setCurrentQuestionIndex(0);
        setQuizFinished(false);
        setFeedback("");
    };

    const handleAnswerClick = (option) => {
        setSelectedAnswer(option);
        if (option === questions[currentQuestionIndex].answer) {
            setFeedback("Correct!");
        } else {
            setFeedback("Incorrect!");
        }
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        setSelectedAnswer(null);
        setFeedback("");
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const handleRestart = () => {
        setStarted(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizFinished(false);
        setSelectedAnswer(null);
        setFeedback("");
    };

    return (
        <div className="quiz-app">
            {!started ? (
                <div className="start-screen">
                    <h1>Welcome to the Quiz!</h1>
                    <p>Test your knowledge with some interesting questions.</p>
                    <button onClick={handleStartQuiz}>Start Quiz</button>
                </div>
            ) : quizFinished ? (
                <div className="result">
                    <h1>Your Score: {score}/{questions.length}</h1>
                    <button onClick={handleRestart}>Restart</button>
                </div>
            ) : (
                <div className="question-container">
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    <div className="options">
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                className={`option ${selectedAnswer === option ? 'selected' : ''}`}
                                onClick={() => handleAnswerClick(option)}
                                disabled={selectedAnswer !== null} // Disable button after answer is selected
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {feedback && <div className="feedback">{feedback}</div>}
                    {selectedAnswer && (
                        <button className="next" onClick={handleNextQuestion}>
                            Next
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuizApp;