import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DataNavbar from "./DataNavbar";

// http://localhost:3000/datagrid   (http://localhost:3000 map uchun

const columns = [
  { field: "id", headerName: "№", width: 70 },
  { field: "firstName", headerName: "Клиент", width: 130 },
  { field: "lastName", headerName: "Ид.заказа", width: 130 },
  { field: "Таймер", headerName: "Таймер", width: 150 },

  { field: "Филиал", headerName: "Филиал", width: 90 },
  { field: "Курьер", headerName: "Курьер", width: 90 },
  { field: "доставки", headerName: "Тип доставки", width: 130 },
  { field: "заказа", headerName: "Цена заказа", width: 160 },
  {
    field: "fullName",
    headerName: "Адресс клиента",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div
      style={{
        width: "100%",
        background: "white",
        marginLeft: "10px",
        marginRight: "10px",

        marginBottom: "10px",
        padding: "6px",
        background: "#DCE9F9",
      }}
    >
      <DataNavbar />
      <div className="mt-[20px] w-full bg-white ">
        <div>
          <ul className="mb-2 flex w-full items-center gap-8 px-4 py-5 font-medium text-[#6E8BB7]">
            <li>
              Курьер в пути
              <span className="ml-2 h-[24px] w-[24px] rounded-[50%]  bg-[#92A8C9] p-1">
                12
              </span>
            </li>
            <li>
              Новый
              <span className=" ml-2 h-[24px] w-[35px] rounded-[50%]  bg-[#92A8C9] p-1">
                12
              </span>
            </li>
            <li>
              Оператор принял
              <span className="ml-2 h-[24px] w-[24px] rounded-[50%]  bg-[#92A8C9] p-1">
                12
              </span>
            </li>
            <li>
              Загатовка
              <span className="ml-2 h-[24px] w-[24px] rounded-[50%] bg-[#92A8C9] p-1">
                12
              </span>
            </li>
            <li>
              Завершен
              <span className="ml-2 h-[24px] w-[24px] rounded-[50%] bg-[#92A8C9] p-1">
                12
              </span>
            </li>
            <li>
              Все заказы
              <span className="ml-2 h-[24px] w-[24px] rounded-[50%] bg-[#92A8C9] p-1">
                12
              </span>
            </li>
          </ul>
          <hr className="ml-3 w-[97%] pb-3" />
        </div>
        <DataGrid
          style={{
            marginLeft: "10px",
            marginRight: "10px",

            marginBottom: "10px",
            background: "white",
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
