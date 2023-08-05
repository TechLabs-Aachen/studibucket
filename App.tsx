import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import LoginStack from './components/LoginStack';
import { MD3DarkTheme, MD3LightTheme, PaperProvider, adaptNavigationTheme } from 'react-native-paper';
import { NavigationTheme } from 'react-native-paper/lib/typescript/src/types';

const darkTheme = {
  ...MD3DarkTheme,

  // Specify a custom property
  custom: 'property',

  // Specify a custom property in nested object
  
    "colors": {
      "primary": "rgb(167, 200, 255)",
      "onPrimary": "rgb(0, 48, 97)",
      "primaryContainer": "rgb(0, 70, 137)",
      "onPrimaryContainer": "rgb(213, 227, 255)",
      "secondary": "rgb(133, 207, 255)",
      "onSecondary": "rgb(0, 52, 76)",
      "secondaryContainer": "rgb(0, 76, 108)",
      "onSecondaryContainer": "rgb(199, 231, 255)",
      "tertiary": "rgb(76, 217, 223)",
      "onTertiary": "rgb(0, 55, 57)",
      "tertiaryContainer": "rgb(0, 79, 82)",
      "onTertiaryContainer": "rgb(111, 246, 252)",
      "error": "rgb(255, 180, 171)",
      "onError": "rgb(105, 0, 5)",
      "errorContainer": "rgb(147, 0, 10)",
      "onErrorContainer": "rgb(255, 180, 171)",
      "background": "rgb(26, 28, 30)",
      "onBackground": "rgb(227, 226, 230)",
      "surface": "rgb(26, 28, 30)",
      "onSurface": "rgb(227, 226, 230)",
      "surfaceVariant": "rgb(67, 71, 78)",
      "onSurfaceVariant": "rgb(196, 198, 207)",
      "outline": "rgb(142, 145, 153)",
      "outlineVariant": "rgb(67, 71, 78)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(227, 226, 230)",
      "inverseOnSurface": "rgb(47, 48, 51)",
      "inversePrimary": "rgb(36, 95, 166)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(33, 37, 41)",
        "level2": "rgb(37, 42, 48)",
        "level3": "rgb(42, 47, 55)",
        "level4": "rgb(43, 49, 57)",
        "level5": "rgb(46, 52, 62)"
      },
      "surfaceDisabled": "rgba(227, 226, 230, 0.12)",
      "onSurfaceDisabled": "rgba(227, 226, 230, 0.38)",
      "backdrop": "rgba(45, 48, 56, 0.4)"
    }
  }


const lightTheme = {
  ...MD3LightTheme,

  // Specify a custom property

  // Specify a custom property in nested object
      "colors": {
        ...MD3LightTheme.colors,
        "primary": "#1D3557",
        "onPrimary": "rgb(255, 255, 255)",
        "primaryContainer": "rgb(213, 227, 255)",
        "onPrimaryContainer": "rgb(0, 27, 60)",
        "secondary": "rgb(0, 101, 143)",
        "onSecondary": "rgb(255, 255, 255)",
        "secondaryContainer": "rgb(199, 231, 255)",
        "onSecondaryContainer": "rgb(0, 30, 46)",
        "tertiary": "rgb(0, 105, 109)",
        "onTertiary": "rgb(255, 255, 255)",
        "tertiaryContainer": "rgb(111, 246, 252)",
        "onTertiaryContainer": "rgb(0, 32, 33)",
        "error": "#E63946",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        "background": "rgb(253, 251, 255)",
        "onBackground": "rgb(26, 28, 30)",
        "surface": "rgb(253, 251, 255)",
        "onSurface": "rgb(26, 28, 30)",
        "surfaceVariant": "rgb(224, 226, 236)",
        "onSurfaceVariant": "rgb(67, 71, 78)",
        "outline": "rgb(116, 119, 127)",
        "outlineVariant": "rgb(196, 198, 207)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(47, 48, 51)",
        "inverseOnSurface": "rgb(241, 240, 244)",
        "inversePrimary": "rgb(167, 200, 255)",
        "elevation": {
          "level0": "transparent",
          "level1": "rgb(242, 243, 251)",
          "level2": "rgb(236, 239, 248)",
          "level3": "rgb(229, 234, 245)",
          "level4": "rgb(227, 232, 244)",
          "level5": "rgb(223, 229, 243)"
        },
        "surfaceDisabled": "rgba(26, 28, 30, 0.12)",
        "onSurfaceDisabled": "rgba(26, 28, 30, 0.38)",
        "backdrop": "rgba(45, 48, 56, 0.4)"
      }
    }

    //const { LightTheme } = adaptNavigationTheme({ materialLight: lightTheme ,reactNavigationLight:DefaultTheme });
export default function App(){

  return (
    <PaperProvider theme={lightTheme}>
     <NavigationContainer >
        <StatusBar style="auto" />
        <LoginStack />  
      </NavigationContainer>
    </PaperProvider>
  );
}




