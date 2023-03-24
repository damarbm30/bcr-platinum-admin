const getFormattedCapacity = (category) => {
  let peopleCap;

  switch (category?.toLowerCase()) {
    case "small":
      peopleCap = "2 - 4 people";
      break;
    case "medium":
      peopleCap = "4 - 6 people";
      break;
    case "large":
      peopleCap = "6 - 8 people";
      break;
  }

  return peopleCap;
};

export default getFormattedCapacity;
