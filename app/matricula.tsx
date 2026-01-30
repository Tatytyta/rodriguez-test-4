import React, { useState, useMemo } from "react";
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Matricula() {
  const [costo, setCosto] = useState("");
  const [cred, setCred] = useState("");
  const [beca, setBeca] = useState("0");
  const [puntual, setPuntual] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  const res = useMemo(() => {
    const c = Number(costo);
    const cr = Number(cred);
    if (c <= 0 || cr <= 0) return null;

    const subtotal = c * cr;
    const becaVal = subtotal * Number(beca);
    const desc = puntual ? (subtotal - becaVal) * 0.05 : 0;
    const total = subtotal - becaVal - desc;

    return { subtotal, becaVal, desc, total };
  }, [costo, cred, beca, puntual]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matrícula y beca</Text>

      <TextInput placeholder="Costo por credito" keyboardType="numeric" style={styles.input} value={costo} onChangeText={setCosto} />
      <TextInput placeholder="Número de creditos" keyboardType="numeric" style={styles.input} value={cred} onChangeText={setCred} />

      <Picker selectedValue={beca} onValueChange={setBeca}>
        <Picker.Item label="Sin beca" value="0" />
        <Picker.Item label="25%" value="0.25" />
        <Picker.Item label="50%" value="0.5" />
      </Picker>

      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
        <Text>Pago puntual (-5%)</Text>
        <Switch value={puntual} onValueChange={setPuntual} />
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => setMostrar(true)}>
        <Text style={styles.btnText}>Calcular total</Text>
      </TouchableOpacity>

      {mostrar && res && (
        <View style={styles.result}>
          <Text>subtotal: {res.subtotal.toFixed(2)}</Text>
          <Text>beca: -{res.becaVal.toFixed(2)}</Text>
          <Text>descuento puntual: -{res.desc.toFixed(2)}</Text>
          <Text style={{ fontWeight: "900" }}>total final: {res.total.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "900", marginBottom: 10 },
  input: { backgroundColor: "white", padding: 10, borderRadius: 10, marginBottom: 10 },
  btn: { backgroundColor: "#1976d2", padding: 12, borderRadius: 10 },
  btnText: { color: "white", textAlign: "center", fontWeight: "800" },
  result: { marginTop: 20, gap: 6 },
});
