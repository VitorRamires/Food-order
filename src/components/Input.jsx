export function Input({name, id, type, width}) {
  return (
    <div className="form-item my-5 text-zinc-50">
      <label className="block text-zinc-50 mb-1" htmlFor={id}>
        {name}
      </label>
      <input
        className={`${width} border border-zinc-700 focus:bg-zinc-800 px-1 py-2 px-2 text-sm rounded`}
        type={type}
        id={id}
      />
    </div>
  );
}
