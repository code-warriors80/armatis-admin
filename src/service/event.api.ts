/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "@/api/api-client";
import { IEvent } from "@/interfaces/event.interface";


export const addEventApi = async (data: IEvent) => {
  const response = await apiClient.post('/event/add_event', data);
  return response.data;
}

export const getAllEventsApi = async () => {
  const response = await apiClient.get('/event/');
  return response.data;
}

export const getSingleEventApi = async (id: string) => {
  const response = await apiClient.get(`/event/${id}`);
  return response.data;
}

export const editSingleEventApi = async (id: string, data: IEvent) => {
  const response = await apiClient.put(`/event/${id}`, data);
  return response.data;
}

export const deleteSingleEventApi = async (id: string) => {
  const response = await apiClient.delete(`/event/${id}`);
  return response.data;
}
