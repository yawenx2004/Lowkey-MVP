import { Stack } from "expo-router";

export default function RootLayout() {
  // TODO conditional rendering with AsyncStorage
  const hasOnboarded = false;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!hasOnboarded ? (
        <Stack.Screen name="onboarding" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
    </Stack>
  )
}
