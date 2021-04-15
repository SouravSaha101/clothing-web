import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.jsx";
import SHOP_DATA from "./shop.data.js";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProp }) => (
          <CollectionPreview key={id} {...otherProp}></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
