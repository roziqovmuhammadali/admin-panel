import React from "react";
import { FaTable } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiTableFill } from "react-icons/ri";

const DataNavbar = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between border-b-2">
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
      <div className="flex h-[56px] w-[100%] items-center justify-between bg-[#F7F9FB]">
        <div className=" flex h-[32px] w-[400px] items-center rounded-lg bg-white p-4">
          <span>
            <IoIosSearch />
          </span>
          <input
            type="text"
            placeholder="Поиск"
            className="w-[350px] pl-2 outline-none"
          />
        </div>
        <div>
          <div className="flex items-center rounded-lg border-2 bg-white">
            <span className="flex h-8 w-8 items-center justify-center text-blue-600">
              <IoIosArrowBack />
            </span>
            <span className="flex h-8 w-[81px] items-center justify-center border-x-2  ">
              Сегодня
            </span>
            <span className="flex h-8 w-8 items-center justify-center text-blue-600">
              <IoIosArrowForward />
            </span>
          </div>
          <div>
            <span>
              <RiTableFill />
            </span>
            <span>Столбцы</span>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataNavbar;
