import { Stack } from "expo-router";

const homeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" />
    </Stack>
  );
};
export default homeLayout;
