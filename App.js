import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti';
import { StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <MotiView style={styles.container}
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: 'timing',
      }}
    >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
