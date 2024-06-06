import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {SCREEN_ROUTES, ScreenName} from '../utils/ScreenNavigator';

interface TableViewProps {
  onItemPress: (screen: ScreenName) => void;
}

const TableView = ({onItemPress}: TableViewProps) => {
  const renderItem = ({item}: {item: (typeof SCREEN_ROUTES)[number]}) => (
    <TouchableOpacity
      onPress={() => {
        onItemPress(item.screen);
      }}
      style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={SCREEN_ROUTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
  },
  item: {
    backgroundColor: '#fff',
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
});

export default TableView;
