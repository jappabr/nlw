import { Image, View, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { CardGame } from '../../components/CardGame';
import { Heading } from '../../components/Heading';
import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
      
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
          <CardGame
          data={item}
        />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    
    </View>
  );
}