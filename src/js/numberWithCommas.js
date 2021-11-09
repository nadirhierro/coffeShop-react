export default function numberWithCommas(x) {
  return x
    .toFixed(2)
    .toString()
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
