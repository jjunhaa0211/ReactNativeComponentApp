import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FlexScreen from './app/screens/FlexScreen';
import {SCREEN_NAMES, ScreenName} from './app/utils/ScreenNavigator';
import TableView from './app/components/TableView';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>(
    SCREEN_NAMES.HOME,
  );

  const handleGoBack = () => {
    setCurrentScreen(SCREEN_NAMES.HOME);
  };

  const handleItemPress = (screen: ScreenName) => {
    setCurrentScreen(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentScreen === SCREEN_NAMES.HOME && (
        <TableView onItemPress={handleItemPress} />
      )}
      {currentScreen === SCREEN_NAMES.FLEX && (
        <FlexScreen onGoBack={handleGoBack} />
      )}
      {currentScreen === SCREEN_NAMES.GOODBYE && (
        <FlexScreen onGoBack={handleGoBack} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default App;
