import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";


import HomeScreen from "../js/screens/HomeScreen";
import Navbar from "../js/components/Navbar";
import SmoothScroll from "./extra/SmoothScroll";
import Error404 from "./extra/Error404";
import GetQuoteScreen from "../js/screens/GetQuoteScreen";
import BuyerDashboard from "../js/screens/BuyerDashboard";
import SignupScreen from "../js/screens/SignupScreen";
import LoginScreen from "../js/screens/LoginScreen";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DefaultLayout = () => {
  const location = useLocation();
  const [isNavHidden, setIsNavHidden] = useState(false);

  // to hide navbar
  // useEffect(() => {
  //   const hiddenNavRoutes = ["/login"];
  //   const result = hiddenNavRoutes.includes(location.pathname);
  //   setIsNavHidden(result);
  // }, [location.pathname]);

  return (
    <div className="layout flex flex-col justify-between ">
      <div className={classNames("navBar", isNavHidden && " hidden")}>
        <Navbar />
      </div>

      {/* // checking if childs inside it is possible for each*/}
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/getQuote" element={<GetQuoteScreen />} />

          <Route path="buyer">
            <Route path="dashboard" element={<BuyerDashboard />} />
          </Route>
          <Route path="seller">
            {/* <Route path="registration" element={<SellerRegistrationScreen />} />
            <Route path="individual" element={<SellerIndividual />} />
            <Route
              path="individual/address"
              element={<SellerIndividualAddress />}
            />
            <Route path="store" element={<SellerStoreOwner />} />
            <Route path="store/address" element={<SellerStoreOwnerAddress />} />
            <Route path="registered" element={<SellerRegistered />} /> */}
          </Route>
          <Route path="buying">
            {/* <Route path="purchaseHistory" element={<PurchaseHistory />} />
            <Route path="offers" element={<OffersScreen />} />
            <Route path="savedSeller" element={<SavedSeller />} /> */}
          </Route>
          <Route path="selling">
            {/* <Route path="sold" element={<SoldMenu />} />
            <Route path="sold/product" element={<SoldMenuOption />} />
            <Route path="activelistings" element={<ActiveListings />} />
            <Route path="pendinglistings" element={<PendingListings />} />
            <Route
              path="activelistings/product/:productId"
              element={<ActiveListingProduct />}
            />
            <Route path="activelistings/edit">
              <Route
                path="general/product/:productId"
                element={<GeneralScreen />}
              />
              <Route
                path="media/product/:productId"
                element={<MediaScreen />}
              />
              <Route
                path="details/product/:productId"
                element={<DetailsScreen />}
              />
              <Route
                path="location/product/:productId"
                element={<LocationScreen />}
              />
            </Route> */}
          </Route>


          <Route path="user">
            {/* <Route path="messages" element={<MessageScreen />} />
            <Route path="admin" element={<AdminScreen />} />
            <Route
              path="admin/editUser/:userId"
              element={<UserEditScreen />}
            />
            <Route
              path="admin/listings/:userId"
              element={<UserListingScreen />}
            />
            <Route
              path="admin/listings/edit/:listingId"
              element={<UserListingAdminEditingScreen />}
            /> */}
          </Route>

          <Route path="login" element={<LoginScreen />}>
            {/* <Route path="username" element={<SignInUsernameScreen />} />
            <Route path="password" element={<SignInPasswordScreen />} />
            <Route path="success" element={<SignInSuccessScreen />} />
            <Route path="forgotPassword" element={<ForgotPasswordScreen />} />
            <Route
              path="forgotPassword/verifyOTP"
              element={<ForgotPasswordVerifyOTPScreen />}
            />
            <Route
              path="forgotPassword/change"
              element={<ChangePasswordScreen />}
            />
            <Route
              path="forgotPassword/change/success"
              element={<ChangePasswordSuccessScreen />}
            /> */}
          </Route>

          <Route path="signup" element={<SignupScreen/>}>
            {/* <Route path="" element={<SignUpFormScreen />} />
            <Route path="verify" element={<SignUpPhoneVerification />} /> */}
          </Route>
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" replace={true} />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </SmoothScroll>
      
      {/* if we want to implement a footer
      <div className="w-full">
        <Footer />
      </div> */}
    </div>
  );
};

export default DefaultLayout;
