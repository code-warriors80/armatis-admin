/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "@/api/api-client";
import { IProduct } from "@/interfaces/product.interface";

export const addProductApi = async (data: IProduct) => {
    const response = await apiClient.post('/product/add_product', data);
    return response.data
} 

export const getAllProductsApi = async () => {
    const response = await apiClient.get('/product/');
    return response.data
} 

export const getSingleProductApi = async (id: string) => {
    const response = await apiClient.get(`/product/${id}`);
    return response.data
} 

export const editSingleProductApi = async (id: string, data: IProduct) => {
    const response = await apiClient.put(`/product/${id}`, data);
    return response.data
} 

export const deleteSingleProductApi = async (id: string) => {
    const response = await apiClient.delete(`/product/${id}`);
    return response.data
} 
