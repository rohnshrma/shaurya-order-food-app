import React, { useState } from "react";
import MenuItem from "./MenuItem";
const Menu = ({ menuItems, addToCart }) => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [subCategoryFilter, setSubCategoryFilter] = useState("");
  const [vegNonVegFilter, setVegNonVegFilter] = useState("");

  const filteredItems = menuItems
    .filter((item) => {
      return (
        (categoryFilter === "" || item.category === categoryFilter) &&
        (subCategoryFilter === "" || item.subCategory === subCategoryFilter) &&
        (vegNonVegFilter === "" || item.vegNonVeg === vegNonVegFilter)
      );
    })
    .reduce((acc, item) => {
      acc[item.subCategory] = acc[item.subCategory] || [];
      acc[item.subCategory].push(item);
      return acc;
    }, {});

    
  const groupedItems = menuItems.reduce((acc, item) => {
    acc[item.subCategory] = acc[item.subCategory] || [];
    acc[item.subCategory].push(item);
    return acc;
  }, {});

  console.log(groupedItems);

  return (
    <div>
      <h2 className="mb-4">Menu</h2>
      {Object.keys(groupedItems).map((subCategory) => {
        return (
          <div key={subCategory} className="mb-5">
            <h3 className="mb-3 subCategory">{subCategory}</h3>
            <div className="row">
              {groupedItems[subCategory].map((item) => {
                return (
                  <MenuItem key={item.id} item={item} addToCart={addToCart} />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
