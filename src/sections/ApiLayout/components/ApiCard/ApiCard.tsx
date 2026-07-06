import type { User } from '@/models';
import { FaRegTrashAlt } from 'react-icons/fa';

interface ApiCardProps {
  user: User;
}

export const ApiCard = ({ user }: ApiCardProps) => {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <header className="mb-5 flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-600 ring-4 ring-blue-50">
            {user.name.charAt(0)}
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-base font-semibold text-gray-900">
              {user.name}
            </h2>
            <p className="truncate text-sm font-medium text-blue-600">
              @{user.username}
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label="Eliminar usuario"
          className="shrink-0 cursor-pointer rounded-xl p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
        >
          <FaRegTrashAlt size={15} />
        </button>
      </header>

      <div className="space-y-4">
        <section className="rounded-xl bg-gray-50 px-4 py-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Email
          </p>
          <p className="truncate text-sm font-medium text-gray-700">
            {user.email}
          </p>
        </section>

        <section className="rounded-xl bg-gray-50 px-4 py-3">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Dirección
          </p>

          <p className="text-sm font-medium text-gray-700">
            {user.address.street}, {user.address.suite}
          </p>

          <p className="mt-1 text-sm text-gray-500">{user.address.city}</p>
        </section>
      </div>
    </article>
  );
};