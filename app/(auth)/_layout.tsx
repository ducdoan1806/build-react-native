import Header from "@/src/components/Header";
import { getToken } from "@/src/utils/storage";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";

export default function AuthLayout() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      if (!token) {
        router.replace("/login");
      }
    };
    checkAuth();
  }, []);
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}
