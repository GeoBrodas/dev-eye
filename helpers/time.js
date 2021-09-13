export function convertFromISO(ISOdate) {
  const date = new Date(ISOdate);
  return (
    date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
  );
}
