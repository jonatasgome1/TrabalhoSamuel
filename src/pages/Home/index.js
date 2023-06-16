 
import Actions from '../../components/Actions';
import Movements  from '../../components/Movements';
import Balance from '../../components/Balance';
import Header   from '../../components/Header';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';

const list = [
{  id: 1,
  label: 'boleto conta luz',
  value: '300,50',
  date: '1/8/2022',
  type: 0 // despesas

},{
  id: 2,
  label: 'pix',
  value: '1.500,00',
  date: '04/09/2022',
  type: 1// receita

},{
  id: 2,
  label: 'salário',
  value: '3.500,00', 
  date: '12/09/2022',
  type: 1  // receita

}

]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name= "jonatas gomes"/>
        
        <Balance saldo="2.350,00" gastos="-135,00"/>

        <Actions/>

        <Text style={styles.title}>Últimas Movimentações</Text>
        <FlatList
        style={styles.List}
        data={list}
        keyExtractor={(item) => String (item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item}/>}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }, 
  title: {
    fontSize:18,
    fontWeight:'bold',
   margin:14,



  },
  List:{
    marginStart: 14,
    marginEnd: 14
  }
});
