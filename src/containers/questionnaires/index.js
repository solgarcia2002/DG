import {useEffect} from 'react';
import useFetch from "../../hooks/useFetch";
import {API_URL} from "../../config";
import {CircularProgress} from '@material-ui/core';
import Questionnaire from '../../components/questionnaire';


const Questionnaires = () => {
    const [callbackState, fetchQuestions] = useFetch();
    useEffect(() => {
        fetchQuestions({
            url: `${API_URL}`,
            method: 'GET'
        });
    }, []);

    return <>
        {callbackState?.isLoading && <CircularProgress/>}
        {!callbackState || callbackState.failed &&  <h4>Ocurrio un error: ${callbackState.error}</h4>}
        {callbackState?.success &&
        callbackState.data.map((q) =>
            <Questionnaire
                key={q.id}
                title={q.title}
                detail={q.description}
                questions={q.questions}
            />)}
    </>;

};
export default Questionnaires;