import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <Image
            style={styles.imagem}
            source={{ uri: 'https://picsum.photos/400/250?1' }}
          />
          <Image
            style={styles.imagem}
            source={{ uri: 'https://picsum.photos/400/250?2' }}
          />
          <Image
            style={styles.imagem}
            source={{ uri: 'https://picsum.photos/400/250?3' }}
          />
          <Image
            style={styles.imagem}
            source={{ uri: 'https://picsum.photos/400/250?4' }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    height: 250,
    marginBottom: 20,
  },
});

export default App;