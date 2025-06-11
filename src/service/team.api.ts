/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "@/api/api-client";
import { ITeam } from "@/interfaces/team.interface";

export const addTeamApi = async (data: ITeam) => {
    const response = await apiClient.post('/team/add_member', data);
    return response.data 
}

export const fetchAllTeamMembersApi = async () => {
    const response = await apiClient.get('/team/');
    return response.data
}

export const fetchSingleMemberApi = async (id: string) => {
    const response = await apiClient.get(`/team/${id}`);
    return response.data 
}

export const editTeamMemberApi = async (id: string, data: ITeam) => {
    const response = await apiClient.put(`team/${id}`, data);
    return response.data 
}

export const deleteTeamMemberApi = async (id: string) => {
    const response = await apiClient.delete(`/team/${id}`);
    return response.data 
}