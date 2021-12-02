import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import MoreInfo from "./MoreInfo";

//CustomCompo - Henrik Andersson (Grupp 6)

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<View style={styles.container}>

			< Text style={styles.header} >Contact Us</Text >
			<View style={styles.section}>

				<View style={styles.border}>
					<TextInput placeholder="Name:" style={styles.textInput} onChangeText={setName} />
				</View>

				<View style={styles.border}>
					<TextInput placeholder="Email:" style={styles.textInput} onChangeText={setEmail} />
				</View>

				<View style={styles.border}>
					<TextInput placeholder="Message:" style={styles.textInput} onChangeText={setMessage} />
				</View>
				<View style={styles.button}>
					<Button title="Submit" color="#d09e90" onPress={() => { console.log("Name: " + name + "\n" + "Email: " + email + "\n" + "Message: " + message) }} />
				</View>

				<MoreInfo />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "auto",
		alignItems: "center",
		justifyContent: "center",
	},

	header: {
		fontSize: 24,
		textAlign: "center",
		marginTop: 20,
		color: "#d09e90",
		fontWeight: "600",
	},

	section: {
		width: "70%",
		height: "auto",
		marginTop: 5,
		marginBottom: 20,
		padding: 10,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "#514F59",
		justifyContent: "space-between",
	},

	border: {
		marginBottom: 8,
	},

	textInput: {
		width: "100%",
		height: 25,
		backgroundColor: "#fff",
		padding: 5,
		borderRadius: 5,
	},

	button: {
		marginBottom: 5,
	}
});

export default Contact;