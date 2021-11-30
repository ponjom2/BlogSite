import React from "react";
import { Button, StyleSheet, Switch, Text, View, Model, ScrollView, Platfrom, SafeAreaView, TextInput } from "react-native";

const ContactComponent = () => {
    const [text1, onChangeText1] = React.useState("Usless Text");
    const [text2, onChangeText2] = React.useState("Usless Text");
    const [text3, onChangeText3] = React.useState("Usless Text");

    const [number1, onChangeNumber1] = React.useState(null);
    const [number2, onChangeNumber2] = React.useState(null);
    const [number3, onChangeNumber3] = React.useState(null);

    return (
        <View style={{ width: '25%', height: '50%', backgroundColor: 'white' }}>
            <View style={[styles.container, { flexDirection: "column" }]}>

                <Text>Contact Us</Text>

                <View style={{ flex: 1, borderWidth: 1, backgroundColor: "skyblue" }}>
                    <TextInput style={styles.input1} onChangeText2={onChangeNumber1} value={number1} placeholder="Enter your Name" keyboardType="numeric" />
                </View>

                <View style={{ width: 5, height: 5, backgroundColor: 'white' }} />


                <View style={{ flex: 1, borderWidth: 1, backgroundColor: "skyblue" }}>
                    <TextInput style={styles.input2} onChangeText2={onChangeNumber2} value={number2} placeholder="Enter a valid email address" keyboardType="numeric" />
                </View>

                <View style={{ width: 5, height: 5, backgroundColor: 'white' }} />

                <View style={{ flex: 1, borderWidth: 1, backgroundColor: "skyblue" }}>
                    <TextInput style={styles.input3} onChangeText3={onChangeNumber3} value={number3} placeholder="Enter your message" keyboardType="numeric" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
    },
    input1: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    input2: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    input3: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default ContactComponent;