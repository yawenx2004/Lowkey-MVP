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
            <View style={styles.sectionOutlined}>
                <Text style={[styles.h3, styles.centeredText]}>Meet L Support App</Text>
                <Text style={[styles.text, styles.centeredText]}>
                    When wellness falls outside of your typical range, 
                    L Support App nudges you to get back on track and 
                    gets you help when you choose.
                </Text>
                <Text style={[styles.subtitle, styles.centeredText]}>Stay connected. Stay protected.</Text>
                <Pressable 
                    style={({ pressed }) => [
                        styles.button3,
                        pressed && styles.button3Pressed,
                    ]}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
}