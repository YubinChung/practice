import React from 'react'; // react import
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// Text: label
// https://facebook.github.io/react-native/docs/getting-started.html doc의 component 중요하다!!

import Test from './components/Test'; // Test 임포트
import Button from './components/Button'; // Button 임포트 
import Timer from './components/Timer'; // Button 임포트 
import Provider from 'react-redux'
import Store from './store.js'



const {width, height } = Dimensions.get('window');

// import {IonIcons} from 'expo ........ ' 

//import { Linking } from 'react-native';
//Linking.openURL('https://expo.io/--/to-exp/exp%3A%2F%2Fab-idq.cindy79.meth-testing-mobile.exp.direct%3A80');


class App extends React.Component {
  // App.js 모든걸 연결하고 배포시킬 때 합쳐지는 애 .
  render() {
    return (
      // View = div
      // Text = label
      <Provider store={store}>
      <View style={styles.container}>
          <View style={styles.center}>
            <Text style={styles.text}>Welcome to Timer</Text>
            <Timer />
              <View style={styles.button_wrap}>
                <Button title="Play" />
                <Button title="Stop" />
              </View>
          </View>
          
        </View>
        </Provider>
    );
  }
}

store.subscribe(() =>
console.log(store.getState())
)

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#581845'
  },
  container: {
    flex: 1,
    backgroundColor: '#900C3F',
    alignItems: 'center',
    justifyContent: 'center',
    width: width
  },
  center: {
    justifyContent:'center',
    alignItems:'center',
    height:height / 3,
    backgroundColor: '#ffc107',
    width:width-40,
    borderRadius:25,
    padding:10
  },
  text:{
    color: '#ffffff'
  },
  button_wrap: {
    flex:4,
    flexDirection:'row',
    justifyContent:'space-around',
    flexGrow: 2
  }
});


export default App;
// export 는 맨 마지막에.
// redux 붙으면 export default (null, null) (App) 이런식으로 되니까 맨 밑으로 넣는다.
