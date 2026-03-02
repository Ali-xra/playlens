import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, User } from '../types';
import { MOCK_USERS } from '../mocks/mockData';

interface AuthContextType extends AuthState {
  login: (email: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  // Simulate checking for an existing session on load
  useEffect(() => {
    const checkSession = async () => {
      const storedUser = localStorage.getItem('playlens_user');
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          setState(prev => ({ ...prev, user, isAuthenticated: true, isLoading: false }));
        } catch (e) {
          localStorage.removeItem('playlens_user');
          setState(prev => ({ ...prev, isLoading: false }));
        }
      } else {
        setState(prev => ({ ...prev, isLoading: false }));
      }
    };
    checkSession();
  }, []);

  const login = async (email: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 800));

    const user = MOCK_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (user) {
      localStorage.setItem('playlens_user', JSON.stringify(user));
      setState({
        user: user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } else {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Invalid credentials. Try parent@playlens.com',
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem('playlens_user');
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
