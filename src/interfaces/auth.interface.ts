export interface User {
    id: string;
    userName: string;
    email: string;
    success: boolean
}

export interface AuthResponse {
  user?: User;
  success?: boolean;
  message?: string
}