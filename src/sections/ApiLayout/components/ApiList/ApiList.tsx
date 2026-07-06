import type { User } from "@/models";
import { ApiCard } from "../ApiCard/ApiCard";

interface ApiListProps {
  users: User[];
}

export const ApiList = ({ users }: ApiListProps) => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <ApiCard key={user.id} user={user} />
      ))}
    </section>
  );
};
