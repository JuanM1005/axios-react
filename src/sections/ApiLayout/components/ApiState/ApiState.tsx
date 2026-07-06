interface ErrorStateProps {
  message: string;
}

export const ErrorState = ({ message }: ErrorStateProps) => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <p className="rounded-lg bg-red-50 p-4 text-center text-sm text-red-600">
        {message}
      </p>
    </main>
  );
};

export const LoadingState = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-center text-gray-500">Cargando usuarios...</p>
    </main>
  );
};
