
import React, { useState, useMemo } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function Puntaje() {
  const [examen, setExamen] = useState("");
  const [prom, setProm] = useState("");
  const [tipo, setTipo] = useState("Regular");
  const [mostrar, setMostrar] = useState(false);

  const resultado = useMemo(() => {
    const ex = Number(examen);
    const pr = Number(prom);

    if (ex < 0 || ex > 1000 || pr < 0 || pr > 10) return null;

    const prom1000 = (pr / 10) * 1000;
    const base = ex * 0.7 + prom1000 * 0.3;

    const bono = tipo === "Deportista" ? 30 : tipo === "Merito academico" ? 50 : 0;

    const final = base + bono;
    const estado = final >= 750 ? "APTO" : "NO APTO";

    return { final, estado };
  }, [examen, prom, tipo]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puntaje de admision</Text>

      <TextInput placeholder="Nota examen (0-1000)" keyboardType="numeric" style={styles.input} value={examen} onChangeText={setExamen} />
      <TextInput placeholder="Promedio colegio (0-10)" keyboardType="numeric" style={styles.input} value={prom} onChangeText={setProm} />

      <Picker selectedValue={tipo} onValueChange={setTipo}>
        <Picker.Item label="Regular" value="Regular" />
        <Picker.Item label="Deportista" value="Deportista" />
        <Picker.Item label="Merito academico" value="Merito academico" />
      </Picker>

      <TouchableOpacity style={styles.btn} onPress={() => setMostrar(true)}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>

      {mostrar && resultado && (
        <View style={styles.result}>
          <Text>Puntaje final: {resultado.final.toFixed(2)}</Text>
          <Text>Estado: {resultado.estado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  btn: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
  result: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
    gap: 4,
  },
});