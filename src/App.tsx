import { onAuthStateChanged, User } from 'firebase/auth';
import { lazy, Suspense, useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Header from './components/header';
import { Skeleton } from './components/loader';
import ProtectedRoute from './components/ProtectedRoute';
import { auth } from './firebase';
import NotFound from './pages/NotFound';
import { getUser } from './redux/api/userAPI';
import { userExist, userNotExist } from './redux/reducer/userReducer';
import { UserReducerInitialState } from './types/reducer-types';

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
const Shipping = lazy(() => import("./pages/shipping"));
const Login = lazy(() => import("./pages/login"));
const Orders = lazy(() => import("./pages/orders"));
const OrderDetails = lazy(() => import("./pages/order-details"));
const ProductByCategory = lazy(()=> import("./pages/productByCategory"));

const Checkout = lazy(()=>import('./pages/Checkout'))
const About = lazy(()=>import('./pages/About'))
const PrivacyPolicy = lazy(()=>import('./pages/PrivacyPolicy'))
const ReturnPolicy = lazy(()=>import('./pages/ReturnPolicy'))
const TermsAndConditions = lazy(()=>import('./pages/TermsAndConditions'));
const Contact = lazy(()=>import('./pages/Contact'));


//admin routes importing 
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Products = lazy(() => import("./pages/admin/products"));
const Customers = lazy(() => import("./pages/admin/customers"));
const Transaction = lazy(() => import("./pages/admin/transaction"));
const Barcharts = lazy(() => import("./pages/admin/charts/barcharts"));
const Piecharts = lazy(() => import("./pages/admin/charts/piecharts"));
const Linecharts = lazy(() => import("./pages/admin/charts/linecharts"));
const Coupon = lazy(() => import("./pages/admin/apps/coupon"));
const Stopwatch = lazy(() => import("./pages/admin/apps/stopwatch"));
const Toss = lazy(() => import("./pages/admin/apps/toss"));
const Signup = lazy(() => import("./components/Signup"));
const NewProduct = lazy(() => import("./pages/admin/management/newproduct"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/productmanagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/transactionmanagement")
);

const App = () => {
  // const {user} = useSelector((state:{userReducer: UserReducerInitialState}) => state.userReducer);

  // console.log(user?.role);

  const dispatch = useDispatch();

  const { user } = useSelector(
    (state: { userReducer: UserReducerInitialState }) => state.userReducer
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const data = await getUser(user.uid);
          if (data && data.user) {
            dispatch(userExist(data.user));
          } else {
            dispatch(userNotExist());
            console.warn("User exists in Firebase but not in backend DB");
          }
        } catch (err) {
          dispatch(userNotExist());
          console.error("Failed to fetch user from backend", err);
        }
      } else {
        dispatch(userNotExist());
        console.log("No user is signed in.");
      }
    });

    // cleanup function to avoid memory leaks
    return () => unsubscribe();
  }, [dispatch]);


  return (
   <Router>
{/* Header */}
<Header user={user} />
<Suspense fallback={<> <Skeleton width='80vw'/>  <Skeleton width='80vw'/> </>}>
<Routes>

<Route path="/" element={<Home />}/>
<Route path="/search" element={<Search />}/>
<Route path="/cart" element={<Cart />}/>
<Route path='/collection/:category' element={<ProductByCategory/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/term' element={<TermsAndConditions/>}/>
<Route path='/privacy' element={<PrivacyPolicy/>}/>
<Route path='/return' element={<ReturnPolicy/>}/>

{/* Not logged In Route */}
/

<Route
            path="/login"
            element={
              <ProtectedRoute isAuthenticated={user ? false : true}>
                <Login />
              </ProtectedRoute>
            }
          />

<Route
            path="/signup"
            element={
              <ProtectedRoute isAuthenticated={user ? false : true}>
                <Signup />
              </ProtectedRoute>
            }   
          />
{/* logged In User Routes */}

<Route element={<ProtectedRoute isAuthenticated={user ? true : false}/>}>
<Route path="/shipping" element={<Shipping />}/>
<Route path="/order" element={<Orders />}/>
<Route path="/order-id" element={<OrderDetails />}/>
<Route path='/pay' element={<Checkout/>} />
</Route>


{/* Admin routes */}


<Route
  element={
    <ProtectedRoute isAuthenticated={true} admin={user?.role == "admin"? true : false} />
  }
>
  <Route path="/admin/dashboard" element={<Dashboard />} />
  <Route path="/admin/product" element={<Products />} />
  <Route path="/admin/customer" element={<Customers />} />
  <Route path="/admin/transaction" element={<Transaction />} />
  {/* Charts */}
  <Route path="/admin/chart/bar" element={<Barcharts />} />
  <Route path="/admin/chart/pie" element={<Piecharts />} />
  <Route path="/admin/chart/line" element={<Linecharts />} />
  {/* Apps */}
  <Route path="/admin/app/coupon" element={<Coupon />} />
  <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
  <Route path="/admin/app/toss" element={<Toss />} />

  {/* Management */}
  <Route path="/admin/product/new" element={<NewProduct />} />

  <Route path="/admin/product/:id" element={<ProductManagement />} />

  <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
</Route>
<Route path='*' element={<NotFound/>}>

</Route>
</Routes>
</Suspense>
<Toaster
position="bottom-center"/>
   </Router>
  )
}

export default App;