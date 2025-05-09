import {ReactElement, useEffect, useState} from "react";
import TableHOC from "../components/admin/TableHOC";

import { Column } from "react-table";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserReducerInitialState } from "../types/reducer-types";
import { CustomError } from "../types/api-types";
import { useMyOrdersQuery } from "../redux/api/orderAPI";
import toast from "react-hot-toast";
import { Skeleton } from "../components/loader";
type DataType = {
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement;
  };
  
  const column: Column<DataType>[] = [
    {
      Header: "ID",
      accessor: "_id",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },
    {
      Header: "Discount",
      accessor: "discount",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
      },
  ];


const Orders = () => {
    const {user} = useSelector((state : {userReducer: UserReducerInitialState})=> state.userReducer);

    const {isLoading, error, isError, data} = useMyOrdersQuery(user?._id!);

    const [rows, setRows] = useState<DataType[]>([]);

    if(isError){
        const err = error as CustomError;
        toast.error(err.data.message);
      }
       useEffect(() => {
          if (data)
            setRows(
              data.orders.map((i) => ({
                _id: i.user._id,
                amount: i.total,
                discount: i.discount,
                quantity: i.orderItems.length,
                status: <span className={i.status==="Processing" ? "text-red-500" : i.status === "Shipped" ? "text-green-500" : "text-purple-600"}>{i.status}</span>,
                action: <Link to={`/admin/transaction/${i._id}`}>Manage</Link>
              }))
            );
        }, [data]);


    const Table = TableHOC<DataType>(
        column, 
        rows,
        "dashboard-product-box",
        "Orders",
        rows.length > 6
    )();
  return (
    <div className="container">
        <h1>My Orders</h1>
        {isLoading ? <Skeleton length={20}/> :Table}
    </div>
  );
};

export default Orders;