import api from "@/src/api/api";
import { useError } from "@/src/hooks/useError";
import { saveToken } from "@/src/utils/storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [info, setInfo] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { showError, ErrorDialog } = useError();
  const router = useRouter();
  const handleChange = (key: string, e: string) => {
    setInfo({ ...info, [key]: e });
  };
  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await api.post(
        "/o/token/",
        JSON.stringify({
          grant_type: "password",
          client_id: "9TPgk0HQnCwVANuSuh2sgAmldjgH3McpRHCugcVD",
          client_secret:
            "ply9b9VsUtRadW2iBpMCWnIsF4J4ac7IaqyeCMJosNU6g9rG7kE7ILZn1Q3fjEAyYHB4gySiWbYo8sovDideWJlhY1GgDL30eM9bEixoD1fR3TXWEhvn11mJWiOKCT9j",
          username: info.username,
          password: info.password,
        })
      );
      await saveToken("Bearer " + res?.data?.access_token);
      router.replace("/(auth)");
    } catch (error) {
      showError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingBottom: 80,
      }}
    >
      <View style={{ width: "100%" }}>
        <Text
          style={{
            color: "#15236d",
            fontWeight: "bold",
            fontSize: 56,
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          MES
          <Text
            style={{
              color: "#4b5563",
              fontSize: 24,
              fontStyle: "italic",
            }}
          >
            {" "}
            Scanner
          </Text>
        </Text>
        <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 16 }}>
          Login
        </Text>
        <View style={{ gap: 12 }}>
          <TextInput
            style={{ width: "100%", fontSize: 14 }}
            theme={{
              colors: {
                primary: "#15236d",
              },
            }}
            mode="outlined"
            label="Username"
            placeholder="Type your username ..."
            value={info.username}
            onChangeText={(e) => handleChange("username", e)}
          />
          <TextInput
            style={{ width: "100%", fontSize: 14 }}
            mode="outlined"
            label="Password"
            value={info.password}
            onChangeText={(e) => handleChange("password", e)}
            secureTextEntry={!isShowPassword}
            theme={{
              colors: {
                primary: "#15236d",
              },
            }}
            right={
              <TextInput.Icon
                onPress={() => setIsShowPassword(!isShowPassword)}
                icon={!isShowPassword ? "eye" : "eye-off"}
              />
            }
            placeholder="Type your password ..."
          />
          <Button
            icon="login"
            mode="contained"
            buttonColor="#15236d"
            onPress={handleLogin}
            loading={loading}
          >
            Login
          </Button>
          {ErrorDialog}
        </View>
      </View>
    </View>
  );
}
