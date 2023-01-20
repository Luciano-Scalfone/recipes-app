export const fetchURLSetter = (filterClass) => {
  switch (filterClass) {
    case "name":
      return { filterParams: "search", queryParams: "s" };
    case "first-letter":
      return { filterParams: "search", queryParams: "f" };
    case "ingredient":
      return { filterParams: "filter", queryParams: "i" };
    case "category":
      return { filterParams: "filter", queryParams: "c" };
    case "area":
      return { filterParams: "filter", queryParams: "a" };
  }
};

export const searchParamSetter = (filterClass, filterBy) => {
  return filterClass === "first-letter" && filterBy.length > 1
    ? filterBy[0]
    : filterBy;
};
