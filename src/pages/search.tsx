import { useState } from "react";
import toast from "react-hot-toast";
import { BsFilterRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Skeleton } from "../components/loader";
import ProductCard from "../components/product-card";
import { useCategoriesQuery, useSearchProductsQuery } from "../redux/api/productAPI";
import { addToCart } from "../redux/reducer/cartReducer";
import { CustomError } from "../types/api-types";
import { CartItem } from "../types/types";


const Search = () => {
  const {data : categoriesResponse, isLoading: categoriesLoading, isError, error} = useCategoriesQuery("");

  const dispatch = useDispatch();

  if(isError){
    const err = error as CustomError;
    toast.error(err.data.message)
  }

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  // const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const {isLoading : productLoading, data: searchedData, isError:productIsError, error:productError} = useSearchProductsQuery({search, sort, category, page});
  console.log(searchedData);

  if(productIsError){
    const err = productError as CustomError;
    toast.error(err.data.message)
  }

  const addToCardHandler = (cartItem: CartItem) => {
    if(cartItem.stock < 1){
      return toast.error("Out of Stock");
    }
    dispatch(addToCart(cartItem))
    toast.success("Added To Cart");
  };

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  return (
    <div className="product-search-page">
      
      <aside className={`sidebar ${showFilters ? "open" : ""}`}>
        <div className="filterTag">
        <h2>Filters</h2>
        <button className="filter-cancel" onClick={() => setShowFilters(false)}>
          ✕
        </button>
        </div>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Featured</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h3>Categories</h3>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            {
              !categoriesLoading && categoriesResponse?.categories.map((i)=> (
                <option key={i} value={i}>{i.toUpperCase()}</option>
              ))
            }
          
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <div className="filter">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="filter-toggle" onClick={() => setShowFilters(true)}>
        <BsFilterRight />
      </button>
        </div>

          {
            productLoading ? <Skeleton/> : (
              <div className="search-product-list">
           
              {
                searchedData?.products.map((product, index) => (
                  <ProductCard
                key={index}
                productId={product._id}
                name={product.name}
                price={product.price}
                stock={product.stock}
                handler={addToCardHandler}
                photo={product.photo}
                // description={product.description}
                tag={product.tag || "New"}
                sale={product.sale || false}
                numOfReviews={product.numOfReviews || 0}
                star={product.star || 0}
              />
                ))
              }
         
          </div>
            )
          }
      

        
          {searchedData && searchedData.totalPage>1 && (
            <article>
            <button
              disabled={!isPrevPage}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span>
              {page} of {searchedData.totalPage}
            </span>
            <button
              disabled={!isNextPage}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </article>
          )}
        
      </main>
    </div>
  );
};

export default Search;