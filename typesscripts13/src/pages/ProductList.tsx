// import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import ProductInfo from "../components/ProductInfo";

const ProductList = () => {
  const productList = useAppSelector((state) => state.product.productList);

  return (
    <>
      {/* <Flex */}
      {/* // height="100vh" */}
      {/* justifyContent="center" */}
      {/* alignItems="center" */}
      {/* flexDirection="column" */}
      {/* display="flex" */}
      {/* > */}
      {/* <Box width="100%"> */}
      {/* <Box */}
      {/* d="flex" */}
      {/* flexDirection="row" */}
      {/* justifyContent="space-between" */}
      {/* marginBottom="20px" */}
      {/* > */}
      {/* <Heading color="white">Product List</Heading> */}
      {/* <Link to="/add-new-product">
            <Button paddingX="3rem">Add Product</Button>
          </Link> */}
      {/* </Box> */}
      {/* <Box */}
      {/* // rounded="md" */}
      {/* // bg="purple.500" */}
      {/* color="white" */}
      {/* // px="15px" */}
      {/* // py="15px" */}
      {/* background="none" */}
      {/* style={{ width: 300 }} */}
      {/* > */}
      {/* <Stack spacing={8}>
              {productList.map((product) => (
                <ProductInfo
                  key={product.id}
                  title={product.title}
                  imageUrl={product.imageUrl}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </Stack> */}
      {/* </Box> */}
      {/* </Box> */}
      {/* </Flex> */}
      <div>
        <ul style={{ display: "flex", width: "100%", paddingLeft: 50 }}>
          {productList.map((product) => (
            <li
              style={{
                width: 300,
                height: 400,
                color: "white",
                padding: 30,
                listStyleType: "none",
              }}
            >
              <ProductInfo
                key={product.id}
                title={product.title}
                imageUrl={product.imageUrl}
                id={product.id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ProductList;
