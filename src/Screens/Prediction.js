import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-picker';

export const Prediction = ({ route, navigation }) => {
    const { sourceType } = route.params;

    useEffect(() => {
        switch (sourceType) {
            case 0:
                ImagePicker.showImagePicker(options, res => {
                    const [mediaSource, setMediaSource] = useState();   
                    console.log('Response = ', res);

                    if (res.didCancel) {
                        console.log('Cancelled');
                    }
                    else if (res.error) {
                        console.log('Error: ', res.error);
                    }
                    else {
                        setMediaSource(res)
                    }
                });
            case 1:

            case 2:
        }
    })

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', padding: 8, right: 0 }}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Back</Text>
                </View>
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
                <Text>Canvas</Text>
            </View>
        </View>
    )
}
