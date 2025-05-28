/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "@/api/api-client";
import { IService } from "@/interfaces/service.interface";

interface Service { 
  title: string; description: string;
}

interface AddServicePayload {
  category: string;
  services: Service[];
}

export const addServiceApi = async (data: AddServicePayload) => {
  const response = await apiClient.post('/service/', data);
  return response.data;
}

export const getAllServicesApi = async () => {
  const response = await apiClient.get('/service/');
  return response.data;
}

export const getSingleServiceApi = async (id: string) => {
  const response = await apiClient.get(`/service/${id}`);
  return response.data;
}

export const editSingleServiceApi = async (id: string, data: IService) => {
  const response = await apiClient.put(`/service/${id}`, data);
  return response.data;
}

export const deleteSingleServiceApi = async (id: string) => {
  const response = await apiClient.delete(`/service/${id}`);
  return response.data;
}
