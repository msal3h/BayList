"use client";

import { useState, useMemo } from "react";
import { Spot, Category, City } from "@/lib/types";
import { SAMPLE_SPOTS } from "@/lib/data";
import SpotCard from "@/components/SpotCard";
import SpotFilters from "@/components/SpotFilters";
import SpotForm from "@/components/SpotForm";

type VisitedFilter = "all" | "visited" | "not-visited";

export default function Home() {
  const [spots, setSpots] = useState<Spot[]>(SAMPLE_SPOTS);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<Category | "all">("all");
  const [cityFilter, setCityFilter] = useState<City | "all">("all");
  const [visitedFilter, setVisitedFilter] = useState<VisitedFilter>("all");

  const filtered = useMemo(() => {
    return spots.filter((s) => {
      const q = search.toLowerCase();
      if (
        q &&
        !s.name.toLowerCase().includes(q) &&
        !s.notes?.toLowerCase().includes(q) &&
        !s.city.toLowerCase().includes(q)
      )
        return false;
      if (categoryFilter !== "all" && s.category !== categoryFilter)
        return false;
      if (cityFilter !== "all" && s.city !== cityFilter) return false;
      if (visitedFilter === "visited" && !s.visited) return false;
      if (visitedFilter === "not-visited" && s.visited) return false;
      return true;
    });
  }, [spots, search, categoryFilter, cityFilter, visitedFilter]);

  function handleToggleVisited(id: string) {
    setSpots((prev) =>
      
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              visited: !s.visited,
              rating:
                !s.visited && s.rating === "want to go" ? "liked" : s.rating,
            }
          : s,
      ),
    );
  }

  function handleAddSpot(newSpot: Omit<Spot, "id" | "created_at">) {
    const spot: Spot = {
      ...newSpot,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      
    };
    setSpots((prev) => [spot, ...prev]);
    setShowForm(false);
  }

  const visitedCount = spots.filter((s) => s.visited).length;
  const toGoCount = spots.length - visitedCount;

  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-100 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-stone-900 font-bold text-xl tracking-tight"></h1>
            <p className="text-stone-400 text-xs mt-0.5">
              your bay area cool spot tracker
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-1.5 bg-stone-900 text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-stone-700 transition-colors cursor-pointer"
          >
            <span className="text-base leading-none">+</span>
            <span>Add spot</span>
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="bg-white rounded-xl border border-stone-100 px-4 py-3 flex flex-col gap-0.5">
            <span className="text-stone-900 font-bold text-xl">
              {spots.length}
            </span>
            <span className="text-stone-400 text-xs">total spots</span>
          </div>
          <div className="bg-white rounded-xl border border-stone-100 px-4 py-3 flex flex-col gap-0.5">
            <span className="text-emerald-600 font-bold text-xl">
              {visitedCount}
            </span>
            <span className="text-stone-400 text-xs">visited</span>
          </div>
          <div className="bg-white rounded-xl border border-stone-100 px-4 py-3 flex flex-col gap-0.5">
            <span className="text-amber-500 font-bold text-xl">
              {toGoCount}
            </span>
            <span className="text-stone-400 text-xs">to explore</span>
          </div>
        </div>

        
        <SpotFilters
          search={search}
          onSearchChange={setSearch}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          cityFilter={cityFilter}
          onCityChange={setCityFilter}
          visitedFilter={visitedFilter}
          onVisitedFilterChange={setVisitedFilter}
          totalCount={spots.length}
          filteredCount={filtered.length}
        />

       
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((spot) => (
              <SpotCard
                key={spot.id}
                spot={spot}
                onToggleVisited={handleToggleVisited}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🗺️</p>
            <p className="text-stone-500 text-sm">
              No spots match your filters.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategoryFilter("all");
                setCityFilter("all");
                setVisitedFilter("all");
              }}
              className="mt-3 text-xs text-stone-400 underline hover:text-stone-600 cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

     
      {showForm && (
        <SpotForm onSubmit={handleAddSpot} onClose={() => setShowForm(false)} />
      )}
    </main>
  );
}
