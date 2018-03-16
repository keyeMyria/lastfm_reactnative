export function formatDate(date) {
  console.log(date);
  let fdate = "";
  if (track.date != undefined) {
    fdate = Object.values(date)[1];
  } else {
    fdate = "Now Playing";
  }
  return fdate;
}
