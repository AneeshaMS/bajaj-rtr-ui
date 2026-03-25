import Cart from "@/assets/icons/Cart";
import Search from "@/assets/icons/Search";
import { Header } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
const HeaderGreen = () => {
  return (
    <View
      style={{
        flex: 0.325,
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "#6FA186",
        flexDirection: "row",
        paddingTop: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
      }}
    >
      <Header
        containerStyle={{
          backgroundColor: "#6FA186",
          borderBottomWidth: 0,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 14,
        }}
        leftComponent={{
          icon: "chevron-left",
          type: "material",
          color: "#fff",
          size: 32,
        }}
        centerComponent={{
          text: "Scheme Details",
          style: { color: "#fff", fontSize: 24 },
        }}
        rightComponent={
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <Search />
            <Cart />
          </View>
        }
      />
    </View>
  );
};
export default HeaderGreen;
