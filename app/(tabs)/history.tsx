import { Text, View } from "react-native";
import styles from '../../styles/styles';

export default function History() {
  return (
    <View style={styles.screen}>
      <View style={styles.section}>
        <Text style={styles.h3}>Location History</Text>
        <Text>
          Placeholder. Here we will have a current location map 
          plus a timeline of previous locations.
        </Text>
        <Text>
          Q: How useful is the map to have? Might bog down runtime a bit for an MVP.
        </Text>
      </View>
    </View>
  );
}
