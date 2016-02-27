import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

class Map extends Component {

  handleInputChange(fieldName, event) {
    var { updateLoginInputText } = this.props;
    updateLoginInputText(fieldName, event.nativeEvent.text);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>PREVALE</Text>
        <TextInput
          style = {styles.textInput}
          defaultValue = {"Name"}
          onChange = { this.handleInputChange.bind(this, 'name')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00D3A3'
  },
  textInput: {
    height: 50,
    width: 300,
    padding: 4,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: 'white',
    alignSelf: 'center'
  }
});

export default Map;
