import {UnistylesRegistry} from 'react-native-unistyles';
import {darkTheme} from '@app/theme/darkTheme.ts';
import {Theme} from '@app/theme/theme.ts';
import {lightTheme} from '@app/theme/lightTheme.ts';

type AppThemes = {
  light: Theme;
  dark: Theme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
  adaptiveThemes: true,
});
