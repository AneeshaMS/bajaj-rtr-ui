import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const Index = () => {
  useEffect(() => {
    console.log("home index");
    setTimeout(() => {
      router.push("/home/Home");
    }, 500);
  }, []);
  return (
    <View>
      <Text>welcome</Text>
    </View>
  );
};
export default Index;
