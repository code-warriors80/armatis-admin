import apiClient from "@/api/api-client";

export const fetchAllSubscribersApi = async () => {
    const response = await apiClient.get('/newsletter/');
    return response.data
} 