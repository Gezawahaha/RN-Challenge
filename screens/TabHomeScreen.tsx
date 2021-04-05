import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
//import SearchBar from '../components/SearchBar';
import { SearchBar } from 'react-native-elements';
import { Text, View } from '../components/Themed';
import Search from '../components/Search';
import moment from 'moment';


export default function TabHomeScreen() {

const DataDate = [
    '1','2','3','4','5'
];

  return (
    <View >
        <View style={styles.container}>
            <View style={styles.wrapperTitle}>
                <Text style={styles.greating} >Hey There !</Text>
                <Text style={styles.title} >Welcome Back</Text>
                <Text style={styles.date} >{moment().format('dddd, Do MMMM')}</Text>
                <Search />
            </View>
            <Text>{DataDate}</Text>
        </View>

        <View>
            <Text>Today Task</Text>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4263EC',
        height: 318,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    wrapperTitle: {
        marginTop:50,
        margin:10,
        backgroundColor: '#4263EC',
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    greating: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        padding: 5
    },
    date: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        padding: 5
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
