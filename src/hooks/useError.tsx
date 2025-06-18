import ConfirmDialog from "@/src/components/ConfirmDialog";
import React, { ReactNode, useState } from "react";

export function useError() {
  const [error, setError] = useState<string>("");

  function showError(raw: unknown) {
    console.log("raw: ", raw);
    let msg: string;
    if (
      raw &&
      typeof raw === "object" &&
      "response" in raw &&
      raw.response &&
      typeof (raw as any).response === "object" &&
      "data" in (raw as any).response
    ) {
      msg = JSON.stringify((raw as any).response.data);
    } else if (typeof raw === "string") {
      msg = raw;
    } else {
      msg = "An unknown error occurred.";
    }
    setError(msg);
  }

  const ErrorDialog: ReactNode = (
    <ConfirmDialog
      visible={Boolean(error)}
      title="Error"
      message={error}
      onConfirm={() => setError("")}
      onCancel={() => setError("")}
    />
  );

  return {
    showError,
    ErrorDialog,
  };
}
