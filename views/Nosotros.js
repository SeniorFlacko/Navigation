import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Nosotros = (props) => {
  const {clienteId, totalpagar} = props.route.params;
  return (
    <View style={styles.contenedor}>
      <Text>Cliente Id: </Text>
      <Text>{clienteId}</Text>
      <Text>Total a Pagar: </Text>
      <Text>{totalpagar}</Text>
      <Button
        title="Volver"
        onPress={() => {
          props.navigation.navigate('Inicio');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Nosotros;
