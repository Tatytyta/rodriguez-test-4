import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import MenuButton from "../src/components/MenuButton";

export default function MenuScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admision U — Campus Express</Text>
      <Text style={styles.subtitle}>Postulantes y calculos de admision</Text>

      <View style={{ gap: 12, marginTop: 14 }}>
        <MenuButton
          title="Lista de postulantes"
          subtitle="Carga y muestra una lista de postulantes"
          onPress={() => router.push("/postulantes")}
        />

        <MenuButton
          title="Puntaje de admision"
          subtitle="Calcula el puntaje final para admision"
          onPress={() => router.push("/puntajes")}
        />

        <MenuButton
          title="Matrícula y beca"
          subtitle="Calcula el total de matrícula con beca y descuento"
          onPress={() => router.push("/matricula")}
        />

      </View>

      
      <Text style={styles.note}>
        Tip: Cada pantalla practica estado, inputs y cálculos simples.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f6f7fb" },
  title: { fontSize: 24, fontWeight: "900" },
  subtitle: { marginTop: 4, color: "#555", fontWeight: "700" },
  note: { marginTop: 18, color: "#1976d2", fontWeight: "800" },
});


