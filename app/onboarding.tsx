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
      router.replace('/login');
    } catch {
      Alert.alert('Error getting started');
    }

  }

  return (
    <View style={[styles.screen, styles.onboarding]}>
      <View style={[styles.section, styles.sectionNarrow, styles.sectionCentered, styles.sectionOnboarding]}>
        <Image 
          source={require('../assets/images/logo.png')}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
        <Text style={[styles.h1, styles.centeredText]}>Smart Wellness Alerts and Support</Text>
        <Text style={[styles.textLarge, styles.centeredText]}>
          Welcome to Lowkey support and connection. 
          Lowkey sends proactive alerts when something 
          is off to you and your people so you know 
          when to lean in without waiting for a crisis.
        </Text>
      </View>

      <View style={[styles.section, styles.sectionCentered, styles.sectionOnboarding]}>
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            styles.buttonGetStarted,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleGetStarted}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>

      <View style={[styles.section, styles.sectionOnboarding]}>
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>988 Crisis Line</Text>
        </Pressable>

        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>911 Emergency</Text>
        </Pressable>
      </View>
    </View>
  );
}
