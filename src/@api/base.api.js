import axios from 'axios'

export const api = axios.create({
    baseURL: `http://localhost:5000/api`,
    headers: { 'x-access-token': localStorage.getItem('token') }

});

api.interceptors.response.use(response => {
    return response
}, error => {
    if (!error.response) return; // check network
    const statusCode = error.response.status
    if (statusCode === 401 || statusCode === 403) {
        // handle is here or redirect to login page
        return
    }
});