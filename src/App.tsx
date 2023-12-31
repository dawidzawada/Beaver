import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from '@app/navigation/Navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import {lightTheme} from '@app/theme/lightTheme.ts';
import {darkTheme} from '@app/theme/darkTheme.ts';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'grey' : 'white',
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Navigation />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
