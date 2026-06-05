import { useState, useMemo } from "react";
import { ChevronDown, PackageX } from "lucide-react";
import FadeUp from "../FadeUp.jsx";
import product1 from "/src/assets/images/trenches-tee-white.jpg";
import product2 from "/src/assets/images/trenches-tee-black.jpg";
import product3 from "/src/assets/images/jordan-hydro-13-gray-black.jpg";
import product4 from "/src/assets/images/jordan-hydro-13-red-black.jpg";
import product5 from "/src/assets/images/calvin-klein-boxers.jpg";
import product6 from "/src/assets/images/jordan-jersey-blue.jpg";
import product7 from "/src/assets/images/jordan-jersey-red.jpg";
import product8 from "/src/assets/images/jordan-jersey-red-black.jpg";
import product9 from "/src/assets/images/jordan-jersey-blue-black.jpg";
import product10 from "/src/assets/images/jordan-jersey-white-blue.jpg";
import product11 from "/src/assets/images/shaka-cargo-short-red.jpg";
import product12 from "/src/assets/images/shaka-cargo-short-blue.jpg";
import product13 from "/src/assets/images/jordan-hydro-13-black.jpg";
import product14 from "/src/assets/images/jordan-hydro-13-red-white.jpg";
import product15 from "/src/assets/images/jordan-hydro-13-blue.jpg";
import product16 from "/src/assets/images/jordan-hydro-13-red-black.jpg";
import product17 from "/src/assets/images/jordan-hydro-13-black-gray.jpg";
import product18 from "/src/assets/images/jordan-hydro-13-blue-white.jpg";


const PRODUCTS = [
  { id: 1, name: "Trenches Tee – Pink White", category: "T-Shirt", price: 550, badge: "bestseller", image: product1},
  { id: 2, name: "Trenches Tee – Pink Black", category: "T-Shirt", price: 550, badge: "new", image: product2 },
  { id: 3, name: "Jordan Hydro 13 – Gray Black", category: "Slipper", price: 950, badge: "bestseller", image: product3 },
  { id: 4, name: "Jordan Hydro 13 – Red Black", category: "Slipper", price: 950, badge: "bestseller", image: product4 },
  { id: 5, name: "Calvin Klein Boxer", category: "Underwear", price: 120, badge: null, image: product5 },
  { id: 6, name: "Jordan Jersey – Blue", category: "Jersey", price: 1000, badge: null, image: product6 },
  { id: 7, name: "Jordan Jersey – Red", category: "Jersey", price: 1000, badge: null, image: product7 },
  { id: 8, name: "Jordan Jersey – Red Black", category: "Jersey", price: 1000, badge: null, image: product8 },
  { id: 9, name: "Jordan Jersey – Blue Black", category: "Jersey", price: 1000, badge: null, image: product9 },
  { id: 10, name: "Jordan Jersey – White Blue", category: "Jersey", price: 1000, badge: null, image: product10 },
  { id: 11, name: "Shaka Cargo Short - Red", category: "Short", price: 350, badge: null, image: product11 },
  { id: 12, name: "Shaka Cargo Short - Blue", category: "Short", price: 350, badge: null, image: product12 },
  { id: 13, name: "Jordan Hydro 13 – Black", category: "Slipper", price: 950, badge: "bestseller", image: product13 },
  { id: 14, name: "Jordan Hydro 13 – Red White", category: "Slipper", price: 950, badge: "bestseller", image: product14 },
  { id: 15, name: "Jordan Hydro 13 – Blue", category: "Slipper", price: 950, badge: "bestseller", image: product15 },
  { id: 16, name: "Jordan Hydro 13 – Gray", category: "Slipper", price: 950, badge: "bestseller", image: product16 },
  { id: 17, name: "Jordan Hydro 13 – Black Gray", category: "Slipper", price: 950, badge: "bestseller", image: product17 },
  { id: 18, name: "Jordan Hydro 13 – White Blue", category: "Slipper", price: 950, badge: "bestseller", image: product18 },
];

