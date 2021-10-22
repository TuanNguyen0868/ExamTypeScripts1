import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import ProductInfo from "../components/ProductInfo";

const ProductList = () => {
  // If we had any other state like book, we could have select it same way we select book. For example, author would be  useAppSelector((state) => state.author.authorNames)
  const productList = useAppSelector((state) => state.product.productList);

  return (
    <Flex
      // height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box width="40%">
        <Box
          d="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="20px"
        >
          <Heading color="white">Product List</Heading>
          <Link to="/add-new-product">
            <Button paddingX="3rem">Add Product</Button>
          </Link>
        </Box>
        <Box rounded="md" bg="purple.500" color="white" px="15px" py="15px" background="none">
          <Stack spacing={8}>
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
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};
export default ProductList;
