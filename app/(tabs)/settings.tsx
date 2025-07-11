import { Text, View, Pressable, Alert } from "react-native";
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/styles';

export default function Settings() {
  const router = useRouter(); 

  // TODO confirm logout with an alert first
  const handleLogout = async () => {
    // save to async storage
    try {
      await AsyncStorage.setItem('hasOnboarded', 'false');
      router.replace('/onboarding');
    } catch {
      Alert.alert('Error saving data');
    }
  }

  return (
    <View style={styles.screen}>
      <Pressable
        style={({ pressed }) => [
          styles.button3,
          pressed && styles.button3Pressed,
        ]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}
