import "./App.css";
import { useState, useEffect } from "react";
import ProductDetails from "./components/productDetails";
import { Button, Drawer } from "antd";

function App() {
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState(null);
  const [storeId, setStoreId] = useState(null);

  const showDrawer = () => {
    setProductId("8268418646255");
    setStoreId("356555257157305024");
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if(productId && storeId) {
      setOpen(true);
    }
  })
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
          Open
      </Button>
      <Drawer
        title={<h1>Product details</h1>}
        placement={"right"}
        width={"100%"}
        onClose={onClose}
        open={open}
      >
        <ProductDetails product_id={productId} store_sync_id={storeId} setProductId={setProductId} setStoreId={setStoreId}/>
      </Drawer>
    </>
  );
}

export default App;
