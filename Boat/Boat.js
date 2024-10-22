// Boat/Boat.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Boat = ({ title, subtitle, year, icon_name, poster }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Icon name={icon_name} size={24} color="#B23B23" style={styles.icon} />
                <Text style={styles.title}>
                    {title} {year}
                </Text>
            </View>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
            <Image source={poster} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        marginRight: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    image: {
        width: 400,
        height: 600,
    },
});

export default Boat;
