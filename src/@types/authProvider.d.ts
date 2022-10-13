interface AuthProviderProps {
  children: React.ReactNode;
}

interface LoginPayload {
  password: string;
  email: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface UserAuth {
  id: number;
  email: string;
  name: string;
}

interface AuthProviderContextProps {
  authenticatedUser: userAuth;
  setAuthenticatedUser: (user: UserAuth) => void;
}
