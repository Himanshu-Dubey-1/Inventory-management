import { useAppSelector } from "../store/Hooks/hook";

// components/DashboardCards.tsx

const DashboardCards = () => {
  const products = useAppSelector((state) => state.items.items);
  const totalStock = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const totalValue = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const lowStock = products.filter((product) => product.quantity < 100).length;
  const outOfStock = products.filter((product) => product.quantity == 0).length;

  const cards = [
    {
      title: "Total Stock",
      value: `${totalStock}`,
      color: "bg-blue-600",
      icon: "📦",
    },
    {
      title: "Stock Value",
      value: `${totalValue}`,
      color: "bg-green-600",
      icon: "✅",
    },
    {
      title: "Low Stock",
      value: `${lowStock}`,
      color: "bg-indigo-300",
      icon: "📉",
    },
    {
      title: "Out of Stock",
      value: `${outOfStock}`,
      color: "bg-orange-700",
      icon: "⚠️",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`p-4 rounded-lg shadow ${card.color} flex flex-col gap-2`}
        >
          <div className="text-2xl">{card.icon}</div>
          <h1 className="text-white text-lg">{card.title}</h1>
          <h3 className="text-xl font-bold text-white">{card.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
