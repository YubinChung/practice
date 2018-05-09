import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

// Touchable 시리즈가 몇개 있다. button 안쓰고 이거로 씀. 

const {width, height } = Dimensions.get('window');
// 리덕스 사용시 8-90%는 const 로 사용한다. 값이 변경 안될 것들.

class Button extends Component {
    render(){
        return (
            <View style={styles.container}>
             <TouchableOpacity style={styles.bg} onPressOut={this._test}>
                <Text style={styles.text}>{this.props.title}</Text>
              </TouchableOpacity>
            </View>
              // 화살표 함수 : 익명함수
                // onPress 보다 onPressOut 을 써라
        )
    }

    _test = () => {
        alert('hi')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between'
    },
    bg: {
      backgroundColor: '#c70039',
    //   width: (width / 3 ) ,
      marginHorizontal: 10, // 좌우
      marginVertical : 0,  // 상하,
      backgroundColor: '#fff',
      // 안드로이드랑 아이오에스 css 서로 안먹는게 다름.. 
    },
    text: {
        color: '#c70039',
        fontSize: 30,
        padding: 20,
        textAlign: 'center'
    }
  });

export default Button;