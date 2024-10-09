import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { FaEye, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import { User } from "../interfaces/users";
import { API_BASE_URL } from "../constants";
import Modal from "../components/Modal";
import { deleteController } from "../contollers/user";
import { toast } from "react-toastify";

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [action, setAction] = useState<"view" | "update" | "create">("create");

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = async (id: string) => {
    try {
      await deleteController(id);
      await fetchData();
      toast.success("Usuario eliminado exitosamente.", {
        theme: "colored",
        position: "top-right",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error al intentar eliminar el usuario.", {
        theme: "colored",
        position: "top-right",
      });
    }
  };

  const columnHelper = createColumnHelper<User>();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => <span className="font-bold">{info.row.index + 1}.</span>,
      header: "Id",
    }),
    columnHelper.accessor("avatar", {
      cell: (info) => (
        <img
          src={info?.getValue()}
          alt="..."
          className="rounded-full w-100 h-10 object-cover"
        ></img>
      ),
      header: "Avatar",
    }),
    columnHelper.accessor("fullName", {
      header: "Nombre completo",
    }),
    columnHelper.accessor("email", {
      header: "Correo",
    }),
    columnHelper.accessor("address", {
      header: "Dirección",
    }),
    columnHelper.accessor("phoneNumber", {
      header: "Teléfono",
    }),
    columnHelper.accessor("jobTitle", {
      header: "Cargo",
    }),
  ];

  const table = useReactTable({
    data: users,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="mt-28 p-2 md:min-h-[1300px] lg:min-h-[1200px] container-fluid px-10 md:px-20">
      <div className="pb-10">
        <h1 className="text-primary text-3xl py-5">Usuarios</h1>
        <hr />
      </div>
      <div className="flex md:flex-row flex-col md:justify-between justify-center  mb-2 py-5 gap-5">
        <div className="w-full flex items-center gap-1">
          <FaSearch />
          <Search
            initValue={globalFilter ?? ""}
            onChange={(value: any) => setGlobalFilter(String(value))}
            onKeyDown={(value: any) => {
              setGlobalFilter(String(value));
            }}
            className="p-2 bg-transparent outline-none border-b-2 w-full lg:w-1/2 focus:w-1/2 duration-300 border-primary"
            placeholder="Búsqueda"
          />
        </div>
        <button
          className="w-[300px] self-center hover:bg-green-500 text-green-500  md:block font-semibold hover:text-white rounded-xl border-2 border-green-500 px-6 py-2 duration-200"
          onClick={() => {
            setSelectedUser(undefined);
            setShowModal(true);
            setAction("create");
          }}
        >
          Crear Usuario
        </button>
      </div>
      <div className="md:min-h-[750px]">
        <div className="max-h-[750px] overflow-y-auto">
          <table className="w-full text-left text-normal">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="h-16">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="capitalize px-3.5 py-2">
                      <div className="whitespace-nowrap">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    </th>
                  ))}
                  <th className="text-center">Acciones</th>
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length
                ? table.getRowModel().rows.map((row, i) => (
                    <tr
                      key={row.id}
                      className={`min-h-18 ${
                        i % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-3.5 py-2 whitespace-nowrap"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                      <td className="px-3.5 py-2">
                        <div className="flex space-x-4 text-2xl justify-center items-center h-full">
                          <button
                            className="text-blue-500"
                            onClick={() => {
                              setSelectedUser(row.original);
                              setShowModal(true);
                              setAction("view");
                            }}
                          >
                            <FaEye />
                          </button>
                          <button
                            className="text-yellow-500"
                            onClick={() => {
                              setSelectedUser(row.original);
                              setShowModal(true);
                              setAction("update");
                            }}
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => deleteUser(row.getValue("id"))}
                            className="text-red-500"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-end mt-2 py-5 gap-2">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {">"}
          </button>

          <span className="flex items-center gap-1">
            <div>Página</div>
            <div>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </div>
          </span>
          <span className="flex items-center gap-1">
            | Ir a página:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-2 bg-transparent"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Mostrar {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          selectedUser={selectedUser}
          action={action}
          updateFetch={fetchData}
        />
      )}
    </div>
  );
};

export default Users;
