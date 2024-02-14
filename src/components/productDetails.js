import React from "react";
import { Carousel, Tag, Table, Divider } from "antd";
import { LeftCircleOutlined, RightCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import parse from "html-react-parser";
const productDetails = (props) => {
  const { id } = props;
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
  const dataSource = {
    id: 8268418646255,
    title: "1 - Light Dimmable Plug-In Swing Arm",
    body_html:
      "This swing arm's traditional reeded candlestick base is brought up to date by a tapered drum shade and unique warm tones.<br><br><strong>What's Included?</strong><br>Cord<br>3-Way Switch<br>Cord Cover<br>Shade Included<br>Color: Oatmeal<br><br><strong>Features</strong><br>Perfect for bedrooms, home offices, and reading nooks; easily rests against the wall - extend the swing arm to deliver light where you need it when you need it<br>UL listed for indoor use only<br>Durable construction<br>Harp is over the light bulb to attach the shade<br><br><strong>Product Details</strong><br>Dry, Damp or Wet Location Listed: Dry<br>Dimmable: No<br>Power Source: Plug-in<br>Switch Included: Yes<br>Shade Material: Fabric<br>",
    vendor: "Wayfair",
    product_type: "Lighting",
    created_at: "2024-02-03T03:31:16-05:00",
    handle: "1-light-dimmable-plug-in-swing-arm",
    updated_at: "2024-02-03T03:31:23-05:00",
    published_at: "2021-05-10T20:39:15-04:00",
    template_suffix: "",
    published_scope: "web",
    tags: "",
    status: "active",
    admin_graphql_api_id: "gid://shopify/Product/8268418646255",
    variants: [
      {
        id: 44478740234479,
        product_id: 8268418646255,
        title: "Default Title",
        price: "140.00",
        sku: "W002898058",
        position: 1,
        inventory_policy: "deny",
        compare_at_price: null,
        fulfillment_service: "manual",
        inventory_management: "shopify",
        option1: "Default Title",
        option2: null,
        option3: null,
        created_at: "2024-02-03T03:31:17-05:00",
        updated_at: "2024-02-03T03:31:17-05:00",
        taxable: true,
        barcode: "",
        grams: 2268,
        weight: 5.0,
        weight_unit: "lb",
        inventory_item_id: 46576718774511,
        inventory_quantity: 1000,
        old_inventory_quantity: 1000,
        requires_shipping: true,
        admin_graphql_api_id: "gid://shopify/ProductVariant/44478740234479",
        image_id: null,
      },
    ],
    options: [
      {
        id: 10533446320367,
        product_id: 8268418646255,
        name: "Title",
        position: 1,
        values: ["Default Title"],
      },
    ],
    images: [
      {
        id: 40644259119343,
        alt: null,
        position: 1,
        product_id: 8268418646255,
        created_at: "2024-02-03T03:31:17-05:00",
        updated_at: "2024-02-03T03:31:17-05:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/40644259119343",
        width: 572,
        height: 737,
        src: "https://cdn.shopify.com/s/files/1/0677/3889/4575/products/1dimmable.png?v=1706949077",
        variant_ids: [],
      },
      {
        id: 40644259152111,
        alt: null,
        position: 2,
        product_id: 8268418646255,
        created_at: "2024-02-03T03:31:17-05:00",
        updated_at: "2024-02-03T03:31:17-05:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/40644259152111",
        width: 346,
        height: 730,
        src: "https://cdn.shopify.com/s/files/1/0677/3889/4575/products/1_-_Light_Dimmable_Plug-In_Swing_Arm_clipped_rev_1.png?v=1706949077",
        variant_ids: [],
      },
      {
        id: 40644259184879,
        alt: null,
        position: 3,
        product_id: 8268418646255,
        created_at: "2024-02-03T03:31:17-05:00",
        updated_at: "2024-02-03T03:31:17-05:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/40644259184879",
        width: 800,
        height: 800,
        src: "https://cdn.shopify.com/s/files/1/0677/3889/4575/products/1_-_Light_Dimmable_Plug-In_Swing_Arm_3ef6f2ce-a097-468a-913b-5bd5c93717a1.jpg?v=1706949077",
        variant_ids: [],
      },
      {
        id: 40644259217647,
        alt: null,
        position: 4,
        product_id: 8268418646255,
        created_at: "2024-02-03T03:31:17-05:00",
        updated_at: "2024-02-03T03:31:17-05:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/40644259217647",
        width: 800,
        height: 800,
        src: "https://cdn.shopify.com/s/files/1/0677/3889/4575/products/1_-_Light_Dimmable_Plug-In_Swing_Arm.jpg?v=1706949077",
        variant_ids: [],
      },
      {
        id: 40644259250415,
        alt: null,
        position: 5,
        product_id: 8268418646255,
        created_at: "2024-02-03T03:31:17-05:00",
        updated_at: "2024-02-03T03:31:17-05:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/40644259250415",
        width: 800,
        height: 800,
        src: "https://cdn.shopify.com/s/files/1/0677/3889/4575/products/1_-_Light_Dimmable_Plug-In_Swing_Arm_98b8b2fa-1322-45b8-a11d-df75d5747ece.jpg?v=1706949077",
        variant_ids: [],
      },
      {
        id: 40644259283183,
        alt: null,
        position: 6,
        product_id: 8268418646255,
        created_at: "2024-02-03T03:31:17-05:00",
        updated_at: "2024-02-03T03:31:17-05:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/40644259283183",
        width: 800,
        height: 800,
        src: "https://cdn.shopify.com/s/files/1/0677/3889/4575/products/1_-_Light_Dimmable_Plug-In_Swing_Arm_e9315f4d-03bd-4ee7-b2cd-8324232079c7.jpg?v=1706949077",
        variant_ids: [],
      },
      {
        id: 40644259315951,
        alt: null,
        position: 7,
        product_id: 8268418646255,
        created_at: "2024-02-03T03:31:17-05:00",
        updated_at: "2024-02-03T03:31:17-05:00",
        admin_graphql_api_id: "gid://shopify/ProductImage/40644259315951",
        width: 800,
        height: 800,
        src: "https://cdn.shopify.com/s/files/1/0677/3889/4575/products/1_-_Light_Dimmable_Plug-In_Swing_Arm_20787ea9-f057-4a9c-95c2-c45f5dd89f66.jpg?v=1706949077",
        variant_ids: [],
      },
    ],
    image: {
      id: 40644259119343,
      alt: null,
      position: 1,
      product_id: 8268418646255,
      created_at: "2024-02-03T03:31:17-05:00",
      updated_at: "2024-02-03T03:31:17-05:00",
      admin_graphql_api_id: "gid://shopify/ProductImage/40644259119343",
      width: 572,
      height: 737,
      src: "https://cdn.shopify.com/s/files/1/0677/3889/4575/products/1dimmable.png?v=1706949077",
      variant_ids: [],
    },
  };

  const data = dataSource.variants.map((variant) => ({
    key: variant.id,
    title: variant.title,
    sku: variant.sku,
    quantity: variant.inventory_quantity,
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
                <div>
                  <img src={image.src} alt={`image with ${image.id}`} className="contentStyle"></img>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="refills">
            <div>
              <h1>Cleaner Refills</h1>
              <div class="key-value-pair">
                <span class="key">Product ID</span>
                <span class="dot">:</span>
                <span class="value">{dataSource.id}</span>
              </div>
              <div class="key-value-pair">
                <span class="key">Product Status</span>
                <span class="dot">:</span>
                <span class="value">{dataSource?.status}</span>
              </div>
              <div class="key-value-pair">
                <span class="key">Vendor</span>
                <span class="dot">:</span>
                <span class="value">{dataSource?.vendor}</span>
              </div>
              <div class="key-value-pair">
                <span class="key">Product Title</span>
                <span class="dot">:</span>
                <span class="value">{dataSource?.title}</span>
              </div>
            </div>
            <Divider />
            <div>
              <h1>Description</h1>
              {parse(dataSource?.body_html)}
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
