import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";

const COLORS = {
  cardBg: "#EBF7EE",
  primary: "#000000",
  label: "#707070",
  accentGreen: "#4CAF50",
  badgeStart: "#14A87C",
  badgeEnd: "#1C56C2",
  tagBorder: "#D0D0D0",
  tagText: "#404040",
  bookmark: "#2E8B57",
};

const TAGS = ["Equity", "Flexi Cap", "Growth"] as const;

function ResilientBadge() {
  return (
    <View style={styles.badgeWrap}>
      <Svg
        width={152}
        height={28}
        style={styles.badgeSvg}
        pointerEvents="none"
      >
        <Defs>
          <LinearGradient id="resilientGrad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor={COLORS.badgeStart} />
            <Stop offset="1" stopColor={COLORS.badgeEnd} />
          </LinearGradient>
        </Defs>
        <Rect
          x={0}
          y={0}
          width={152}
          height={28}
          rx={8}
          fill="url(#resilientGrad)"
        />
      </Svg>
      <View style={styles.badgeInner}>
        <MaterialIcons name="auto-awesome" size={14} color="#FFFFFF" />
        <Text style={styles.badgeLabel}>RESILIENT</Text>
      </View>
    </View>
  );
}

function StarRow() {
  return (
    <View style={styles.starRow}>
      {[0, 1, 2, 3, 4].map((i) => (
        <MaterialIcons
          key={i}
          name="star"
          size={14}
          color={COLORS.accentGreen}
          style={styles.star}
        />
      ))}
    </View>
  );
}

export default function MutualFundCard() {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.tags}>
          {TAGS.map((t) => (
            <View key={t} style={styles.tagPill}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
        <MaterialIcons
          name="bookmark-border"
          size={26}
          color={COLORS.bookmark}
        />
      </View>

      <View style={styles.headerRow}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoMark}>PPFAS</Text>
        </View>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Parag Parikh Flexicap Fund</Text>
          <ResilientBadge />
        </View>
      </View>

      <View style={styles.grid}>
        <View style={styles.gridRow}>
          <View style={styles.gridCell}>
            <Text style={styles.label}>NAV : 28 Dec 2025</Text>
            <View style={styles.navValueRow}>
              <Text style={styles.valueStrong}>₹92.0201</Text>
              <MaterialIcons
                name="arrow-upward"
                size={14}
                color={COLORS.accentGreen}
              />
              <Text style={styles.changeUp}>₹0.15 (+0.31%)</Text>
            </View>
          </View>
          <View style={styles.gridCell}>
            <Text style={styles.label}>AUM</Text>
            <Text style={styles.valueStrong}>₹1,26,285 Cr.</Text>
          </View>
        </View>

        <View style={styles.gridRow}>
          <View style={styles.gridCell}>
            <Text style={styles.label}>1 Yr Return</Text>
            <Text style={styles.valueStrong}>12.32%</Text>
          </View>
          <View style={styles.gridCell}>
            <Text style={styles.label}>Benchmark Index</Text>
            <Text style={styles.valueStrong}>S&P BSE PSU TR INR</Text>
          </View>
        </View>

        <View style={styles.gridRow}>
          <View style={styles.gridCell}>
            <Text style={styles.label}>1 Yr Benchmark Return</Text>
            <Text style={styles.valueStrong}>10.12%</Text>
          </View>
          <View style={styles.gridCell}>
            <Text style={styles.label}>Value Research Rating</Text>
            <StarRow />
          </View>
        </View>
      </View>

      <Text style={styles.quote}>
        “A value-driven flexicap fund with global diversification that has
        consistently beaten its category average over long-term horizons,
        offering strong risk-adjusted returns.”
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 20,
    padding: 18,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
      default: {},
    }),
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    flex: 1,
    paddingRight: 8,
  },
  tagPill: {
    backgroundColor: "#FFFFFF",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.tagBorder,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tagText: {
    fontSize: 11,
    color: COLORS.tagText,
    fontWeight: "500",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 18,
    gap: 12,
  },
  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#E8E8E8",
  },
  logoMark: {
    fontSize: 10,
    fontWeight: "700",
    color: COLORS.accentGreen,
    letterSpacing: 0.3,
  },
  titleBlock: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    color: COLORS.primary,
    lineHeight: 22,
  },
  badgeWrap: {
    marginTop: 8,
    alignSelf: "flex-start",
    width: 152,
    height: 28,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
  },
  badgeSvg: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  badgeInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 1,
  },
  badgeLabel: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
    fontStyle: "italic",
    letterSpacing: 0.6,
  },
  grid: {
    gap: 14,
    marginBottom: 16,
  },
  gridRow: {
    flexDirection: "row",
    gap: 12,
  },
  gridCell: {
    flex: 1,
    minWidth: 0,
  },
  label: {
    fontSize: 12,
    color: COLORS.label,
    marginBottom: 4,
  },
  valueStrong: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.primary,
  },
  navValueRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 4,
  },
  changeUp: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.accentGreen,
  },
  starRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  star: {
    marginRight: 2,
  },
  quote: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.primary,
    fontWeight: "400",
  },
});
