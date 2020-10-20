import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
const Nosotros = (props) => {
  return (
    <View style={styles.contenedor}>
      <Text>Inicio works!!</Text>
      <Button
        title="Ir a Nosotros"
        onPress={() => {
          props.navigation.navigate('Nosotros');
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
