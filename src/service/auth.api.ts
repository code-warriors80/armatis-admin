import apiClient from "@/api/api-client";
import { AuthResponse, User } from "@/interfaces/auth.interface";


export const loginApi = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(`/auth/login`, { email, password });
  console.log(response)
  return response.data;
};

export const registerApi = async (userName: string, email: string, password: string): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(`/auth/register`, { userName, email, password });
  return response.data;
};

export const logoutApi = async (): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(`/auth/logout`);
  return response.data;
};

export const userProfileApi = async (): Promise<AuthResponse> => {
  const response = await apiClient.get<User>(`/user/single_user`);
  return response.data;
};

export const isAuthenticatedApi = async (): Promise<AuthResponse> => {
  const response = await apiClient.get<AuthResponse>(`/auth/is_authenticated`);
  return response.data;
}

export const sendVerifyAccountOtp = async (): Promise<AuthResponse> => {
  const response = await  apiClient.post<AuthResponse>(`/auth/`);
  return response.data;
}

export const verifyAccount = async (): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(`/auth/`);
  return response.data;
}

export const sendResetOtp = async (email: string): Promise<AuthResponse> => {
  const response = await apiClient.post(`/auth/`, { email });
  return response.data
}

export const resetPassword = async (email: string, otp: string, new_password: string)  => {
  const response = await apiClient.post(`/auth/`, {email, otp, new_password});
  return response.data
}
