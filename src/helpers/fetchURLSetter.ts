export const fetchURLSetter = (
  filterClass: string
): { filterParams: string; queryParams: string } => {
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
    default:
      return { filterParams: "", queryParams: "" };
  }
};

export const searchParamSetter = (filterClass: string, filterBy: string) => {
  return filterClass === "first-letter" && filterBy.length > 1
    ? filterBy[0]
    : filterBy;
};
