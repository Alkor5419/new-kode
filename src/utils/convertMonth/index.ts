export const convertMonth = (department: string) => {
  switch (department) {
    case "January":
      return "янв";
    case "February":
      return "фев";
    case "March":
      return "мар";
    case "April":
      return "апр";
    case "May":
      return "май";
    case "June":
      return "июн";
    case "July":
      return "июл";
    case "August":
      return "авг";
    case "September":
      return "сен";
    case "October":
      return "окт";
    case "November":
      return "ноя";
    case "December":
      return "дек";
    default:
      break;
  }
};
