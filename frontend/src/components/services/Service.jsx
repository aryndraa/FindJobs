import axios from "axios";

const api = axios.create({
    baseURL: "http://find-jobs.test:8000",
})

export const getServiceData = async (page, keyword, orderBy, orderDirection) => {
    try {
        const response = await api.get('/api/v1/user/service-management/', {
            params: {
                page,
                keyword,
                order_by: orderBy,
                order_direction: orderDirection
            },
        });

        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}



