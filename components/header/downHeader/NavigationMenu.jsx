export default function NavigationMenu({options}) {
  return (
    <div className="flex items-center space-x-12">
      {options.map((option, index) => (
        <a key={index} href="#" className={`text-gray-600 text-sm hover:text-gray-900 h-9 flex items-center ${option === "HOME" ? 'border-b-4 border-orange-600' : 'border-b-4 border-white'}`}>
          {option}
        </a>
      ))}
    </div>
  );
}