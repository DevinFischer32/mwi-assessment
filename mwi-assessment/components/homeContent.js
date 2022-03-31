import Image from "next/image";

export default function HomeContent({ content, img, alt }) {
  return (
    <div className="content-container">
      <div className="image-div">
        <Image src={img} alt={alt} layout="fill" objectFit="contain"></Image>
      </div>
      <h1 className="content-title">{content.title}</h1>
      <p className="content-description">{content.content}</p>
      <button className="btn-primary">Learn More</button>
    </div>
  );
}
