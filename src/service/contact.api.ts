import apiClient from "@/api/api-client";

export const fetchAllMessagesApi = async () => {
    const response = await apiClient.get('/contact/');
    return response.data
}

export const fetchSingleMessagesApi = async (message_id: string) => {
    const response = await apiClient.get(`/contact/${message_id}`);
    return response.data
}

export const fetchEmailMessagesApi = async (email: string) => {
    const response = await apiClient.get(`/contact/${email}`);
    return response.data
}