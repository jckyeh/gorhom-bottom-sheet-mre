import { Button, StyleSheet } from "react-native";

import { BottomSheetModalWrapper } from "@/components/BottomSheetModalWrapper";
import { Text, View } from "@/components/Themed";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";

export default function TabOneScreen() {
  const [presentModal, setPresentModal] = useState<"A" | "B" | null>(null);
  const bottomSheetModalARef = useRef<BottomSheetModal>(null);
  const bottomSheetModalBRef = useRef<BottomSheetModal>(null);

  const handlePresentModalAPress = () => {
    setPresentModal("A");
  };

  const handlePresentModalBPress = () => {
    setPresentModal("B");
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Minimal reproducible example</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Button
          onPress={handlePresentModalAPress}
          title="Present Modal A"
          color="blue"
        />
      </View>

      <BottomSheetModalWrapper
        ref={bottomSheetModalARef}
        snapPoints={["60%", "80%"]}
        isPresented={presentModal === "A"}
      >
        <BottomSheetView style={styles.contentContainerA}>
          <Text>Modal A</Text>
          <Button
            onPress={handlePresentModalBPress}
            title="Present Modal B"
            color="blue"
          />
        </BottomSheetView>
      </BottomSheetModalWrapper>

      <BottomSheetModalWrapper
        ref={bottomSheetModalBRef}
        snapPoints={["50%"]}
        isPresented={presentModal === "B"}
      >
        <BottomSheetView style={styles.contentContainerB}>
          <Text>Modal B</Text>
        </BottomSheetView>
      </BottomSheetModalWrapper>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "gray",
  },
  contentContainerA: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red",
  },
  contentContainerB: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "green",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
