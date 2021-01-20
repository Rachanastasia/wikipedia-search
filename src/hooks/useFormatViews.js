export function useFormatViews(views) {
  let monthlyViews = 0;
  let weeklyViews = 0;

  const viewArr = Object.values(views);

  const dailyViews = viewArr[0];

  for (let i = 0; i < viewArr.length; i++) {
    monthlyViews += viewArr[i];

    if (i < 7) {
      weeklyViews += viewArr[i];
    }
  }

  return { weeklyViews, monthlyViews, dailyViews }
}