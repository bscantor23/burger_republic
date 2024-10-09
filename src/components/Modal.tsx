import { toast } from "react-toastify";
import { registerController, updateController } from "../contollers/user";
import { User } from "../interfaces/users";

interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  action: "view" | "update" | "create";
  selectedUser?: User;
  updateFetch?: () => Promise<void>;
}

const Modal = ({
  setShowModal,
  selectedUser,
  action,
  updateFetch,
}: ModalProps) => {
  const validateForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      if (action === "create") {
        register(event);
      }
      if (action === "update") {
        update(event);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const register = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const response = await registerController(
        new FormData(event.currentTarget)
      );

      if (!response || !response.ok) {
        toast.error("Error al registrar el usuario.", {
          theme: "colored",
          position: "top-right",
        });
      } else {
        toast.success("Usuario registrado exitosamente.", {
          theme: "colored",
          position: "top-right",
        });
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const update = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const response = await updateController(
        new FormData(event.currentTarget)
      );

      if (!response || !response.ok) {
        toast.error("Error al actualizar el usuario.", {
          theme: "colored",
          position: "top-right",
        });
      } else {
        toast.success("Usuario actualizado exitosamente.", {
          theme: "colored",
          position: "top-right",
        });
        setShowModal(false);
      }

      if (updateFetch) {
        await updateFetch();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
        <form onSubmit={validateForm}>
          <div className="mb-4">
            <input
              type="hidden"
              id="userId"
              name="userId"
              value={selectedUser?.id}
            />

            <label
              htmlFor="registerEmail"
              className="block text-left text-lg font-medium text-gray-700"
            >
              Correo <span className="text-primary font-bold">*</span>
            </label>
            <input
              type="email"
              id="registerEmail"
              name="registerEmail"
              defaultValue={selectedUser?.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-md"
              required
              disabled={action === "view"}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-left text-lg font-medium text-gray-700"
            >
              Nombre Completo <span className="text-primary font-bold">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              defaultValue={selectedUser?.fullName}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-md"
              required
              disabled={action === "view"}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-left text-lg font-medium text-gray-700"
            >
              Dirección <span className="text-primary font-bold">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              defaultValue={selectedUser?.address}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-md"
              required
              disabled={action === "view"}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-left text-lg font-medium text-gray-700"
            >
              Número de Teléfono{" "}
              <span className="text-primary font-bold">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              defaultValue={selectedUser?.phoneNumber}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-md"
              required
              disabled={action === "view"}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="position"
              className="block text-left text-lg font-medium text-gray-700"
            >
              Cargo <span className="text-primary font-bold">*</span>
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              defaultValue={selectedUser?.jobTitle}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-md"
              required
              disabled={action === "view"}
            />
          </div>
          <div className="mb-4" hidden={action === "view"}>
            <label
              htmlFor="registerPassword"
              className="block text-left text-lg font-medium text-gray-700"
            >
              Contraseña <span className="text-primary font-bold">*</span>
            </label>
            <input
              type="password"
              id="registerPassword"
              name="registerPassword"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-md"
              required={action !== "update"}
              disabled={action === "view"}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-4 py-2 px-4 border border-gray-300 rounded-xl shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              hidden={action === "view"}
              className="py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-xl text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {action === "create" ? "Registrar" : "Actualizar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
