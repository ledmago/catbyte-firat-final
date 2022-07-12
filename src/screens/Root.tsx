import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { ADD_USER, SET_USER } from '../store/users.action';
import { useSelector, useDispatch } from 'react-redux'
import UserCard from "../Components/UserCard";
import axios from 'axios';
export default function RootPage(props: any) {

    const user = useSelector((state: any) => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = () => {
        axios.get('https://dummyjson.com/users')
            .then(res => {
                dispatch({ type: SET_USER, payload: res.data.users })
            })
            .catch(err => {
                console.log(err)
            }
            )
    }

    // dispatch({ type: SET_USER, payload: { name: 'John' } });
    console.log("user", user)
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlistStyle}
                data={user}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => <UserCard picture={item.image} username={item.username} age={item.age} />}
                keyExtractor={(item, index) => item?.id}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 150 }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',

    },
    flatlistStyle: {
        marginVertical: 20,
    }
});


