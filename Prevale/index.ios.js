'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

// Import the Map Container to load
import Map from './src/containers/Map';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

class Prevale extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          style={styles.container}
          navigationBarHidden = {true}
          initialRoute = {{
            title: 'Prevale',
            component: Map
          }}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Prevale', () => Prevale);
