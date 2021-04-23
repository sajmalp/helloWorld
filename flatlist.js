import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'Heading1',
    title: 'First Item',
  },
  {
    id: 'Heading2',
    title: 'Second Item',
  },
  {
    id: 'Heading3',
    title: 'Third Item',
  },
  {
    id: 'Heading3',
    title: 'Third Item',
  },
  {
    id: 'Heading3',
    title: 'Third Item',
  },
  {
    id: 'Heading3',
    title: 'Third Item',
  },
  {
    id: 'Heading3',
    title: 'Third Item',
  },
  {
    id: 'Heading3',
    title: 'Third Item',
  },
  {
    id: 'Heading3',
    title: 'Third Item',
  },
  {
    id: 'Heading3',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Flat = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    width: 170,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  title: {
    fontSize: 25,
  },
});
export default Flat;
