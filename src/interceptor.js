import axios from 'axios';

function setUpInterceptor() {

    axios.defaults.baseURL = "http://localhost:3000/"
    axios.interceptors.request.use(function(request) {
        console.log(request.data)
        // request.data = JSON.stringify(request.data);
        request.headers = {
            'Authorization': `Bearer token`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return request

    },function(error){
        return Promise.reject(error)
    })

    axios.interceptors.response.use(function(response){
        console.log("response");
        return response;
    },function(error){
        return Promise.reject(error);
    })
}

export default setUpInterceptor;