import Image from "next/image";

const RBLogo = () => (
  <div className="fill-none mr-1">
    <Image 
      src="/images/Rare_Breed_Logo.webp" 
      alt="Rare Breed Logo"
      width={50}
      height={50}
      priority
    />
  </div>
);

export default RBLogo;