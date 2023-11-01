import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export function TableRowsPhone(props) {
  const [on, setOn] = useState(false);

  return (
    <div className="bg-[#f2f1f6]" dir="rtl">
      <div className="grid grid-rows-5 pt-3 gap-3 text-[16px] bg-gray-100 border-2 rounded-sm mb-5 bg-white">
        <div className="flex items-center border-b-2 pb-2 pr-5">
          <p className="ml-[5rem] font-bold">الاسم</p>
          <p className="">{props.name}</p>
        </div>
        <div className="flex items-center border-b-2 pb-2 pr-5">
          <p className="ml-[3rem] font-bold">رقم الهاتف</p>
          <p className=""> {props.id}</p>
        </div>
        <div className="flex items-center border-b-2 pb-2 pr-5">
          <p className="ml-[5rem] font-bold">المادة</p>
          <p className=""> {props.phone}</p>
        </div>
        <div className="flex items-center border-b-2 pb-2 pr-5">
          <p className="ml-[5rem] font-bold"> الراتب</p>
          <p className=""> {props.title}</p>
        </div>
        <div className="flex items-center pb-2 pr-5">
          <p className="ml-[5rem] font-bold"> الخصم</p>
          <p className=""> {props.subject}</p>
        </div>
      </div>
    </div>
  );
}