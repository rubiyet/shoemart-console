import MiddleBanner from "./MiddleBanner";
import TopBanner from "./TopBanner";
import TopProducts from "./TopProducts";

export default function Home() {
  return (
    <div className="space-y-20">
      <TopBanner />
      <TopProducts />
      <MiddleBanner />
    </div>
  );
}