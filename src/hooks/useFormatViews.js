export function useFormatViews(views) {
  let total = 0;
  let dataArr = [];
  //views in month
  //views in week
  //up or down from before
  //views today


  for (const [key, value] of Object.entries(views)) {
    total += value;
    dataArr.push(key)


  }
  return { total, dataArr }
}