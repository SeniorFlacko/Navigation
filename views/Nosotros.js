import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
const Nosotros = (props) => {
  return (
    <View style={styles.contenedor}>
      <Text>Nosotos works!!</Text>
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
