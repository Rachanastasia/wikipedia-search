export function useFormatViews(views) {
  let total = 0;
  let week = [];
  for (const [key, value] of Object.entries(views)) {
    total += value;
  }
  console.log({ total })
  return { total, week }
}