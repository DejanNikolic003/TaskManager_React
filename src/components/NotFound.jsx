export default function NotFound({ text }) {
  return (
    <div className="p-2 text-center">
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
        {text}
      </span>
    </div>
  );
}
