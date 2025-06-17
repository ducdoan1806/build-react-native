import React from "react";
import { StyleSheet } from "react-native";
import {
    Dialog,
    Button as PaperButton,
    Portal,
    Text,
} from "react-native-paper";

type ConfirmDialogProps = {
  visible: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};
const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  visible,
  title = "Xác nhận",
  message,
  confirmText = "Ok",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onCancel} style={styles.dialog}>
        {title ? <Dialog.Title>{title}</Dialog.Title> : null}
        <Dialog.Content>
          <Text>{message}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <PaperButton onPress={onCancel} textColor="#15236d">
            {cancelText}
          </PaperButton>
          <PaperButton onPress={onConfirm} textColor="#15236d">
            {confirmText}
          </PaperButton>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialog: {
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});

export default ConfirmDialog;
