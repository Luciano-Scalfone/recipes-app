// export const fetchURLSetter = (filterClass, filterParams, queryParams) => {
//   switch (filterClass) {
//     case "name":
//       filterParams = "search";
//       queryParams = "s";
//       break;
//     case "first-letter":
//       filterParams = "search";
//       queryParams = "f";
//       break;
//     case "ingredients":
//       filterParams = "filter";
//       queryParams = "i";
//       break;
//     case "category":
//       filterParams = "filter";
//       queryParams = "c";
//       break;
//     case "area":
//       filterParams = "filter";
//       queryParams = "a";
//       break;
//   }
// };

export const searchParamSetter = (filterClass, filterBy) => {
  return filterClass === "first-letter" && filterBy.length > 1
    ? filterBy[0]
    : filterBy;
};
