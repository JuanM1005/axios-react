import { useApi } from "@/hooks";
import { getUsers } from "@/services";
import { ApiHeader, ApiList, ErrorState, LoadingState } from "./components";
import type { User } from "@/models";

export const ApiLayout = () => {
    const { data, loading, error, fetch } = useApi<User[]>(getUsers, {
        autoFetch: true,
    });

    const users = data ?? []; // Si hay datos obtenidos los renderiza, de lo contrario retorna una lista vacia

    const usersLength = users.length

    if (loading) return <LoadingState />;

    if (error) return <ErrorState message={error.message} />;

    return (
        <main className="mx-auto max-w-6xl px-4 py-10">
            <ApiHeader
                title="Usuarios"
                description="Lista de usuarios obtenidos desde JSONPlaceholder."
                length={usersLength}
                loading={loading}
                onRefresh={fetch}
            />

            <ApiList users={users} />
        </main>
    );
};
