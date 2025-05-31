const badgeStyles = {
  high: "bg-red-50 text-red-700 ring-red-600/10",
  medium: "bg-yellow-50 text-yellow-700 ring-yellow-600/10",
  low: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
};

export default function Badge({ type, text }) {
  return (
    <span
      className={`ms-2 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium  ring-1  ring-inset ${badgeStyles[type]}`}
    >
      {text}
    </span>
  );
}
