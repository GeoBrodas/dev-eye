export function convertFromISO(ISOdate) {
  const date = new Date(ISOdate);
  return (
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  );
}
