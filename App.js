import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import SignIn from './components/SignIn';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app! Hi! hi!</Text>
      <SignIn />
      <StatusBar style="auto" />
    </View>
  );
}
