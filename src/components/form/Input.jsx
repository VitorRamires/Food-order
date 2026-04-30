export function Input({ label, id, type, width, defaultValue }) {
  return (
    <div className="form-item text-zinc-50 w-full">
      <label className="block text-zinc-50 mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        className={`${width} border border-zinc-700 focus:bg-zinc-800 px-1 py-2 px-2 text-sm rounded`}
        type={type}
        id={id}
        name={id}
        defaultValue={defaultValue}
      />
    </div>
  );
}
