import { ThemeProvider } from "@rneui/themed";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  console.log("root layout");

  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
