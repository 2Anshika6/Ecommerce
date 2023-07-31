import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useAlert } from "react-alert";
import MetaData from "../layout/Header/MetaData";
import { useParams } from "react-router-dom";
import  Pagination from "react-js-pagination";

const Products = ({}) => {
    const dispatch = useDispatch();
    const[currentPage,setCurrentPage]=useState(1);
    const {product,loading,error,productCount,resultPerPage}=useSelector(state => state.products);
    const alert = useAlert();
   const {keyword}=useParams();

   const setCurrentPageNo=(e)=>{
    setCurrentPage(e)
   }
    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
         dispatch(getProduct(keyword,currentPage));
      }, [dispatch,keyword,currentPage,alert,error]);
      
      return <Fragment> {loading ? <Loader /> : 
            <Fragment>
              <MetaData title="PRODUCTS -- ECOMMERCE" />
              <h2 className="productsHeading">Products</h2>
    
              <div className="products">
                {product && product.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>
              
              <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
        </Fragment>
      }
    </Fragment>;
  
};

export default Products;