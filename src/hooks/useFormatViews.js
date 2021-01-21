export function useFormatViews(views) {
  let viewsPerDay = [];
  let dates = [];
  let totalViews = 0;

  for (const [k, v] of Object.entries(views)) {
    totalViews = totalViews + v;

    let formattedDate = new Date(k).toLocaleDateString();
    let formattedMonthDay = formattedDate.slice(0, formattedDate.length - 5);
    dates.push(formattedMonthDay);
    viewsPerDay.push(v);
  }

  return { totalViews, viewsPerDay, dates }
}