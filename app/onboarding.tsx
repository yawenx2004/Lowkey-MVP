import { Text, View, Pressable, Image, Alert } from "react-native";
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

export default function Onboarding() {
  const router = useRouter(); 

  const handleGetStarted = async () => {
    // save to async storage
    try {
      await AsyncStorage.setItem('hasOnboarded', 'true');
      router.replace('/');
    } catch {
      Alert.alert('Error getting started');
    }

  }

  return (
    <View style={[styles.screen, styles.onboarding]}>
      <View style={styles.section}>
        <Image 
          source={require('../assets/images/logo.png')}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.titleText}>Smart Wellness Alerts and Support</Text>
        <Text style={styles.centeredText}>
          Welcome to Lowkey support and connection. 
          Lowkey sends proactive alerts when something 
          is off to you and your people so you know 
          when to lean in without waiting for a crisis.
        </Text>
      </View>

      <View style={styles.section}>
        <Pressable 
          style={styles.button}
          onPress={handleGetStarted}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>988 Crisis Line</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>911 Emergency</Text>
        </Pressable>
      </View>
    </View>
  );
}
