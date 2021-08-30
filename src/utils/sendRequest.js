const defaultHeaders= {
    "accept":"application/json",
    "Content-type":"application/json"
};

const SendRequest = async ({url, method, body, headers =defaultHeaders})=>{
    const response = await fetch(url, {method, body, headers});
    if(!response.ok){
        throw new Error(response.status);
    }
    const jsonResponse = await response.json();
    return jsonResponse;

} ;

export default SendRequest;