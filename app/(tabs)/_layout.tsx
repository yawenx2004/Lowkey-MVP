import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Dashboard"}} />
            <Tabs.Screen name="history" options={{ title: "History"}} />
            <Tabs.Screen name="contacts" options={{ title: "Contacts"}} />
            <Tabs.Screen name="chat" options={{ title: "Chat"}} />
            <Tabs.Screen name="settings" options={{ title: "Settings"}} />
        </Tabs>
    )
}