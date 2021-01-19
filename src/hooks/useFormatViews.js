export function useFormatViews(views) {
  let total = 0;
  let week = [];
  for (const [key, value] of Object.entries(views)) {
    total += value;
    week.push(key)


  }
  return { total, week }
}