import { Text, View, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2407/2407510.png' }}
          style={styles.logo}
        />
      </View>

      <Text
        style={styles.title}
      >
        Biblioteca de Grimorios
      </Text>
      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText}>
          Este acervo secreto reúne os diários de campo, mapas e grimórios dos lugares mais hostis, isolados e letais do planeta.
        </Text>

        <Text style={styles.footerText}>
          Biblioteca de Grimorios v1.0
          leandro ant
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#50B4D8',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -10,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 15,
    marginTop: 480,
  },
});