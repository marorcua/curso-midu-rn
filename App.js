import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Main from './components/Main.jsx'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// import icon from './assets/icon.png'

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style='light' />
        {/* <Image
          source={{
            uri: 'https://www.metacritic.com/a/img/resize/6bc917bb89dedf461a3ebddcde5cc3ed9884b7f4/hub/2024/06/27/18829905-76d2-41af-bc62-1b67e7cd7574/shirenthewandererserpentcoilisland.jpg?auto=webp&width=1092',
          }}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text style={{ color: 'white' }}>
          Open up App.js to start working on your app!
        </Text>
        <Button title='Hello pulsa' onPress={() => alert('has pulsado')} /> */}
        {/* <TouchableOpacity
          // underlayColor={'#09f'}
          style={{
            borderRadius: 10,
            backgroundColor: '#09f',
            height: 50,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => alert('has pulsado el nuevo boton')}
        >
          <Text style={{ color: 'white' }}>Presiona nuevo boton</Text>
        </TouchableOpacity> */}

        <Main />
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 30,
  },
})
