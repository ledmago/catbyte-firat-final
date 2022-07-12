import React from 'react';
import { Text } from 'react-native'
import { connect } from 'react-redux';
import { ADD_USER, SET_USER } from '../store/users.action';
import { useSelector, useDispatch } from 'react-redux'
export default function RootPage(props: any) {

    const user = useSelector((state: any) => state.users.users);
    const dispatch = useDispatch();
    // dispatch({ type: SET_USER, payload: { name: 'John' } });
    return (
        <>
            <Text>Selamlar</Text>
        </>
    )

}

