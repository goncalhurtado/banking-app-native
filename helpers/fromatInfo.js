import { format, isToday } from "date-fns";

export const setInitials = (fullName) => {
  const [name, lastname] = fullName.split(" ");
  const initial = name[0] + lastname[0];
  return initial.toUpperCase();
};

export const formatDate = (date) => {
  const transferDate = new Date(date);
  if (isToday(transferDate)) {
    return `Hoy ${format(transferDate, "HH:mm")}`;
  }
  return format(transferDate, "dd/MM/yyyy HH:mm");
};
