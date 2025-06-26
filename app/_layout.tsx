import { Stack } from "expo-router";

export default function RootLayout() {
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
