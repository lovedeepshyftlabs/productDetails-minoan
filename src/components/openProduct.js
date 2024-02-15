import { useState, useEffect } from "react";
import ProductDetails from "./productDetails";
import { Button, Drawer } from "antd";

const OpenProduct = () => {
  const [isOpen, setOpen] = useState(false);
  const [productId, setProductId] = useState(null);
  const [storeId, setStoreId] = useState(null);

  const showDrawer = () => {
    setProductId("8268418646255");
    setStoreId("356555257157305024");
  };
  const handleClose = () => {
    setProductId(null);
    setStoreId(null);
    setOpen(false);
  };
  useEffect(() => {
    if (productId && storeId) {
      setOpen(true);
    }
  });
  return (
    <>
      <Button type="primary" onClick={showDrawer}>Open</Button>
      <Drawer
        title={<h1>Product details</h1>}
        placement={"right"}
        width={"100%"}
        onClose={handleClose}
        open={isOpen}
      >
        <ProductDetails
          product_id={productId}
          store_sync_id={storeId}
          handleClose={handleClose}
        />
      </Drawer>
    </>
  );
};

export default OpenProduct;
