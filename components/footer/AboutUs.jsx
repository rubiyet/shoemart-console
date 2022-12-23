import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="space-y-3">
      <Image src="/logoWithName.png" alt="logoWithName" width={180} height={200} />
      <div className="text-gray-600 w-[28rem] text-sm text-justify">By signing up, you agree to receive our newsletters and information about our products, services and events by email, phone and instant messaging and agree to our Privacy Policy.</div>
    </div>
  )
}