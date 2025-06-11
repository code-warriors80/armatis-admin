import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify/unstyled';

// Define user type
interface User {
  id: string;
  name: string;
  email: string;
}

// Define context type
interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider props
interface AuthProviderProps {
  children: ReactNode;
}

// Provider
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('authUser');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/login', { email, password });
      const { user, token } = response.data;

      setUser(user);
      setToken(token);
      localStorage.setItem('authUser', JSON.stringify(user));
      localStorage.setItem('authToken', token);
    } catch (err: unknown) {
      let errorMessage = 'An unexpected error occurred.';
    
      const axiosError = err as AxiosError<{ message: string }>;
      if (axiosError.response?.data?.message) {
        errorMessage = axiosError.response.data.message;
      }
    
      setError(errorMessage);
      toast.error(errorMessage);
    }
    
  }; 
  
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authUser');
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Optional: Custom hook to access auth context safely
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

