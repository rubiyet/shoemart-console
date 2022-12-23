export default function ProductsList({ list }) {
  return (
    <div className="space-y-3">
      <span className="text-sm font-semibold">Products</span>
      <div className="space-y-2">
        {list.map((item, index) => (
          <div key={index}>
            <a key={index} href="#" className="text-gray-600 text-sm">
              {item}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
