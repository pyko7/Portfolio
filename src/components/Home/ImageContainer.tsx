import { useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import photo from "~/public/assets/images/photo.webp";

const ImageContainer = () => {
  const theme = useTheme();

  const ImageContainer = styled(Box)({
    position: "relative",
    width: 400,
    height: 400,
    [theme.breakpoints.down("md")]: {
      width: 325,
      height: 325,
    },
  });
  return (
    <ImageContainer>
      <Image src={photo} layout="fill" objectFit="contain" alt="julien henry" />
    </ImageContainer>
  );
};

export default ImageContainer;
