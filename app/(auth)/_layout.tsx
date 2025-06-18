import { AuthProvider } from "@/src/contexts/AuthContext";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function AuthLayout() {
  return (
    <AuthProvider>
      <PaperProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </PaperProvider>
    </AuthProvider>
  );
}
