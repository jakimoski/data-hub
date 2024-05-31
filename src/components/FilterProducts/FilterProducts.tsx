// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
// import FilterOption from "./FilterOptions";
// import { FilterPropsType } from "../../types/types";
// import { Product } from "../../data/data";

// export default function FilterProducts({
//   updateProducts,
//   productsList,
// }: FilterPropsType) {
//   // SET FILTER STATE
//   // Set state for current selected filter - default: Show All
//   const [filterTerm, setFilterTerm] = useState("Show All");
//   // Set state for all category brand filters
//   const [brandCategories, setBrandCategories] = useState<string[]>();

//   // FUNCTION TO FILTER BY BRAND () =>
//   const filterByBrand = (event: any) => {
//     //#1 - Get brand selection from current filter target
//     const brand: string = event.target.innerText.toString();
//     //#2 - Update state for  current selected filter
//     setFilterTerm(brand);
//     //#3 - Filer the product list fir chosen brand
//     const filtered = productsList.filter(
//       (product: Product) =>
//         product.manufacturer.toLowerCase() === brand.toLowerCase()
//     );
//     //#4 - Set state for listProducts that display the items in products wrapper
//     updateProducts(filtered);
//   };

//   //   //FUNCTION SHOW ALL FILTER
//   //   const removeFilter = () => {
//   //     //#1 - Set state for listProducts that display the items in products wrapper
//   //     updateProducts(productsList);
//   //     //#2 - Update state for  current selected filter
//   //     setFilterTerm("Show All");
//   //   };

//   // FUNCTION TO GET NUMBER OF ITEMS PER BRAND
//   const filerBrandLength = (name: string) => {
//     const newArr = productsList.filter(
//       (el: Product) => el.manufacturer.toLowerCase() === name.toLowerCase()
//     );

//     return newArr.length;
//   };

//   // USE EFFECT UPDATE WHEN PRODUCT LIST CHANGE(PRODUCT LIST LOADS WHEN PAGE FIRST LOADS AND SETS CURRENT BRAND CATEGORY FILTER ITEMS)
//   useEffect(() => {
//     const BrandCategories = Array.from(
//       new Set(productsList.map((el) => el.manufacturer))
//     );
//     setBrandCategories(BrandCategories);
//   }, [productsList]);

//   return (
//     <div className="filter-wrapper">
//       <h3 className="filter-wrapper__title">Filter by:</h3>

//       {/* GENDER FILTER GROUP */}

//       {/* BRAND FILTER GROUP */}
//       <div className="filter-group">
//         <h4 className="filter-group__title">Brand</h4>
//         {brandCategories
//           ? brandCategories.map((el, idx) => (
//               <FilterOption
//                 key={idx}
//                 category={el}
//                 isActive={filterTerm}
//                 filterProducts={filterByBrand}
//                 filerItemsLength={filerBrandLength}
//               />
//             ))
//           : null}
//       </div>
//     </div>
//   );
// }
