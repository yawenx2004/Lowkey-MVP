import { Text, View } from "react-native";
import styles from '../../styles/styles';

export default function Dashhoard() {
  return (
    <View style={styles.screen}>
      <View style={styles.section}>
        <Text style={styles.h2}>Lowkey, Smart Protection Dashboard</Text>
        <Text style={styles.text}>Monitor your location status and care circle.</Text>
      </View>

      <View style={styles.sectionOutlined}>
        <Text style={styles.h3}>User Profile</Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Name: </Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Username: </Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Email: </Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Phone: </Text>
        </Text>
      </View>

      <View style={styles.sectionOutlined}>
        <Text>placeholder</Text>
      </View>

      <View style={styles.sectionOutlined}>
        <Text>placeholder</Text>
      </View>
    </View>
  );
}
