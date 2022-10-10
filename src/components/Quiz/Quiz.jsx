import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizData = useLoaderData()
    console.log(quizData.data.questions);
    return (
        <div>
            
        </div>
    );
};

export default Quiz;