import { ChangeEvent, useState, FormEvent } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { UserReducerInitialState } from "../../../types/reducer-types";
import { useSelector } from "react-redux";
import { useNewProductMutation } from "../../../redux/api/productAPI";
import { useNavigate } from "react-router-dom";
import { responseToast } from "../../../utils/features";

const NewProduct = () => {
  const {user} = useSelector(
    (state: {userReducer: UserReducerInitialState}) => state.userReducer
  );

  const [newProduct] = useNewProductMutation();
  const navigate = useNavigate()

  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<string>();
  const [stock, setStock] = useState<number>(1);
  const [photoPrev, setPhotoPrev] = useState<string>("");
  const [photo, setPhoto] = useState<File>();
  const [description, setDescription] = useState<string>("");
  const [sale, setSale] = useState<boolean>(false);
  const [tag, setTag] = useState<string>("");


  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotoPrev(reader.result);
          setPhoto(file);
        }
      };
    }
  };

  const submitHandler = async (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(!name || !price || !stock || !category || !photo || !description)
      return ;

    const formData = new FormData();
    formData.set("name", name);
    formData.set("price", price.toString());
    formData.set("stock", stock.toString());
    formData.set("category", category);
    formData.set("photo", photo)
    formData.set("description", description);
    formData.set("tag", tag);
    formData.set("sale", sale.toString());


    const res = await newProduct({
      id:user?._id!,
      formData
    })

    responseToast(res, navigate, "/admin/product");
  }

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <article>
          <form onSubmit={submitHandler}>
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Price</label>
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
                required
              />
            </div>

            <div>
              <label>Category</label>
              <input
                type="text"
                placeholder="eg. laptop, camera etc"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Tag</label>
              <input type="text" placeholder="select a tag on product" value={tag} onChange={(e) => setTag(e.target.value)}/>
            </div>
            <div>
              <label>
              <input type="hidden" name="agree" value="false" />
              <input type="checkbox" name="agree" onChange={(e) => setSale(e.target.checked)}/>
              Sale
              </label>
            </div>

            <div>
              <label>Description</label>
              {/* <input
                type="text"
                placeholder="eg. laptop, camera etc"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              /> */}
              <textarea value={description} cols={40} rows={8} onChange={(e) => setDescription(e.target.value)} placeholder="about product ...." required></textarea>
            </div>

            <div>
              <label>Photo</label>
              <input type="file" onChange={changeImageHandler} required/>
            </div>

            {photoPrev && <img src={photoPrev} alt="New Image" />}
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
