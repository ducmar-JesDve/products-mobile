import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./src/screens/HomeScreen";

const App = () => {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  );
};

export default App;
