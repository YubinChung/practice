import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'

class Test extends Component {
  render(){
    return (
      <View>
        <Text>This is {this.props.title } Component</Text>
      </View>
    )
  }
}

export default Test;
