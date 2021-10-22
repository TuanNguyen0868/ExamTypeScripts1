import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Heading, IconButton, Text, Image } from "@chakra-ui/react";

import { useAppDispatch } from "../hooks";
import { deleteProduct } from "../redux/productSlice";
import { useHistory } from "react-router-dom";

const ProductInfo = ({
  name,
  price,
  quantity,
  title,
  imageUrl,
  id,
  ...rest
}: {
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  title: string | undefined;
  imageUrl: string | undefined;
  id: string;
}) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const redirect = (id: string) => {
    history.push(`/update-product/${id}`);
  };

  return (
    <Box
      p={10}
      justifyContent="space-between"
      d="flex"
      shadow="md"
      borderWidth="1px"
      {...rest}
    >
      <Box d="flex" flexDirection="column">
        <Heading fontSize="xl">{title}</Heading>
        <Image src={imageUrl} mt={4} />
        <Text mt={4}>Name : {name}</Text>
        <Text mt={4}>Price : {price}</Text>
        <Text mt={4}>Quantity : {quantity}</Text>
        <br/>
      <div>
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<DeleteIcon />}
          marginRight="1rem"
          onClick={() => dispatch(deleteProduct({ id }))}
          style={{width: 40}}
          />
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<EditIcon />}
          onClick={() => redirect(id)}
          style={{width: 40}}
          />
          </div>
      </Box>
    </Box>
  );
};

export default ProductInfo;
