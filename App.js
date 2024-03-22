import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-300">
      <View className="bg-red-700 p-20 rounded-lg shadow-lg"/>
      <StatusBar style="auto" />
    </View>
  );
}
