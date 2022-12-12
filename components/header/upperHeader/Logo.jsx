import Image from "next/image";

export default function Logo() {

  const handleLogo = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
      <Image src="/logo.png" alt="logo" width={50} height={50} onClick={handleLogo} />
  );
}