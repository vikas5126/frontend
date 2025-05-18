import { ReactElement, useEffect, useMemo, useState } from "react";
import TableHOC from "../components/admin/TableHOC";

import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import { Skeleton } from "../components/loader";
import { useMyOrdersQuery } from "../redux/api/orderAPI";
import { CustomError } from "../types/api-types";
import { UserReducerInitialState } from "../types/reducer-types";
type DataType = {
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement | null;
  };
  
const baseColumns: Column<DataType>[] = [
  { Header: "ID", accessor: "_id" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Status", accessor: "status" },
];

const Orders = () => {
    const {user} = useSelector((state : {userReducer: UserReducerInitialState})=> state.userReducer);

    const isAdmin = user?.role === "admin"; // or any condition you use

    // console.log(user?._id);

    const columns = isAdmin
    ? [
        ...baseColumns,
        {
          Header: "Action",
          accessor: "action" as const,
        },
      ]
    : baseColumns;

    const {isLoading, error, isError, data} = useMyOrdersQuery(user?._id ?? "");
    // console.log(data);

    // console.log(data?.orders[0].user._id);

    const [rows, setRows] = useState<DataType[]>([]);

    useEffect(() => {
  if (isError) {
    const err = error as CustomError;
    toast.error(err.data.message);
  }
}, [isError, error]);

    useEffect(() => {
      
  if (data) {
    setRows(
      data.orders.map((i) => ({
        _id: i.user._id,
        amount: i.total,
        discount: i.discount,
        quantity: i.orderItems.length,
        status: (
          <span
            className={
              i.status === "Processing"
                ? "text-red-500"
                : i.status === "Shipped"
                ? "text-green-500"
                : "text-purple-600"
            }
          >
            {i.status}
          </span>
        ),
        action: isAdmin ? <Link to={`/admin/transaction/${i._id}`}>Manage</Link> : null,
      }))
    );
  }
}, [data, isAdmin]);



const Table = useMemo(() => {
  return TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  );
}, [columns, rows]);

  return (
    <div className="container">
        <h1>My Orders</h1>
        {isLoading ? <Skeleton length={20}/> : <Table />}
    </div>
  );
};

export default Orders;