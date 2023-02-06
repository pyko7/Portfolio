import Image from "next/image";
import photo from "@/public/assets/images/photo.webp";

const ImageContainer = () => {
  return <Image src={photo} width={400} height={400} alt="julien henry" />;
};

export default ImageContainer;
