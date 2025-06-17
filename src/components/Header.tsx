import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import { deleteToken } from "../utils/storage";
import ConfirmDialog from "./ConfirmDialog";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const showModal = () => setVisible(true);
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingTop: 50,
        paddingBottom: 4,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <Text style={{ color: "#15236d", fontWeight: "bold", fontSize: 30 }}>
        MES
        <Text
          style={{
            color: "#4b5563",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          {" "}
          Scanner
        </Text>
      </Text>
      <ConfirmDialog
        visible={visible}
        title="Logout"
        message="Do you want to logout ?"
        onConfirm={async () => {
          await deleteToken();
          router.push("/login");
        }}
        onCancel={() => setVisible(false)}
      />
      <IconButton
        size={20}
        icon="logout"
        iconColor="#4b5563"
        onPress={showModal}
      />
    </View>
  );
};

export default Header;
