import {
  BottomSheetModal,
  useBottomSheetTimingConfigs,
} from "@gorhom/bottom-sheet";
import React, { ReactNode, useEffect } from "react";
import { Easing } from "react-native-reanimated";

interface BottomSheetModalWrapperProps {
  snapPoints?: string[] | number[];
  children: ReactNode;
  isPresented?: boolean;
}

export const BottomSheetModalWrapper = React.forwardRef<
  BottomSheetModal,
  BottomSheetModalWrapperProps
>(({ isPresented, snapPoints, children }, externalRef) => {
  const animationConfigs = useBottomSheetTimingConfigs({
    duration: 200,
    easing: Easing.out(Easing.quad),
  });

  useEffect(() => {
    if (!externalRef || !("current" in externalRef)) return;

    if (isPresented) {
      externalRef?.current?.present(animationConfigs);
    } else {
      externalRef?.current?.dismiss(animationConfigs);
    }
  }, [isPresented]);

  return (
    <BottomSheetModal
      ref={externalRef}
      snapPoints={snapPoints}
      animationConfigs={animationConfigs}
    >
      {children}
    </BottomSheetModal>
  );
});
