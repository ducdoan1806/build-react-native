import { useRouter } from "expo-router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../api/api";
import { User } from "../types/User";
import { deleteToken, getToken } from "../utils/storage";

type AuthContextType = {
  user: User | null;
  loading: boolean;
};
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchUser = async (token: string) => {
    try {
      const res = await api.get<User>("/epi/user/", {
        headers: { Authorization: token },
      });
      setUser(res.data);
    } catch (error) {
      console.error("Failed fetch user:", error);
      await deleteToken();
      setUser(null);
      router.replace("/login");
    }
  };

  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (!token) {
        router.replace("/login");
        setLoading(false);
        return;
      }
      await fetchUser(token);
      setLoading(false);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
