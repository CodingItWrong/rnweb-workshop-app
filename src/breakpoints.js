import {useWindowDimensions} from 'react-native';

export const breakpointMedium = 429;
export const breakpointLarge = 600;

export const small = 'small';
export const medium = 'medium';
export const large = 'large';

export function useBreakpoint() {
  const {width} = useWindowDimensions();

  if (width >= breakpointLarge) {
    return large;
  } else if (width >= breakpointMedium) {
    return medium;
  } else {
    return small;
  }
}
