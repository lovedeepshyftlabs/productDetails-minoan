import { useState, useEffect } from "react";
import { Carousel, Table, Divider, Flex, Spin, Result, Button } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import HTMLReactParser from "html-react-parser";
import axios from "axios";
const ProductDetails = (props) => {
  const { product_id, store_sync_id, handleClose } = props;
  const [dataSource, setDataSource] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = "https://dev-shopify-api.minoanexperience.com/bulksync/getProductDetails";

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  const resetState = () => {
    setProductId(null);
    setStoreId(null);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          url,
          {
            product_id: product_id,
            store_sync_id: store_sync_id,
          }
        );
        setDataSource(response?.data);
      } catch (error) {
        console.log(error?.response?.status);
        setError(error?.response?.status);
      } finally {
        setLoading(false);
      }
    };
    if(product_id && store_sync_id) {
      fetchData();
    }
  }, [product_id, store_sync_id]);

  const tableData = dataSource?.variants?.map((variant) => ({
    key: variant?.id,
    title: variant?.title,
    sku: variant?.sku,
    quantity: variant?.inventory_quantity,
  }));

  if (loading) {
    return (
      <div>
        <Flex style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "250px"}}>
          <Spin size="large" />
        </Flex>
      </div>
    );
  }
  if(error) {
    return (
        <Result
            status={error}
            title={error}
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={handleClose}>Back Home</Button>}
        />
    )
  }
  return (
    <>
      <div>
        <div className="position">
          <div className="carousel-ui">
            <Carousel
              arrows={true}
              prevArrow={<LeftCircleOutlined />}
              nextArrow={<RightCircleOutlined />}
            >
              {dataSource?.images.map((image) => (
                <div key={image.id}>
                  <img
                    src={image.src}
                    alt={`image with ${image?.id}`}
                    className="contentStyle"
                  ></img>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="refills">
            <div>
              <h1>Cleaner Refills</h1>
              <div className="key-value-pair">
                <span className="key">Product ID</span>
                <span className="dot">:</span>
                <span className="value">{dataSource?.id}</span>
              </div>
              <div className="key-value-pair">
                <span className="key">Product Status</span>
                <span className="dot">:</span>
                <span className="value">{dataSource?.status}</span>
              </div>
              <div className="key-value-pair">
                <span className="key">Vendor</span>
                <span className="dot">:</span>
                <span className="value">{dataSource?.vendor}</span>
              </div>
              <div className="key-value-pair">
                <span className="key">Product Title</span>
                <span className="dot">:</span>
                <span className="value">{dataSource?.title}</span>
              </div>
            </div>
            <Divider />
            <div>
              <h1>Description</h1>
              {typeof dataSource?.body_html === "string"
                ? HTMLReactParser(dataSource.body_html.toString())
                : null}
            </div>
            <Divider />
            <div>
              <h1>Variants</h1>
              <Table
                dataSource={tableData}
                columns={columns}
                pagination={false}
                scroll={{ x: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
