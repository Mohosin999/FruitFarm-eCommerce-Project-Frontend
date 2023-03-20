import Image from "next/image";

const ImageComponent = ({ item, alt }) => {
  const imageUrl = `http://127.0.0.1:1337${item}`;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        src={imageUrl}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default ImageComponent;
