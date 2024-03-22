import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableHighlight, Alert } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View className="flex-1 justify-between bg-blue-700">
      <Text className="text-white text-2xl mt-2 self-center" style={{marginTop:Constants.statusBarHeight}}>Mi primera APP :D!</Text>
      <View className="flex-1 justify-center items-center ">
        <TouchableHighlight
          activeOpacity={1}
          className="bg-red-500 py-2 px-4 rounded-lg items-center"
          onPress={() => {
            Alert.alert("Haz ganado :D!");
          }}>
          <Text className="text-white text-lg">Presioname</Text>
        </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
