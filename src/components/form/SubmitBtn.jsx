import { useFormStatus } from "react-dom";

export function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <p className="actions">
      <button
        className="w-full text-zinc-50 bg-amber-500  p-5 mt-5 cursor-pointer hover:bg-amber-600 transition"
        disabled={pending}
        type="submit"
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </p>
  );
}
