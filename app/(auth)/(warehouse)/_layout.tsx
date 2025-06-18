import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function WarehouseLayout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="nhapkho" />
        <Stack.Screen name="kitting-material" />
      </Stack>
    </PaperProvider>
  );
}
