import axios from 'axios'
import {text, status, title, entity_id, API_KEY, baseURL} from "../model";

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getNotes = async () => {
    try{
        const response = await api.get(`dtypes/entity/cga1BcJSnoayLFWPbuW4zD.json`,{
            params:{
                "rest_api_key": API_KEY,
            }
        });
        return response.data;
    } catch (error){
        console.error("Error getNotes", error);
        throw error;
    }

};

export const getNote = async (id) => {
    try {
        const response = await api.get(`dtypes/${id}.json`, {
            params: {
                "rest_api_key": API_KEY,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error getNote", error);
        throw error;
    }
};

export const deleteNote = async (id) => {
    try{
        const response = await api.delete(`dtypes/${id}.json`,{
            params:{
                "rest_api_key": API_KEY,
            }
        });
        return response.data;
    } catch (error){
        console.error("Error deleteNote", error);
        throw error;
    }
}

export const createNote = async (values) => {
    try{
        const response = await api.post(`dtypes.json`,{
            "values":{"entity_id" : entity_id, [title] :values.title, [text]:values.text, [status]:values.status}
        },{
            params:{
                "rest_api_key": API_KEY,
            }
        });
        return response.data;
    } catch (error){
        console.error("Error createNote", error);
        throw error;
    }
};

export const updateNote = async (values, id) => {
    try{
        const response = await api.put(`dtypes/${id}.json`,{
            "values":{[title] :values.title, [text]:values.text, [status]:values.status}
        },{
            params:{
                "rest_api_key": API_KEY,
            }
        });
        return response.data;
    } catch (error){
        console.error("Error updateNote", error);
        throw error;
    }
};
