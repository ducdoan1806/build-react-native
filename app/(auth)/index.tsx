import { ScrollView, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function Index() {
  return (
    <ScrollView
      style={{
        // flexDirection: "row",
        // flexWrap: "wrap",
        backgroundColor: "#e5e7eb",
      }}
    >
      <View style={{ padding: 8 }}>
        <View
          style={{ backgroundColor: "#15236d", padding: 8, borderRadius: 8 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Avatar.Icon
              size={20}
              icon="account"
              color="#6b7280"
              style={{ backgroundColor: "#fff" }}
            />
            <Text style={{ color: "#fff", fontSize: 12 }}>DOAN MINH DUC</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
