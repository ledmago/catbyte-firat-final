import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootPage from "./src/screens/Root"
import UserDetail from "./src/screens/UserDetail"
import AddUser from "./src/screens/AddUser"

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Root'>
            <Stack.Screen name="Root" component={RootPage} options={{ title: "Main Screen" }} />
            <Stack.Screen name="UserDetail" component={UserDetail} options={{ title: "User" }} />
            <Stack.Screen name='AddUser' component={AddUser} options={{ title: "Add User" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
}
