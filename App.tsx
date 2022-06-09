import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { dark } from './styles/themes';
import { Container, Text } from './styles';

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <Container>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar />
      </Container>
    </ThemeProvider>
  );
}
