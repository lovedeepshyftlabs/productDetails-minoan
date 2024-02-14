import React from "react";
import { Carousel, Tag, Table, Divider } from "antd";
import { LeftCircleOutlined, RightCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
const productDetails = () => {
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
      title: (
        <span>
            Quantity <QuestionCircleOutlined />
        </span>
      ),
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  const data = [
    {
      key: "1",
      title: "$title",
      sku: "$sku",
      quantity: "$quantity",
    },
  ];
  return (
    <>
      <div style={{ marginLeft: "250px", width: "80%"}}>
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
              <div>
                <h3 className="contentStyle">1</h3>
              </div>
              <div>
                <h3 className="contentStyle">2</h3>
              </div>
            </Carousel>
          </div>
          <div className="refills">
            <div>
              <h1>Cleaner Refills</h1>
              <div class="key-value-pair">
                <span class="key">Product ID</span>
                <span class="dot">:</span>
                <span class="value">$ProductId</span>
              </div>
              <div class="key-value-pair">
                <span class="key">Product Status</span>
                <span class="dot">:</span>
                <span class="value">$Status</span>
              </div>
              <div class="key-value-pair">
                <span class="key">Vendor</span>
                <span class="dot">:</span>
                <span class="value">Public Goods</span>
              </div>
              <div class="key-value-pair">
                <span class="key">Product Type</span>
                <span class="dot">:</span>
                <span class="value">Type Not Available</span>
              </div>
              <div class="key-value-pair">
                <span class="key">Tags</span>
                <span class="dot">:</span>
                <span class="value">
                  <Tag color="blue">blue</Tag>
                  <Tag color="blue">blue</Tag>
                  <Tag color="blue">blue</Tag>
                </span>
              </div>
            </div>
            <Divider />
            <div>
              <h1>Description</h1>
              <p>$description</p>
            </div>
            <Divider />
            <div>
              <h1>Variants</h1>
              <Table
                dataSource={data}
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
export default productDetails;
