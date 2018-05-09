import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actionTimer } from '../../reducer';


const {width, height } = Dimensions.get('window');
// 리덕스 사용시 8-90%는 const 로 사용한다. 값이 변경 안될 것들.

class Timer extends Component {
    render(){
        return (
            <View>
                <Text style={styles.text}>00:00</Text>
            </View> 
        )
    }

    _test = () => {
        alert('hi')
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        fontSize: 60,
        padding: 10,
        textAlign: 'center'
    }
  });

function mapStateToProps(state) {
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}


function mapDispatchToProps(dispatch) {
    return {
        startTimer : bindActionCreators(actionTimer.startTimer, dispatch),
    }
}

export default Timer;