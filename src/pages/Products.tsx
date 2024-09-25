import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { FaEye, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import { useState } from "react";
import Search from "../components/Search";
import { Product, ProductMock } from "../mockData/product-mock";

const Products = () => {
  const columnHelper = createColumnHelper<Product>();

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => <span className="font-bold">{info.row.index + 1}.</span>,
      header: "Id",
    }),
    columnHelper.accessor("img", {
      cell: (info) => (
        <img
          src={info?.getValue()}
          alt="..."
          className="rounded-full w-100 h-10 object-cover"
        ></img>
      ),
      header: "Imagen",
    }),
    columnHelper.accessor("title", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Título",
    }),
    columnHelper.accessor("price", {
      cell: (info) => (
        <span>
          ${Number(info.getValue()).toLocaleString("es-ES", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      ),
      header: "Precio",
    }),
    columnHelper.accessor("description", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Descripción",
    }),
  ];

  const [data] = useState(() => [...ProductMock]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="mt-[125px] p-2 container-fluid mx-20">
      <div className="pb-10">
        <h1 className="text-primary text-3xl py-5">Productos</h1>
        <hr />
      </div>
      <div className="flex justify-between mb-2 py-5">
        <div className="w-full flex items-center gap-1">
          <FaSearch />
          <Search
            initValue={globalFilter ?? ""}
            onKeyDown={(value: any) => {
              setGlobalFilter(String(value));
            }}
            className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-primary"
            placeholder="Búsqueda"
          />
        </div>
        <button className="w-[200px] hover:bg-green-500 text-green-500 hidden md:block font-semibold hover:text-white rounded-xl border-2 border-green-500 px-6 py-2 duration-200">
          Crear Producto
        </button>
      </div>
      <div className="md:min-h-[700px]">
        <div className="max-h-[700px] overflow-y-auto">
          <table className="w-full text-left text-normal">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="capitalize px-3.5 py-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}{" "}
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
                      className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-3.5 py-2">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                      <td className="px-3.5 py-2">
                        <div className="flex space-x-4 text-2xl justify-center items-center h-full">
                          <button className="text-blue-500">
                            <FaEye />
                          </button>
                          <button className="text-yellow-500">
                            <FaEdit />
                          </button>
                          <button className="text-red-500">
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
    </div>
  );
};

export default Products;
