import React from 'react';
import {
     View,
     Text,
     StyleSheet,
     TouchableOpacity,
     ScrollView,
     } from 'react-native';

     import {AntDesign} from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal = {true} showsHorizontalScrollIndicator = {false}>

    <TouchableOpacity style={styles.actionsButon}>
        <View style={styles.areaButton}>
            <AntDesign name="addfolder" size={30} color="#000" />
        </View>
        <Text style={styles.labelButtom}>entradas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionsButon}>
        <View style={styles.areaButton}>
            <AntDesign name="tagso" size={30} color="#000" />
        </View>
        <Text style={styles.labelButtom}>compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionsButon}>
        <View style={styles.areaButton}>
            <AntDesign name="creditcard" size={30} color="#000" />
        </View>
        <Text style={styles.labelButtom}>carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionsButon}>
        <View style={styles.areaButton}>
            <AntDesign name="barcode" size={30} color="#000" />
        </View>
        <Text style={styles.labelButtom}>boletos</Text>
    </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight:89,
        marginBottom:14,
        marginTop:18,
        paddingEnd:14,
        paddingStart:25
    },
    actionsButon:{
        alignItems:'center',
        marginRight:50,
    },
    areaButton:{
        backgroundColor:'#ecf0f1',
        height:60,
        width:60,
        borderRadius:60,
        alignItems:'center',
        justifyContent:'center'
    },
    labelButtom:{
      marginTop:9,
      textAlign:'center',
      fontWeight:'bold',
    }
})