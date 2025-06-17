import Header from "@/src/components/Header";
import { AuthProvider } from "@/src/contexts/AuthContext";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function AuthLayout() {
  return (
    <AuthProvider>
      <PaperProvider>
        <Stack
          screenOptions={{
            header: () => <Header />,
          }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </PaperProvider>
    </AuthProvider>
  );
}
