import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export const useTitleLevels = () => {
  const screens = useBreakpoint();

  const forYourSpaceTitleLevel: 1 | 2 | 3 | 4 | 5 = screens.lg
    ? 1
    : screens.md
      ? 2
      : 4;

  const discountImageTitleLevel: 1 | 2 | 3 | 4 | 5 =
    screens.lg || screens.md ? 1 : 3;

  return {
    screens,
    forYourSpaceTitleLevel,
    discountImageTitleLevel,
  };
};
