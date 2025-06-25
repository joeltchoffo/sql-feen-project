import { useGame } from "../context/GameContext";

const AVAILABLE_SCROLLS = [
  { keyword: "SUBSTR", price: 10 },
  { keyword: "REVERSE", price: 15 },
  { keyword: "JOIN", price: 20 },
];

export default function ShopPage() {
  const { points, scrolls, addScroll, earnPoints } = useGame();

  const handleBuy = (scroll) => {
    if (scrolls.includes(scroll.keyword)) return;
    if (points < scroll.price) {
      alert("Nicht genug Punkte!");
      return;
    }
    addScroll(scroll.keyword);
    earnPoints(-scroll.price);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Schriftrollen-Shop</h1>
      <p className="mb-6">Verfügbare Punkte: <strong>{points}</strong></p>

      <div className="space-y-4">
        {AVAILABLE_SCROLLS.map((scroll) => (
          <div key={scroll.keyword} className="flex justify-between items-center border p-4 rounded">
            <div>
              <h2 className="text-lg font-semibold">{scroll.keyword}</h2>
              <p>Kosten: {scroll.price} Punkte</p>
            </div>
            <button
              onClick={() => handleBuy(scroll)}
              disabled={scrolls.includes(scroll.keyword)}
              className={`p-2 rounded ${
                scrolls.includes(scroll.keyword)
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {scrolls.includes(scroll.keyword) ? "Gekauft" : "Kaufen"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
