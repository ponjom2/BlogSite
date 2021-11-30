import React, { useState } from 'react';
import { View, Text, TextInput, Button,} from 'react-native';
export default function App() {
    const [item, setItem] = useState('');
    const [value, setValue] = useState("Click here!");
    const greeting = () => {
        setValue("Enter your todo task:");
        
      };
    return ( 
        <View >
        
        <Text style={{fontSize:20}} onPress={greeting}>{value}</Text>
        
         <TextInput onChangeText = {
            (textValue) => {
                setItem(textValue);
            } 
        }
        style = {
            {
                borderBottomColor: 'black',
                backgroundColor: '#f4f4f4',
                margin: 10,
                width:280,
                height:30,
                padding:5
            }
        } >
        </TextInput> 

       
         <Button style={{width:270,
                height:30}} onPress = {
            () => {
                console.log('submit button pressed');
            }
        }
        title = "Submit" >
        </Button> 

        
    
       </View>
    );
}