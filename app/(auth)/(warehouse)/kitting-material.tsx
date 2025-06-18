import HeaderPage from "@/src/components/HeaderPage";
import React, { useState } from "react";
import { View } from "react-native";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import {
    DatePickerInput,
    DatePickerModal,
    en,
    registerTranslation,
} from "react-native-paper-dates";
registerTranslation("en", en);
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#15236d",
  },
};
const KittingMaterial = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <PaperProvider theme={theme}>
      <View>
        <HeaderPage title="Kitting material" />
        <View style={{ marginTop: 40 }}>
          <DatePickerInput
            inputMode="end"
            value={date}
            onChange={(d) => setDate(d)}
            locale="en"
            style={{
              backgroundColor: "#fff", // màu nền input
            }}
            theme={{
              colors: {
                primary: "#15236d", // màu đường viền & focus
              },
            }}
          />
          <DatePickerModal
            locale="en"
            mode="single"
            visible={open}
            onDismiss={() => setOpen(false)}
            date={date}
            onConfirm={({ date }) => {
              setOpen(false);
              setDate(date);
            }}
          />
        </View>
      </View>
    </PaperProvider>
  );
};

export default KittingMaterial;
