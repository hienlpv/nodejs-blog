export const sum = (a, b) => a + b;

export const sortable = (field, sort) => {
  if (!["asc", "desc"].includes(sort.type)) sort.type = "default";

  const sortType = field === sort.column ? sort.type : "default";

  const icons = {
    default: "oi oi-elevator",
    asc: "oi oi-sort-ascending",
    desc: "oi oi-sort-descending",
  };

  const types = {
    default: "desc",
    asc: "desc",
    desc: "asc",
  };

  const icon = icons[sortType];
  const type = types[sortType];

  return `<a href="?_sort&column=${field}&type=${type}"><span class="${icon}"></span></a>`;
};
