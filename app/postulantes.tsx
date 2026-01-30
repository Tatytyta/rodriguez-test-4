import React, { useState } from "react";
import {
  View, Text, StyleSheet, FlatList,
  ActivityIndicator, TouchableOpacity, Image
} from "react-native";

export default function Postulantes() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cargar = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://randomuser.me/api/?results=12");
      const json = await res.json();
      setData(json.results);
    } catch {
      setError("No se pudo cargar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de postulantes</Text>

      <TouchableOpacity style={styles.btn} onPress={cargar}>
        <Text style={styles.btnText}>Cargar postulantes</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
      {error !== "" && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={data}
        keyExtractor={(_, i) => String(i)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.picture.medium }} style={styles.img} />
            <View>
              <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
              <Text>{item.email}</Text>
              <Text>{item.location.country}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "900", marginBottom: 10 },
  btn: { backgroundColor: "#1976d2", padding: 12, borderRadius: 10, marginBottom: 10 },
  btnText: { color: "white", textAlign: "center", fontWeight: "800" },
  card: { flexDirection: "row", gap: 10, backgroundColor: "white", padding: 10, borderRadius: 10, marginBottom: 10 },
  img: { width: 60, height: 60, borderRadius: 30 },
  name: { fontWeight: "900" },
  error: { color: "red", marginTop: 10 },
});
