import React from "react";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Admisión U — Campus Express" }} />
      <Stack.Screen name="postulantes" options={{ title: "Lista de postulantes" }} />
      <Stack.Screen name="puntaje" options={{ title: "Puntaje de admisión" }} />
      <Stack.Screen name="matricula" options={{ title: "Matrícula y beca" }} />
    </Stack>
  );
}
