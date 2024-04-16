import Animated, { ZoomIn } from "react-native-reanimated";
import { IconProps } from "react-native-vector-icons/Icon";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const AnimatedIcon = (props: IconProps) => {
  return (
    <Animated.View entering={ZoomIn}>
      <Icon {...props} />
    </Animated.View>
  );
};
