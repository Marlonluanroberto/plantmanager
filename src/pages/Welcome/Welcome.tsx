import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './Styles';
import wateringImg from '../../assets/watering.png';

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>


            <Image source={wateringImg} style={styles.image} />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembra você sempre que precisar.
            </Text>

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}>

                <Text style={styles.buttonText}>
                    Avançar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


export default Welcome;