import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

// Navigation Buttons Imports
import Home from '../navigations/HomeScreen';
import Feature from '../navigations/AudioScan';
import Settings from '../navigations/SettingsScreen';

// Assets Imports
import HomeIcon from '../assets/HomeIcon.png';
import FilesIcon from '../assets/FilesIcon.png';

// Feature Imports
import RecordAudio from '../features/RecordAudio';
import UploadAudio from '../features/UploadAudio';
import AudioAnalysis from '../features/AudioAnalysis';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FeatureStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="RecordAudio" component={RecordAudio} options={{ headerShown: false }} />
        <Stack.Screen name="UploadAudio" component={UploadAudio} options={{ headerShown: false }} />
        <Stack.Screen name="AudioAnalysis" component={AudioAnalysis} options={{ headerShown: false }} />
    </Stack.Navigator>
);

const LandingPage = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 50,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    elevation: 50,
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={HomeIcon} style={{ tintColor: color, width: size, height: size}} />
                    ),
                }}
            />
            <Tab.Screen
                name="Feature"
                component={FeatureStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={FeatureIcon} style={{ tintColor: color, width: size, height: size }} />
                    )
                }}
            />
            <Tab.Screen
                name='Files'
                component={Files}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image source={FilesIcon} style={{ tintColor: color, width: size, height: size }} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default LandingPage;