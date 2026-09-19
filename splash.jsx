import { Text, View, Image, StyleSheet } from 'react-native'; // [ALTERAÇÃO]: Importado o 'StyleSheet'

export default function App() {
  return (
    // [ALTERAÇÃO]: Substituído estilo inline por styles.container
    <View style={styles.container}>

      <View>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2407/2407510.png' }}
          // [ALTERAÇÃO]: Substituído estilo inline por styles.logo
          style={styles.logo}
        />
      </View>

      <Text
        // [ALTERAÇÃO]: Substituído estilo inline por styles.title
        style={styles.title}
      >
        Biblioteca de Grimorios
      </Text>

      {/* [ALTERAÇÃO]: Substituído estilo inline por styles.contentContainer */}
      <View style={styles.contentContainer}>
        {/* [ALTERAÇÃO]: Substituído estilo inline por styles.descriptionText */}
        <Text style={styles.descriptionText}>
          Este acervo secreto reúne os diários de campo, mapas e grimórios dos lugares mais hostis, isolados e letais do planeta.
        </Text>

        {/* [ALTERAÇÃO]: Substituído estilo inline por styles.footerText */}
        <Text style={styles.footerText}>
          Biblioteca de Grimorios v1.0
          leandro ant
        </Text>
      </View>

    </View>
  );
}

// [ALTERAÇÃO]: Criado o objeto de estilização usando StyleSheet.create
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