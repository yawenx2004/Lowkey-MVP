import { Text, View, Pressable, ScrollView } from "react-native";
import styles from '../../styles/styles';

export default function Dashhoard() {

  // dummy info
  // TODO later pull from backend
  const dummyInfo = {
    "name": "Jonah",
    "username": "diluvii",
    "email": "placeholder@gmail.com",
    "phone": "(510) 598-7196",
    "alertThreshold": "48 hours",
    "alertToSelf": "enabled",
  }

  // TODO functions for all these buttons
  
  return (
    <ScrollView style={styles.scroll}>
    <View style={styles.screen}>
      <View style={styles.section}>
        <Text style={styles.h2}>Lowkey, Smart Protection Dashboard</Text>
        <Text style={styles.text}>Monitor your location status and care circle.</Text>
      </View>

      <View style={styles.sectionOutlined}>
        <Text style={styles.h3}>User Profile</Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Name: </Text>
          <Text>{dummyInfo.name}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Username: </Text>
          <Text>{dummyInfo.username}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Email: </Text>
          <Text>{dummyInfo.email}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Phone: </Text>
          <Text>{dummyInfo.phone}</Text>
        </Text>
      </View>

      <View style={styles.sectionOutlined}>
        <Text style={styles.h3}>Location Status</Text>
        <Text style={styles.text}>Passive location monitoring is active.</Text>
      </View>

      <View style={styles.sectionOutlined}>
        <Text style={styles.h3}>Care Circle</Text>
        <Text style={styles.text}>No one added to your care circle yet.</Text>
        <Pressable
          style={({ pressed }) => [
            styles.button2,
            pressed && styles.button2Pressed
          ]}
        >
          <Text style={styles.button2Text}>Add Contacts</Text>
        </Pressable>
      </View>

      <View style={styles.sectionOutlined}>
        <Text style={styles.h3}>Alert Settings</Text>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Alert Threshold: </Text>
          <Text>{dummyInfo.alertThreshold}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Alert to Self: </Text>
          <Text>{dummyInfo.alertToSelf}</Text>
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.button2,
            pressed && styles.button2Pressed
          ]}
        >
          <Text style={styles.button2Text}>Update Setting</Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
}
