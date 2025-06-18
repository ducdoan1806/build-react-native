import { useAuth } from "@/src/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { Avatar, Icon, TouchableRipple } from "react-native-paper";

export default function Index() {
  const { user } = useAuth();
  const [isExpand, setIsExpand] = useState(false);
  const router = useRouter();
  const warehouseMenu = [
    { id: 1, label: "Nhập kho pallet", icon: "application-import", url: "" },
    { id: 2, label: "Pallet vào lane", icon: "merge", url: "" },
    { id: 3, label: "Ship pallet", icon: "truck-fast", url: "" },
    { id: 4, label: "Receiving plan", icon: "email-receive", url: "" },
    { id: 5, label: "Kitting material", icon: "cart-arrow-down", url: "" },
    { id: 6, label: "Delivery material", icon: "cart-arrow-right", url: "" },
  ];
  const qualityControl = [
    { id: 1, label: "QC check list", icon: "format-list-checks", url: "" },
    { id: 2, label: "Check pallet", icon: "check-all", url: "" },
  ];
  const numColumns = 4;
  const screenWidth = Dimensions.get("window").width;
  const spacing = 16;
  const itemWidth = (screenWidth - spacing * (numColumns + 1)) / numColumns;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e5e7eb",
        overflow: "hidden",
      }}
    >
      <View style={{ padding: 8 }}>
        <View
          style={{
            gap: 4,
            backgroundColor: "#15236d",
            padding: 12,
            borderRadius: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 12 }}>
              ID: {user?.profile?.UserId.toUpperCase()}
            </Text>
            <TouchableRipple onPress={() => setIsExpand(!isExpand)}>
              <Avatar.Icon
                size={20}
                icon="account"
                color="#6b7280"
                style={{ backgroundColor: "#fff" }}
              />
            </TouchableRipple>
          </View>
          {isExpand ? (
            <>
              <Text style={{ color: "#fff", fontSize: 12 }}>
                Name: {user?.profile?.Name}
              </Text>
              <Text style={{ color: "#fff", fontSize: 12 }}>
                Email: {user?.profile?.Email || "--"}
              </Text>
              <Text style={{ color: "#fff", fontSize: 12 }}>
                Department: {user?.profile?.Department || "--"}
              </Text>
            </>
          ) : (
            ""
          )}
        </View>
      </View>
      <View style={{ paddingHorizontal: 8 }}>
        <View style={{ flexDirection: "row", gap: 4, marginBottom: 8 }}>
          <Icon source="warehouse" color="#4b5563" size={17} />
          <Text style={{ fontSize: 14, fontWeight: 600, color: "#4b5563" }}>
            Warehouse
          </Text>
        </View>
        <FlatList
          data={warehouseMenu}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: spacing,
            marginBottom: spacing,
          }}
          renderItem={({ item }) => (
            <View style={{ width: itemWidth, alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: "#15236d",
                  padding: 8,
                  borderRadius: 8,
                  marginBottom: 4,
                }}
              >
                <Icon source={item.icon || "camera"} color="#fff" size={24} />
              </View>
              <Text style={{ fontSize: 12, textAlign: "center" }}>
                {item.label}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={{ paddingHorizontal: 8 }}>
        <View style={{ flexDirection: "row", gap: 4, marginBottom: 8 }}>
          <Icon source="camera-control" color="#4b5563" size={17} />
          <Text style={{ fontSize: 14, fontWeight: 600, color: "#4b5563" }}>
            Quality
          </Text>
        </View>
        <FlatList
          data={qualityControl}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: spacing,
            marginBottom: spacing,
          }}
          renderItem={({ item }) => (
            <TouchableRipple>
              <View style={{ width: itemWidth, alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#15236d",
                    padding: 8,
                    borderRadius: 8,
                    marginBottom: 4,
                  }}
                >
                  <Icon source={item.icon || "camera"} color="#fff" size={24} />
                </View>
                <Text style={{ fontSize: 12, textAlign: "center" }}>
                  {item.label}
                </Text>
              </View>
            </TouchableRipple>
          )}
        />
      </View>
    </View>
  );
}
