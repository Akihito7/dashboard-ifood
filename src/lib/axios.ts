import { AppError } from "@/utils/app-error";
import axios from "axios";

export const apiDashboard = axios.create({
    baseURL: "http://localhost:3333/api"
});


apiDashboard.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if(error.response && error.response.data && error.response.data.message){
            return Promise.reject(new AppError(error.response.data.message, error.response.status))
        }
        else {
            return Promise.reject(new AppError("INTERNAL ERROR SERVER", 500))
        }
    }
);
