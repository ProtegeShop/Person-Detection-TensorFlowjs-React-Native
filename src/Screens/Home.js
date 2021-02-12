// Detection source options
// Select Image
// Select Video
// Use Web Cam

import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.buttonWrapper}>
                <View style={{ maxWidth: 300, marginBottom: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>View number of persons in an Image, Video or WebCame.</Text>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '200' }}> Select an option below to view predictions.</Text>
                </View>

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Prediction', { sourceType: 0 })}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>Select an Image</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Prediction', { sourceType: 1 })}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>Select a Video</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('Prediction', { sourceType: 2 })}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.text}>Use Device Camera</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        flexDirection: 'column',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 8,
        height: 40,
        width: 200,
        marginVertical: 4
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    }
});
