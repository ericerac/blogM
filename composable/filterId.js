const FilterId = (x, pD) => {
  // console.log("FILTER ID",x,"FILTER DATA",pD);
  const stringi = JSON.stringify(pD);
  const parsi = JSON.parse(stringi);
  const postList = parsi._value
  const cardUp = postList.filter((i) => i._id == x);
  return cardUp
}
export default FilterId