import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCachedAuth } from "../../redux/auth/hooks";

SplashScreen.preventAutoHideAsync();

export const useComponentState = () => {
  const [fontsLoaded] = useFonts({
    Sora: require("../../../assets/fonts/Sora-Regular.ttf"),
    "Sora-Bold": require("../../../assets/fonts/Sora-Bold.ttf"),
    "Sora-ExtraBold": require("../../../assets/fonts/Sora-ExtraBold.ttf"),
    "Sora-Light": require("../../../assets/fonts/Sora-Light.ttf"),
    "Sora-ExtraLight": require("../../../assets/fonts/Sora-ExtraLight.ttf"),
    "Sora-Medium": require("../../../assets/fonts/Sora-Medium.ttf"),
    "Sora-SemiBold": require("../../../assets/fonts/Sora-SemiBold.ttf"),
    "Sora-Thin": require("../../../assets/fonts/Sora-Thin.ttf"),
  });
  const { loading: loadingUser } = useCachedAuth();
  const loading = loadingUser || !fontsLoaded;

  const onLayoutRootView = useCallback(async () => {
    if (!loading) {
      await SplashScreen.hideAsync();
    }
  }, [loading]);

  return {
    loading,
    onLayoutRootView,
  };
};
