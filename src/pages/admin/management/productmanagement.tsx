import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { UserReducerInitialState } from "../../../types/reducer-types";
import { useSelector } from "react-redux";
import { useDeleteProductMutation, useProductDetailsQuery, useUpdateProductMutation } from "../../../redux/api/productAPI";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { server } from "../../../redux/store";
import { Skeleton } from "../../../components/loader";
import { responseToast } from "../../../utils/features";

// const img =
//   "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const Productmanagement = () => {

    const {user} = useSelector(
      (state: {userReducer: UserReducerInitialState}) => state.userReducer
    );

    const params = useParams();
    const navigate = useNavigate();

    const {data, isLoading, isError} = useProductDetailsQuery(params.id!);

  // const [price, setPrice] = useState<number>(2000);
  // const [stock, setStock] = useState<number>(10);
  // const [name, setName] = useState<string>("Puma Shoes");
  // const [photo, setPhoto] = useState<string>(img);
  // const [category, setCategory] = useState<string>("footwear");

  const {price, photo, name, stock, category} = data?.product || {_id: "",photo: "", category: "", name: "", stock: 0, price: ""};

  console.log(data);
  let finalPrice;
  if(data?.product){
    // finalPrice = JSON.parse(data.product.price);
    finalPrice = data.product.price;
  }
  const [priceUpdate, setPriceUpdate] = useState<string>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [categoryUpdate, setCategoryUpdate] = useState<string>(category);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);
  const [photoFile, setPhotoFile] = useState<File>();

  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotoUpdate(reader.result);
          setPhotoFile(file);
        }
      };
    }
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData();
    if(nameUpdate) formData.set("name", nameUpdate);
    if(priceUpdate) formData.set("price", priceUpdate);
    if(stockUpdate !== undefined) formData.set("stock", stockUpdate.toString());
    if(photoFile) formData.set("photo", photoUpdate);
    if(categoryUpdate) formData.set("category", categoryUpdate);

    const res = await updateProduct({
      formData,
      userId: user?._id!,
      productId: data?.product._id!,
    });
  
    responseToast(res, navigate, "/admin/product");
  };



const deleteHandler = async () => {
const res = await deleteProduct({
  userId: user?._id!,
  productId: data?.product._id!,
});

responseToast(res, navigate, "/admin/product");
};


  useEffect(()=> {
    if(data){
      setNameUpdate(data.product.name);
      setPriceUpdate(data.product.price);
      setStockUpdate(data.product.stock);
      setCategoryUpdate(data.product.category);
    }
  }, [data])

   if(isError) return <Navigate to={'/404'}/>

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        {isLoading ? <Skeleton/> : (
          <>
                  <section>
          <strong>ID - {data?.product._id}</strong>
          <img src={`${server}/${photo}`} alt="Product" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red"> Not Available</span>
          )}
          <p>{finalPrice}</p>
        </section>
        <article>
          <button className="product-delete-btn" onClick={deleteHandler}>
            <FaTrash />
          </button>
          <form onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="text"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>

            <div>
              <label>Category</label>
              <input
                type="text"
                placeholder="eg. laptop, camera etc"
                value={categoryUpdate}
                onChange={(e) => setCategoryUpdate(e.target.value)}
              />
            </div>

            <div>
              <label>Photo</label>
              <input type="file" onChange={changeImageHandler} />
            </div>

            {photoUpdate && <img src={photoUpdate} alt="New Image" />}
            <button type="submit">Update</button>
          </form>
        </article>
          </>
        )}
      </main>
    </div>
  );
};

export default Productmanagement;
