import { Grid } from 'antd';

const { useBreakpoint } = Grid;

type TitleLevel = 1 | 2 | 3 | 4 | 5;

export const useTitleLevels = () => {
  const screens = useBreakpoint();

  const getTitleLevel = (levels: {
    lg: TitleLevel;
    md: TitleLevel;
    sm: TitleLevel;
  }): TitleLevel => {
    if (screens.lg) return levels.lg;
    if (screens.md) return levels.md;
    return levels.sm;
  };

  return {
    screens,
    forYourSpaceTitleLevel: getTitleLevel({ lg: 1, md: 2, sm: 4 }),
    chooseYourPerfectFitLevel: getTitleLevel({ lg: 1, md: 2, sm: 4 }),
    discountImageTitleLevel: getTitleLevel({ lg: 1, md: 1, sm: 3 }),
    feedbacksTitleLevel: getTitleLevel({ lg: 1, md: 2, sm: 4 }),
  };
};
