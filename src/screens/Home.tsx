import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

import {PRODUCTS_LIST} from '../constants/data';
import Separator from '../components/Separator';
import ProductItem from '../components/ProductItem';

type Homeprops = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Homeprops) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Details', {product: item})}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
  },
});
