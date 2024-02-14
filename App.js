import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    {/* Title Text */}
    <Text style={styles.title}>Text to image</Text>

    {/* First Row */}
    <View style={styles.row}>
      <View style={styles.card}>
        <Image source={require('./assets/house1.jpg')} style={styles.imageStyle} />
      </View>
      <View style={styles.card}>
        <Image source={require('./assets/house.jpeg')} style={styles.imageStyle} />
      </View>
    </View>

    {/* Second Row */}
    <View style={styles.row}>
      <View style={styles.card}>
        <Image source={require('./assets/housenew1.jpg')} style={styles.imageStyle} />
      </View>
      <View style={styles.card}>
        <Image source={require('./assets/design.jpg')} style={styles.imageStyle} />
      </View>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
     paddingBottom:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
    marginTop:10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15, // Adjust padding as needed
    marginTop: 20, // Consider safe area insets for devices with notches
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    width: '100%', 
    marginBottom: 40, 
  },
  card: {
    marginHorizontal: 10, // Add horizontal margin to separate cards within a row
    width: 160, // Adjusted width
    height: 200, // Adjusted height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20, 
  },
  imageStyle: {
    width: '100%', 
    height: '100%', 
    borderRadius: 20, 
    resizeMode: 'cover',
  },

});


