import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const Nosotros = (props) => {
  return (
    <View style={styles.contenedor}>
      <Text>Nosotos works!!</Text>
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
