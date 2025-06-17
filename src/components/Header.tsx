import { useState } from "react";
import { Text, View } from "react-native";
import { IconButton, Modal, Portal } from "react-native-paper";
const Header = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
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
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            backgroundColor: "white",
            padding: 8,
            marginHorizontal: 16,
            borderRadius: 8,
          }}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
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
