import { ReactElement, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Column } from "react-table";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TableHOC from "../../components/admin/TableHOC";
import { useSelector } from "react-redux";
import { UserReducerInitialState } from "../../types/reducer-types";
import { CustomError } from "../../types/api-types";
import toast from "react-hot-toast";
import { responseToast } from "../../utils/features";
import { useAllUsersQuery, useDeleteUserAccountMutation } from "../../redux/api/userAPI";

interface DataType {
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  // {
  //   Header: "Avatar",
  //   accessor: "avatar",
  // },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];




const Customers = () => {
  const {user} = useSelector((state : {userReducer: UserReducerInitialState})=> state.userReducer);

  const { data, isError, error } = useAllUsersQuery(user?._id!);

  const [rows, setRows] = useState<DataType[]>([]);

  const [deleteUser] = useDeleteUserAccountMutation();

  const deleteHandler = async (userId: string) => {
    const res = await deleteUser({ userId, adminUserId: user?._id! });
    responseToast(res, null, "");
  };

  if (isError) {
    const err = error as CustomError;
    toast.error(err.data.message);
  }

  useEffect(() => {
    if (data)
      setRows(
      data.users.map((i: { _id: string; name: string; email: string; gender: string; role: string }) => ({
        name: i.name,
        email: i.email,
        gender: i.gender,
        role: i.role,
        action: (
        <button onClick={() => deleteHandler(i._id)}>
          <FaTrash />
        </button>
        ),
      }))
      );
  }, [data]);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Customers",
    rows.length > 6
  )();

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table}</main>
    </div>
  );
};

export default Customers;
