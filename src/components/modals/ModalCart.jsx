export function ModalCart({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
          <p onClick={onClose}>Cart do aplicativo</p>
        </div>
      </div>
    </>
  );
}
