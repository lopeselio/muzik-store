import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import RegisterLogin from './components/Register_login';
import Register from './components/Register_login/register';
import Shop from './components/Shop';
import ProductPage from './components/Product';
import ResetUser from './components/Reset_user';
import ResetPass from './components/Reset_user/reset_pass';

import UserDashboard from './components/User';
import AddProduct from './components/User/Admin/add_product';
import ManageCategories from './components/User/Admin/manage_categories';
import UserCart from './components/User/cart';
import UpdateProfile from './components/User/update_profile';
import ManageSite from './components/User/Admin/manage_site';
import AddFile from './components/User/Admin/add_file';

import PageNotFound from './components/utils/page_not_found';


const Routes = () => {
  return(
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={Auth(UserDashboard,true)}/>
        <Route path="/user/cart" exact component={Auth(UserCart,true)}/>
        <Route path="/user/user_profile" exact component={Auth(UpdateProfile,true)}/>
        <Route path="/admin/add_product" exact component={Auth(AddProduct,true)}/>
        <Route path="/admin/manage_categories" exact component={Auth(ManageCategories,true)}/>
        <Route path="/admin/site_info" exact component={Auth(ManageSite,true)}/>
        <Route path="/admin/add_file" exact component={Auth(AddFile,true)}/>

        <Route path="/reset_password/:token" exact component={Auth(ResetPass,false)}/>
        <Route path="/reset_user" exact component={Auth(ResetUser,false)}/>
        <Route path="/product_detail/:id" exact component={Auth(ProductPage,null)}/>
        <Route path="/register" exact component={Auth(Register,false)}/>
        <Route path="/register_login" exact component={Auth(RegisterLogin,false)}/>
        <Route path="/shop" exact component={Auth(Shop,null)}/>
        <Route path="/" exact component={Auth(Home,null)}/>
        <Route component={Auth(PageNotFound)}/>

      </Switch>
    </Layout>

  )
}

export default Routes;
