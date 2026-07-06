import { Modal } from "@/components/ui";
import useModalContext from "@/components/ui/Modal/hooks/useModalContext";
import { FaPlus } from "react-icons/fa";

interface ApiHeaderProps {
  title: string;
  description?: string;
  loading: boolean;
  length: number;
  onRefresh: () => Promise<void>;
}

export const ApiHeader = ({
  title,
  description,
  length,
  loading,
  onRefresh,
}: ApiHeaderProps) => {
    const { openModal} = useModalContext()

  return (
    <>
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {length}
          </span>
        </div>

        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          disabled={loading}
          onClick={() => void onRefresh()}
        >
          {loading ? 'Recargando...' : 'Recargar'}
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          disabled={loading}
          onClick={openModal}
        >
          <FaPlus size={12}/>
          Agregar
        </button>
      </div>
    </header>

    <Modal>
      <h2 className="text-lg font-bold text-gray-900">Agregar usuario</h2>
      <p className="mt-2 text-sm text-gray-500">
        Contenido de ejemplo del modal.
      </p>
    </Modal>
    </>
  );
};