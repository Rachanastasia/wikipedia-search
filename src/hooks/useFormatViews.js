export function useFormatViews(views) {
  let viewsPerDay = [];
  let dates = [];
  let totalViews = 0;
  let max = 0;

  for (const [k, v] of Object.entries(views)) {
    totalViews = totalViews + v;
    if (v > max) {
      max = v;
    }
    let formattedDate = new Date(k).toLocaleDateString();
    //regex for being surrounded by spaces
    dates.push(formattedDate.slice(0, formattedDate.length - 5));
    viewsPerDay.push(v);
  }

  return { totalViews, viewsPerDay, dates, max }
}