import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Icon, TouchableRipple } from "react-native-paper";
type HeaderPageProps = {
  title: string;
  children?: React.ReactNode;
};
const HeaderPage = ({ title, children }: HeaderPageProps) => {
  const router = useRouter();
  return (
    <View
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        paddingTop: 54,
        paddingHorizontal: 8,
        paddingBottom: 4,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <TouchableRipple
          borderless={true}
          onPress={() => router.replace("/(auth)")}
          style={{
            borderRadius: 20,
            padding: 4,
          }}
        >
          <Icon source="chevron-left" size={24} />
        </TouchableRipple>
        <Text style={{ fontSize: 16 }}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

export default HeaderPage;
