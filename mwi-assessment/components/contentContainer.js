import Image from "next/image";

export default function ContentContainer({ content, img, alt }) {
  return (
    <div className="bg-lightGray text-darkGray my-2 flex flex-col p-4 items-center justify-center rounded-sm h-96 max-w-sm lg:mx-2 lg:max-w-lg lg:p-8">
      <div className="w-24 h-24 relative m-4">
        <Image src={img} alt={alt} layout="fill" objectFit="contain"></Image>
      </div>
      <div className="ml-8">
        <h1 className="my-2 w-max font-poppins_bold text-4xl ">
          {content.title}
        </h1>
        <p className=" w-11/12 text-sm leading-6 text-midGray">
          {content.content}
        </p>
      </div>
      <button className="btn-primary ">Learn More</button>
    </div>
  );
}
