import "./App.css";
import { useState } from "react";
import ProductDetails from "./components/productDetails";
import { Button, Drawer } from "antd";

function App() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
        <ProductDetails product_id="8268418646255" store_sync_id="356555257157305024" setOpen={setOpen}/>
      </Drawer>
    </>
  );
}

export default App;
