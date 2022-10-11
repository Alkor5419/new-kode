export const convert = (department: string | undefined) => {
  switch (department) {
    case "android":
      return "Android";
    case "ios":
      return "iOS";
    case "design":
      return "Дизайн";
    case "management":
      return "Менеджмент";
    case "qa":
      return "QA";
    case "back_office":
      return "Бэк-офис";
    case "frontend":
      return "Frontend";
    case "hr":
      return "HR";
    case "pr":
      return "PR";
    case "backend":
      return "Backend";
    case "support":
      return "Техподдержка";
    case "analytics":
      return "Аналитика";
    default:
      break;
  }
};