const CATEGORIES = ["All", "T-Shirt", "Slipper", "Underwear", "Jersey", "Short"];

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low–High", value: "price-asc" },
  { label: "Price: High–Low", value: "price-desc" },
  { label: "Name A–Z", value: "name" },
];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [openSort, setOpenSort] = useState(false);

  const selectedSort = sortOptions.find((o) => o.value === sort);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (activeFilter !== "All") {
      list = list.filter((p) => p.category === activeFilter);
    }

    if (search.trim()) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [activeFilter, search, sort]);

  return (
    <FadeUp>
      <section className="px-5 py-12 w-full min-h-screen md:px-8 lg:px-12">
        <p className="text-xs sm:text-sm text-text-secondary uppercase mb-3">
          Shop Everything
        </p>

        <h2 className="text-4xl font-serif font-medium sm:text-5xl md:text-6xl mb-6 md:mb-10">
          Every piece, in one place.
        </h2>

        {/* FILTER BAR */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-7">

          {/* CATEGORY */}
          <div className="flex gap-1.5 flex-wrap mb-3 md:mb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={[
                  "text-[12px] font-medium tracking-wide px-4 py-1.5 rounded-full border transition-all duration-150 cursor-pointer",
                  activeFilter === cat
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-transparent text-neutral-500 border-neutral-300 hover:border-neutral-500 hover:text-neutral-900",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <div className="flex gap-1.5 flex-col sm:flex-row flex-1 md:flex-none">
            <div className="relative w-full md:w-70">
              <svg
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500 size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" />
              </svg>

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  pl-9 pr-3 py-2 text-sm
                  border border-neutral-300
                  rounded-lg bg-white text-neutral-900 hover:border-neutral-500 
                  outline-none focus:border-neutral-800 w-full
                "
              />
            </div>

            {/* SORT DROPDOWN (CUSTOM) */}
            <div className="relative w-full md:w-44">
              <button
                onClick={() => setOpenSort(!openSort)}
                className="
                  w-full flex items-center justify-between
                  pl-4 py-2 pr-3
                  bg-white
                  border border-neutral-300
                  rounded-lg
                  text-sm text-neutral-800
                  hover:border-neutral-500
                  focus:border-neutral-800
                  transition
                "
              >
                <span>{selectedSort?.label}</span>
                <ChevronDown size={16} 
                  className={`
                text-neutral-800
                  transition-transform duration-200 ease-out
                  ${openSort ? "rotate-180" : "rotate-0"}
                `} />
              </button>

              {openSort && (
                <>
                  {/* click outside */}
                  <div
                    className="fixed inset-0"
                    onClick={() => setOpenSort(false)}
                  />

                  <div
                    className="
                      absolute mt-2 w-full
                      bg-white
                      border border-neutral-300
                      rounded-lg
                      overflow-hidden
                      py-1 pl-1 pr-1.5
                      z-50
                    "
                  >
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSort(opt.value);
                          setOpenSort(false);
                        }}
                        className={`
                          w-full text-left px-4 py-2 text-sm m-px 
                          hover:bg-neutral-50 rounded hover:text-black
                          transition
                          ${
                            sort === opt.value
                              ? "bg-neutral-100 text-black"
                              : "text-neutral-600"
                          }
                        `}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        {filtered.length === 0 ? (
          <div className="text-center pt-30 pb-40 flex flex-col items-center justify-center gap-3">
    
            {/* icon */}
            <div className="mb-6"><PackageX size={100} /></div>

            {/* text */}
            <div>
              <p className="text-lg font-semibold text-neutral-800">
                No products found
              </p>
              <p className="text-sm text-text-secondary mt-2">
                Try adjusting your search or filters
              </p>
            </div>

            {/* reset button */}
            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
                setSort("featured");
              }}
              className="
                mt-4 px-4 py-2 text-sm
                bg-neutral-900 text-white
                rounded-lg
                hover:bg-neutral-800
                transition
              "
            >
              Clear filters
            </button>

          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </FadeUp>
  );
}

/* PRODUCT CARD */
function ProductCard({ product }) {
  return (
    <div className="bg-white overflow-hidden ">

      <div className="relative aspect-square bg-neutral-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-50 object-cover mb-2 sm:h-70 lg:h-90 brightness-80 hover:brightness-100 transition duration-300"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {product.badge === "bestseller" && (
          <span className="absolute md:text-sm md:px-3 md:py-0.75 top-2 left-2 bg-white text-black text-xs px-2 py-0.5">
            Best Seller
          </span>
        )}

        {product.badge === "new" && (
          <span className="absolute md:text-sm md:px-3 md:py-0.75 top-2 left-2 bg-white text-black text-xs px-2 py-0.5">
            New
          </span>
        )}
      </div>

      <div className=''>
        <div className='flex items-center justify-between'>
          <p className='text-xs uppercase text-text-secondary'>{product.category}</p>
          <p className='text-sm font-medium'>₱{product.price.toLocaleString()}</p>
        </div>
        <p className='text-sm'>{product.name}</p>
      </div>

      
    </div>
  );
}