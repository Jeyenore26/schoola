import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export function TableRows(props) {
  const [on, setOn] = useState(false);

  return (
    <TableRow className="">
      <TableCell className="text-right p-5">{props.subject}</TableCell>
      <TableCell className="text-right p-5">{props.title}</TableCell>
      <TableCell className="text-right p-5">{props.phone}</TableCell>
      <TableCell className="text-right p-5">{props.id}</TableCell>
      <TableCell
        className="font-medium justify-start items-center flex gap-2 p-5"
        dir="rtl"
      >
        <button>
          <BiEditAlt
            className="text-[23px] hover:opacity-[60%]"
            onClick={() => {
              setOn(!on);
            }}
          />
        </button>
        {props.name}
      </TableCell>
    </TableRow>
  );
}
