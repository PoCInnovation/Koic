import React ,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Video } from 'expo-av';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>KOIC</Text>
        <Video
          source={
            {uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', }
          }
          resizeMode="contain"
          shouldPlay
          useNativeControls
          style={{ width: "100%", height: "50%" }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default App;
