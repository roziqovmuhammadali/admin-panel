import React from "react";

const MarketingTable = () => {
  return (
    <div className="">
      <div>
        <table className=" flex flex-col items-center justify-between border">
          <thead className="flex w-[90%] flex-col justify-around border-2">
            <tr className="flex  justify-evenly space-x-52">
              <th className="pr-24">Название</th>
              <th className="pl-10">Начало акции</th>
              <th>Конец акции</th>
              <th className="pr-5">Статус</th>
            </tr>
          </thead>
          <tbody className="flex w-full flex-col justify-around border-2 text-[14px]">
            <tr className="flex justify-around space-y-3">
              <td>Vulputate velit lacus, enim viverra quis.</td>
              <td>10.06.2021</td>
              <td className="pl-8">01.09.2021</td>
              <td className="pl-7">
                <span className="h-[24px] w-[174px] rounded-md bg-blue-400 text-[14px] text-blue-600 ">
                  Активный
                </span>
              </td>
            </tr>
            <tr className="flex justify-around space-y-3">
              <td>Eget vulputate iaculis aliquam vel nulla tristique nec.</td>
              <td className="pl-8">10.06.2021</td>
              <td className="pl-7">01.09.2021</td>
              <td>
                {" "}
                <span className="h-[24px] w-[144px] rounded-lg bg-blue-400 text-[14px] text-blue-600 ">
                  Активный
                </span>
              </td>
            </tr>
            <tr className="flex justify-around space-y-3">
              <td>Et sed eu volutpat tincidunt.</td>
              <td className="pl-8">10.06.2021</td>
              <td className="pl-7">01.09.2021</td>
              <td>
                {" "}
                <span className="h-[24px] w-[144px] rounded-lg bg-blue-400 text-[14px] text-blue-600 ">
                  Активный
                </span>
              </td>
            </tr>
            <tr className="flex justify-around space-y-3">
              <td>Quam morbi laoreet arcu amet, orci, volutpat.</td>
              <td>10.06.2021</td>
              <td>01.09.2021</td>
              <td>
                {" "}
                <span className="h-[24px] w-[144px] rounded-lg bg-blue-400 text-blue-600 ">
                  Активный
                </span>
              </td>
            </tr>
            <tr className="flex justify-around space-y-3">
              <td>Ut ut sem arcu cursus.</td>
              <td>10.06.2021</td>
              <td>01.09.2021</td>
              <td>
                {" "}
                <span className="h-[24px] w-[144px] rounded-lg bg-blue-400 text-blue-600 ">
                  Активный
                </span>
              </td>
            </tr>
            <tr className="flex justify-around space-y-3">
              <td>Libero neque, et amet elementum diam amet nisl cras.</td>
              <td>10.06.2021</td>
              <td>01.09.2021</td>
              <td>
                {" "}
                <span className="h-[24px] w-[144px] rounded-lg bg-blue-400 text-blue-600 ">
                  Активный
                </span>
              </td>
            </tr>
            <tr className="flex justify-around space-y-3">
              <td>Enim, a ipsum mattis est ultrices.</td>
              <td>10.06.2021</td>
              <td>01.09.2021</td>
              <td>
                {" "}
                <span className="h-[24px] w-[144px] rounded-lg bg-blue-400 text-blue-600 ">
                  Активный
                </span>
              </td>
            </tr>
            <tr className="flex justify-around space-y-3">
              <td>Parturient sit lobortis ultrices dictum quis egestas.</td>
              <td>10.06.2021</td>
              <td>01.09.2021</td>
              <td>
                {" "}
                <span className="h-[24px] w-[144px] rounded-lg bg-blue-400 text-blue-600 ">
                  Активный
                </span>
              </td>
            </tr>
            <tr className="flex justify-around space-y-3">
              <td>Feugiat vitae viverra purus massa iaculis in.</td>
              <td>10.06.2021</td>
              <td>01.09.2021</td>
              <td>
                <span className="h-[24px] w-[144px] rounded-lg bg-blue-400 text-blue-600 ">
                  Активный
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketingTable;
