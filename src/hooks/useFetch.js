import {useCallback, useState} from 'react';

import SendRequest from '../utils/sendRequest';

const useFetch = ()=>{
    const [callbackState, setCallbackState] = useState({
        isLoading:false,
        success: false,
        error: null,
        failed: false,
        data: null,
    });
    const fetchFunction = async ({url, method, headers, body})=>{
        try{
            setCallbackState ({
                isLoading:true,
                success: false,
                error: null,
                failed: false,
                data: null,
            });
            const result = await SendRequest({url, body,method, headers});
            setCallbackState({
                isLoading:false,
                success: true,
                error: null,
                failed: false,
                data: result,
            });
            return result;
        } catch (error){
            setCallbackState({
                isLoading:false,
                success: false,
                error: error,
                failed: true,
                data: null,})
        }
    };
    useCallback(fetchFunction,[]);
    return [callbackState, fetchFunction];

};
export default useFetch;
