/**
 * @format
 */

import {AppRegistry} from 'react-native';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
