import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../styles/styles';

export default function Login() {
    const router = useRouter();

    const handleLogin = async () => {
        router.replace('/');
    }

    return (
        <View style={[styles.screen, styles.loginScreen]}>
            <Pressable 
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    );
}