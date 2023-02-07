import Image from "next/image";
import photo from "@/public/assets/images/photo.webp";

const ImageContainer = () => {
  return (
    <div
      className="relative w-96 h-96 lg:w-80 lg:h-80 md:w-64 md:h-64 sm:opacity-0"
      id="photo"
    >
      <Image src={photo} style={{ objectFit: "contain" }} alt="julien henry" />
    </div>
  );
};

export default ImageContainer;
