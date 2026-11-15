import axios from "axios";

//create is a method which returns the instance of an object
const api = axios.create({
    baseURL : "https://eventsphere-server-mfdb.onrender.com"
})

api.interceptors.request.use((req) => {
    req.headers.token = "secret-token"; //extra information
    return req;
} , (err) = {})

api.interceptors.response.use(
    (response) => {
        return response;
    } ,
    (err) => {}
)

export default api;
