import axios from "axios";
import { useState } from "react";
import axiosInstance from "../axios-instance";

function useQuery({url, options= {}}) {

    const [queryState, setQueryState] = useState({
        data: null,
        isLoading: false,
        error: null
    })

    async function fetchData() {
        setQueryState({
            data: null, isLoading: true, error: null
        });

        try{
            const response = await axiosInstance.get(url, options);
        }catch(e){

        }

    }

}