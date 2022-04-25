export const makeSlug = (string) => string.replace(/\s/, "-").toLowerCase();

export const getTimeframe = (v) => {
  if (v === "daily") return "day";
  if (v === "weekly") return "week";
  if (v === "monthly") return "month";
};

export const getTimeUnit = (v) => {
  if (v === 1) return "hr";
  return "hrs";
};
