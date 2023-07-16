import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'


// set request and response interceptors for axios instance and return that instance for any one to use
// Mahmoud Salah Elwakeil

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = "get your jwt token from local storageeeeeeeeeee" //localStorage.getItem("jwtToken");
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
    }
    //console.info(`[request] [${JSON.stringify(config)}]`);
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    //console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}


const onResponse = (response: AxiosResponse): AxiosResponse => {
    //console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    //console.error(`[response error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}

function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}

// Add a request interceptor
// axios.interceptors.request.use(
//     config => {
//         const token = "get your jwt token from local storage" //localStorage.getItem("jwtToken");
//         if (token) {
//             config.headers['Authorization'] = 'Bearer ' + token
//         }
//         // config.headers['Content-Type'] = 'application/json';
//         return config
//     },
//     error => {
//         Promise.reject(error)
//     }
// )

setupInterceptorsTo(axios);

export default axios;
// use this axios instance anywhere in the system , which has custom config for request and response headers