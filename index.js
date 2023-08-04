import {AppRegistry} from 'react-native';
import App from './App';
import { NavigationContainer } from '@react-navigation/native';
import {name as appName} from './app.json';

const Root=()=>{
    return(
        <NavigationContainer>
            <App/>
        </NavigationContainer>
    )
}

AppRegistry.registerComponent(appName, () => Root);