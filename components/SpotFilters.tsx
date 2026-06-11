"use client";

import {
  Category,
  City,
  CATEGORIES,
  CITIES,
  CATEGORY_CONFIG,
} from "@/lib/types";

type VisitedFilter = "all" | "visited" | "not-visited";

interface SpotFiltersProps {
  search: string;
  onSearchChange: (val: string) => void;
  categoryFilter: Category | "all";
  onCategoryChange: (cat: Category | "all") => void;
  cityFilter: City | "all";
  onCityChange: (city: City | "all") => void;
  visitedFilter: VisitedFilter;
  onVisitedFilterChange: (val: VisitedFilter) => void;
  totalCount: number;
  filteredCount: number;
}


export default function SpotFilters({
  search,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  cityFilter,
  onCityChange,
  visitedFilter,
  onVisitedFilterChange,
  totalCount,
  filteredCount,
}: SpotFiltersProps) {
  const pillBase =
    "text-xs font-medium px-3 py-1.5 rounded-full border transition-colors cursor-pointer whitespace-nowrap";
  const pillActive = "bg-stone-900 text-white border-stone-900";
  const pillInactive =
    "bg-white text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-700";

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">
          🔍
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search spots..."
          className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        <button
          onClick={() => onCategoryChange("all")}
          className={`${pillBase} ${categoryFilter === "all" ? pillActive : pillInactive}`}
        >
          All categories
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`${pillBase} ${categoryFilter === cat ? pillActive : pillInactive}`}
          >
            {CATEGORY_CONFIG[cat].emoji} {cat}
          </button>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide flex-1">
          <button
            onClick={() => onCityChange("all")}
            className={`${pillBase} ${cityFilter === "all" ? pillActive : pillInactive}`}
          >
            All cities
          </button>
          {CITIES.map((city) => (
            <button
              key={city}
              onClick={() => onCityChange(city)}
              className={`${pillBase} ${cityFilter === city ? pillActive : pillInactive}`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="flex gap-1.5 shrink-0">
          {(["all", "visited", "not-visited"] as VisitedFilter[]).map((v) => (
            <button
              key={v}
              onClick={() => onVisitedFilterChange(v)}
              className={`${pillBase} ${visitedFilter === v ? pillActive : pillInactive}`}
            >
              {v === "all" ? "All" : v === "visited" ? "✓ Visited" : "○ To go"}
            </button>
          ))}
        </div>
      </div>

      {filteredCount < totalCount && (
        <p className="text-xs text-stone-400">
          Showing {filteredCount} of {totalCount} spots
        </p>
      )}
    </div>
  );
}
