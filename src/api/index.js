import axios from 'axios'

const api = axios.create({
    baseURL: 'https://quintadb.com/apps/dcHua0smniW5HKE8kWWPX5/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getNotes = async () => {
    const response = await api.get(`dtypes/entity/cdW5P5t8jdWPv0qcOBW6Xh.json`,{
        params:{
            "rest_api_key": "dcHSoaeSjok4ydW6hcPSkU",
        }
    });
    return response.data;
}

export const getNote = async (id) => {
    const response = await api.get(`dtypes/${id}.json`,{
        params:{
            "rest_api_key": "dcHSoaeSjok4ydW6hcPSkU",
        }
    });
    return response.data;
}

export const deleteNote = async (id) => {
    const response = await api.delete(`dtypes/${id}.json`,{
        params:{
            "rest_api_key": "dcHSoaeSjok4ydW6hcPSkU",
        }
    });
    return response.data;
}
export const createNote = async (values) => {
    const response = await api.post(`dtypes.json`,{
        "values":{"entity_id" : "cdW5P5t8jdWPv0qcOBW6Xh", "ddL8kDDbTdHiJcHwqsW5a9":values.title, "ddQSoRgsrdLzaYWPddPKnn":values.text}
    },{
        params:{
            "rest_api_key": "dcHSoaeSjok4ydW6hcPSkU",
        }
    });
    return response.data;
}
export const updateNote = async (values, id) => {
    const response = await api.put(`dtypes/${id}.json`,{
        "values":{"ddL8kDDbTdHiJcHwqsW5a9":values.title, "ddQSoRgsrdLzaYWPddPKnn":values.text}
    },{
        params:{
            "rest_api_key": "dcHSoaeSjok4ydW6hcPSkU",
        }
    });
    return response.data;
}
