import { TextInput, Button, Pressable, Text, View, Image, StyleSheet } from 'react-native'; 

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
        biblioteca de grimórios
      </Text>


      <View style={styles.subtitleContainer}>
       
        <Text style={styles.subtitleText}>
          Este acervo secreto reúne os diários de campo, mapas e grimórios dos lugares mais hostis, isolados e letais do planeta.
        </Text>
      </View>

      <Text>E-mail:</Text>

      <TextInput
        placeholder="digite Seu E-mail"
        
        style={styles.input}
      />

      <Text>senha:</Text>

      <TextInput
        placeholder="insira sua senha"
        secureTextEntry={true}
        
        style={styles.input}
      />

      <Button
        title="login"
        onPress={() => {
          alert("voce logou no seu perfil ");
        }}
      />

      <Pressable
       
        style={styles.pressableButton}
        onPress={() => {
          alert("alterar email/senha");
        }}
      >
        <Text>Esqueci minha senha</Text>
      </Pressable>

      <Pressable
       
        style={styles.pressableButton}
        onPress={() => {
          alert("Criar uma conta");
        }}
      >
        <Text>Criar conta</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
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
  subtitleContainer: {
    alignItems: 'center',
    marginTop: -5,
  },
  subtitleText: {
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  pressableButton: {
    marginTop: 15,
  },
});
