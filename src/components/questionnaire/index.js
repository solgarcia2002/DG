import React from 'react';
import Question from '../question';

const Questionnaire = ({title, detail, questions})=>{
    return (
        <div>
            <h3>{title}</h3>
            <p>{detail}</p>
            {questions.map(quest =>
                <Question
                    key={quest.id}
                    title={quest.title}
                    type={quest.type}
                    questions={quest.option}
                />)}
        </div>
    );

};
export default Questionnaire;