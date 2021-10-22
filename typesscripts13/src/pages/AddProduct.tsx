import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addNewProduct, updateProduct } from "../redux/productSlice";
import { v4 as uuidv4 } from "uuid";
import { useParams, useHistory } from "react-router-dom";

const AddProduct = () => {
  const { id } = useParams<{ id: string }>(); //If user comes from /update-book, we will catch id of that book here.
  const history = useHistory();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) =>
    state.product.productList.find((product) => product.id === id)
  ); // Selecting particular book's information to prefill inputs for updating.

  const [title, setTitle] = useState<string | undefined>(product?.title || ""); // We are initializing useStates if book variable has title or author.
  const [imageUrl, setImageUrl] = useState<string | undefined>(
    product?.imageUrl || ""
  );
  const [name, setName] = useState<string | undefined>(product?.name || "");
  const [price, setPrice] = useState<number | undefined>(product?.price || 0);
  const [quantity, setQuantity] = useState<number | undefined>(
    product?.quantity || 0
  );

  const handleOnSubmit = () => {
    if (id) {
      editProduct();
      return;
    }
    dispatch(
      addNewProduct({ name, price, quantity, imageUrl, title, id: uuidv4() })
    );
    clearInputs();
  };

  const editProduct = () => {
    dispatch(updateProduct({ name, price, quantity, imageUrl, title, id }));
    clearInputs();
    history.push("/");
  };

  const clearInputs = () => {
    setTitle("");
    setImageUrl("");
    setName("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <Flex
      // height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box width="50%">
        <Box
          d="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="20px"
        >
          <Heading color="white">Add Product</Heading>
        </Box>
        <FormControl isRequired>
          <FormLabel color="white">Title</FormLabel>
          <Input
            value={title}
            color="white"
            placeholder="The Lord of the Rings"
            onChange={(e: any) => setTitle(e.currentTarget.value)}
          />
          <FormLabel color="white" marginTop={4}>
            Image
          </FormLabel>
          <Input
            value={imageUrl}
            color="white"
            placeholder="//http#"
            onChange={(e: any) => setImageUrl(e.currentTarget.value)}
          />
          <FormLabel color="white" marginTop={4}>
            Name
          </FormLabel>
          <Input
            value={name}
            color="white"
            placeholder="Tuan Nguyen"
            onChange={(e: any) => setName(e.currentTarget.value)}
          />
        </FormControl>
        <FormLabel color="white" marginTop={4}>
          Price
        </FormLabel>
        <Input
          value={price}
          color="white"
          placeholder="696969696"
          onChange={(e: any) => setPrice(e.currentTarget.value)}
        />
        <FormLabel color="white" marginTop={4}>
          Quantity
        </FormLabel>
        <Input
          value={quantity}
          color="white"
          placeholder="0"
          onChange={(e: any) => setQuantity(e.currentTarget.value)}
        />
        <Button
          marginTop={4}
          colorScheme="teal"
          type="submit"
          onClick={handleOnSubmit}
        >
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default AddProduct;
