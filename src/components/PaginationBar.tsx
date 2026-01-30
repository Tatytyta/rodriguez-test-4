import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PaginationBar(props: {
  page: number;
  pageSize: number;
  count: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const { page, pageSize, count, onPrev, onNext } = props;

  const totalPages = Math.max(1, Math.ceil(count / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <View style={styles.wrap}>
      <Text style={styles.meta}>
        Página {page} de {totalPages} • Total: {count}
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.btn, !canPrev && styles.btnDisabled]}
          onPress={onPrev}
          disabled={!canPrev}
        >
          <Text style={styles.btnText}>Prev</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnPrimary, !canNext && styles.btnDisabled]}
          onPress={onNext}
          disabled={!canNext}
        >
          <Text style={styles.btnTextPrimary}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 14,
    gap: 10,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.10)",
    backgroundColor: "white",
  },
  meta: { color: "#555", fontWeight: "700" },
  actions: { flexDirection: "row", gap: 10 },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(25,118,210,.6)",
  },
  btnPrimary: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#1976d2",
  },
  btnDisabled: { opacity: 0.45 },
  btnText: { fontWeight: "800", color: "#1976d2" },
  btnTextPrimary: { fontWeight: "900", color: "white" },
});