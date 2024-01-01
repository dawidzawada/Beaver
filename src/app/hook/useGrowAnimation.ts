import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

type Props = {
  opened: boolean;
};

export const useGrowAnimation = ({opened}: Props) => {
  const growAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (opened) {
      Animated.timing(growAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(growAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [growAnimation, opened]);

  return growAnimation;
};
