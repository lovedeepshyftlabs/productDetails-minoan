import { useState, useEffect} from "react";
import { Carousel, Table, Divider } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import HTMLReactParser from "html-react-parser";
import axios from 'axios'
const ProductDetails = (props) => {
  const { product_id, store_sync_id } = props;
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

  const [dataSource, setDataSource] = useState();
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.post('https://dev-shopify-api.minoanexperience.com/bulksync/getProductDetails',{
            "product_id": product_id,
            "store_sync_id": store_sync_id
        });
        setDataSource(response?.data);
    };
    fetchData();
  }, [])

  const tableData = dataSource?.variants?.map((variant) => ({
    key: variant?.id,
    title: variant?.title,
    sku: variant?.sku,
    quantity: variant?.inventory_quantity,
  }));
  return (
    <>
      <div style={{ marginLeft: "250px", width: "80%" }}>
        <div>
          <h1>Product details </h1>
        </div>
        <Divider />
        <div className="position">
          <div className="carousel-ui">
            <Carousel
              arrows={true}
              prevArrow={<LeftCircleOutlined />}
              nextArrow={<RightCircleOutlined />}
            >
              {dataSource?.images.map((image) => (
                <div key={image.id}>
                  <img src={image.src} alt={`image with ${image?.id}`} className="contentStyle"></img>
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
              {typeof dataSource?.body_html === 'string' ? HTMLReactParser(dataSource.body_html.toString()) : null}
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