import { ModalProvider } from "@/components/ui/Modal/context/ModalProvider";
import { AppLayout } from "./components";

export const App = () => {
  return (
    <ModalProvider>
      <AppLayout />
    </ModalProvider>
  );
};
