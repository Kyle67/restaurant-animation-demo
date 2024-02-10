import { StatusBar } from "expo-status-bar";
import { Flex, NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./AppNavigator";

// TODO: CHange background colour of app to white

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <Flex h="full" safeAreaTop>
          <AppNavigator />
        </Flex>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
