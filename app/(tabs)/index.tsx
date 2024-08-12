import { useEffect, useState } from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebView } from 'react-native-webview';


export default function HomeScreen() {

  const [value, setValue] = useState("");

  useEffect(() => {
    AsyncStorage.getItem('environtment').then((v: any) => setValue(v));
  }, [])


  return (
    <SafeAreaView style={{ padding: 20 }}>
      {/* <Text style={{ textAlign: 'center' }}>Click button to set Async Storage</Text> */}
      {/* <Button title='Set Async Storage' onPress={() => { */}
      {/*   AsyncStorage.setItem('environtment', 'React Native') */}
      {/* }} /> */}
      {/* <Text>Value in async storage is: <Text style={{ fontSize: 18, fontWeight: 600 }}>{value}</Text> </Text> */}


      <WebView source={{ html: '<h1>Hello world</h1>' }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
