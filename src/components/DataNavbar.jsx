import React from "react";
import { FaTable } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const DataNavbar = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <h1 className="text-[30px] font-medium ">Заказы</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-[64px] w-[139px] items-center justify-center gap-2 border-r-2 p-[15px]">
          <span>
            <FaTable />
          </span>
          <span>Таблица</span>
        </div>
        <div className="flex h-[64px] w-[139px] items-center justify-center gap-2 border-r-2 p-[15px]">
          <span>
            <FaLocationDot />
          </span>
          <span>Карта</span>
        </div>
        <div className="flex h-[64px] w-[139px] items-center justify-center gap-2 border-r-2 p-[15px]">
          <span>
            <MdEdit />
          </span>
          <span>Действия</span>
        </div>
        <div className="flex h-[64px] w-[139px] items-center justify-center gap-2 border-r-2 p-[15px]">
          <span>
            <FaPlus />
          </span>
          <span>Добавить</span>
        </div>
      </div>
    </div>
  );
};

export default DataNavbar;
