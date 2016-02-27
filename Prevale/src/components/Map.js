import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Map extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>PREVALE</Text>
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
  }
});

export default Map;
