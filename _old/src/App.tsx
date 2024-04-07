import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from '@app/navigation/Navigation';
import i18n from '@app/i18n';
import {I18nextProvider} from 'react-i18next';
import '@app/styles/unistyles.ts';

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
      <I18nextProvider i18n={i18n}>
        <Navigation />
      </I18nextProvider>
    </SafeAreaProvider>
  );
}

export default App;
