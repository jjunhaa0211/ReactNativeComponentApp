// ScreenNavigator.ts
export const SCREEN_NAMES = {
  HOME: 'Home',
  FLEX: 'flex',
  GOODBYE: 'Goodbye',
} as const;

export type ScreenName = (typeof SCREEN_NAMES)[keyof typeof SCREEN_NAMES];

export interface ScreenRoute {
  id: string;
  title: string;
  screen: ScreenName;
}

export const SCREEN_ROUTES: ScreenRoute[] = [
  {
    id: '1',
    title: 'flex flexDirection 공부',
    screen: SCREEN_NAMES.FLEX,
  },
  {
    id: '2',
    title: 'Item 2',
    screen: SCREEN_NAMES.GOODBYE,
  },
  {
    id: '3',
    title: 'Item 3',
    screen: SCREEN_NAMES.HOME,
  },
  {
    id: '4',
    title: 'Item 4',
    screen: SCREEN_NAMES.HOME,
  },
  {
    id: '5',
    title: 'Item 5',
    screen: SCREEN_NAMES.HOME,
  },
];
