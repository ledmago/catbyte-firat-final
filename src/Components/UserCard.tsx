import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

interface UserCardIProps {
    picture: string;
    username: string;
    age: number;
}

export default function RootPage(props: UserCardIProps) {
    const navigation: any = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.push("UserDetail", { username: props.username, age: props.age, picture: props.picture })}>
            <ImageBackground source={{ uri: props.picture }} style={{ width: '100%', height: '100%', }} resizeMode='contain'>
                <View style={styles.overlay}>
                    <Text style={styles.username}>{props.username}</Text>
                    <Text style={styles.age}>{props.age}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '48%',
        borderRadius: 8,

        marginVertical: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -1, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,

    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    username: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    },
    age: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold'
    }

});


