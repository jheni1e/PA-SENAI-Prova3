import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/menu.png')} style={styles.image} />

        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.textButton}>Studying</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.timerCircle}>
          <Image source={require('../assets/images/timer.png')} style={styles.image} />
        </View>
      </View>

      <View style={styles.center}>
        <Text style={styles.title}>Timer Mode</Text>
        <Image source={require('../assets/images/ghibli-girl.jpg')} style={styles.mainImage} />

        <Text style={styles.timer}>01:00:00</Text>
        <Image source={require('../assets/images/bar.png')} style={styles.barImage} />

      </View>
      <View style={styles.footer}>
        <View style={styles.minorCircle}>
          <Image source={require('../assets/images/notebook.png')} style={styles.image2} />
        </View>

        <View style={styles.mainCircle}>
          <Text style={styles.text2}>FOCUS</Text>
        </View>

        <View style={styles.minorCircle}>
          <Image source={require('../assets/images/note.png')} style={styles.image2} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE5DF',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  header: {
    width: '90%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 45,
    paddingLeft: 20,
    flexDirection: 'row',
    marginLeft: 10
  },
  footer: {
    width: '90%',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 70,
  },
  title: {
    color: '#706b64',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 40,
  },
  timer: {
    color: '#706b64',
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 30
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'monospace',
    color: '#000000',
  },
  text2: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'monospace',
    color: '#f9f7f2',
    marginTop: 32
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
    height: 35,
    borderWidth: 2,
    borderColor: '#d6ccc2',
    borderRadius: '3rem',
    color: '#d6ccc2',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'monospace',
    color: '#a89787',
  },
  image: {
    width: 20,
    height: 20,
    marginTop: 4
  },
  image2: {
    width: 30,
    height: 30,
    marginTop: 8
  },
  mainImage: {
    width: 230,
    height: 230,
    alignSelf: 'center',
    borderRadius: '1rem',
  },
  barImage: {
    width: 300,
    height: 30,
    marginTop: -30
  },
  mainCircle: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    backgroundColor: '#e3d5ca',
    color: '#ffffff',
    marginTop: 50,
    marginBottom: 50,
  },
  timerCircle: {
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#d5bdaf',
    borderRadius: '50%',
  },
  minorCircle: {
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#d5bdaf',
    borderRadius: '50%',
  }
})