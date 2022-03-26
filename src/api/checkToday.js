export default function checkToday(date) {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();

  const inputYear = date.getFullYear();
  const inputMonth = date.getMonth();
  const inputDay = date.getDate();

  if (year === inputYear && month === inputMonth && day === inputDay) {
    return true;
  }
}
