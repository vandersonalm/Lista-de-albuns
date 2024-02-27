import { View, Text, StyleSheet } from 'react-native'
export function Album({ albumName, year , musics }) {
  return (
    <View> 
      <Text style={styles.banda}>{albumName} {year}</Text>
      <Text style={styles.musicas}>{musics.join('\n')}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  banda: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 700,
  },
  musicas: {
    marginLeft: 10
  }
})