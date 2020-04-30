import axios from 'axios';


// to set the global header x-auth-token to token received

// setting global headers can then help to send api calls using these token 

export const setAuthToken = token =>
{
    // if token present then set it to headers
    if(token)
    {
        axios.defaults.headers.common['x-auth-token'] = token;
    }
    // if not present delete the headers from the global headers
    else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
};