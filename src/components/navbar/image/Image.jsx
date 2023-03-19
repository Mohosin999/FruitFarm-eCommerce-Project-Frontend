import Image from "next/image";

const ImageComponent = ({ item }) => {
  const imageUrl = `http://127.0.0.1:1337${item}`;

  return <Image src={imageUrl} alt="ecommerce" width={600} height={400} />;
};

export default ImageComponent;
