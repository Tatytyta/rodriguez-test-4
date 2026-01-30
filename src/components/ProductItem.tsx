import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { Product } from "../types/product";

export default function ProductItem(props: {
  item: Product;
  onPress: () => void;
}) {
  const { item, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.85}>
      <Image
        source={{
          uri: item.url_image || "https://randomuser.me/api/?results=12",
        }}
        style={styles.img}
      />

      <View style={{ flex: 1 }}>
        <Text style={styles.title} numberOfLines={1}>{item.name}</Text>

        <Text style={styles.meta} numberOfLines={1}>
          {item.category_name} • Stock: {item.stock}
        </Text>

        <View style={styles.row}>
          <Text style={styles.price}>${item.price}</Text>

          <View style={[styles.badge, item.is_active ? styles.badgeOk : styles.badgeOff]}>
            <Text style={styles.badgeText}>{item.is_active ? "ACTIVE" : "INACTIVE"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 12,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.10)",
    backgroundColor: "white",
  },
  img: { width: 74, height: 74, borderRadius: 12, backgroundColor: "#eee" },
  title: { fontWeight: "900", fontSize: 16 },
  meta: { color: "#666", marginTop: 2 },
  row: { flexDirection: "row", alignItems: "center", gap: 10, marginTop: 8 },
  price: { fontWeight: "900", fontSize: 16 },
  badge: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: 999 },
  badgeOk: { backgroundColor: "rgba(46, 125, 50, .12)" },
  badgeOff: { backgroundColor: "rgba(0, 0, 0, .08)" },
  badgeText: { fontSize: 12, fontWeight: "800" },
});