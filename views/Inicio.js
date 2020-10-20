import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Inicio = (props) => {
  const informacion = {
    clienteId: 20,
    totalpagar: 500,
  };

  return (
    <View style={styles.contenedor}>
      <Text>Inicio works!!</Text>
      <Button
        title="Ir a Nosotros"
        onPress={() => {
          props.navigation.navigate('Nosotros', informacion);
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
export default Inicio;
