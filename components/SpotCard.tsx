'use client';

import { Spot, CATEGORY_CONFIG, RATING_CONFIG } from '@/lib/types';

interface SpotCardProps {
  spot: Spot;
  onToggleVisited: (id: string) => void;
}



export default function SpotCard({ spot, onToggleVisited }: SpotCardProps) {


  const catConfig = CATEGORY_CONFIG[spot.category];
  const ratingConfig = RATING_CONFIG[spot.rating];

  return (
    <div className="bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-3 p-5">
      <div className="flex items-start justify-between">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${catConfig.bg} ${catConfig.text} ${catConfig.border}`}
        >
          <span>{catConfig.emoji}</span>
          <span className="capitalize">{spot.category}</span>
        </span>
        <span className={`flex items-center gap-1 ${ratingConfig.color}`}>
          <span className="text-sm">{ratingConfig.emoji}</span>
          <span className="text-xs text-stone-400">{ratingConfig.label}</span>
        </span>
      </div>

      <div>
        <h3 className="text-stone-900 font-semibold text-base leading-snug">
          {spot.name}
        </h3>
        <p className="text-stone-400 text-sm mt-0.5">📍 {spot.city}</p>
      </div>

      {spot.notes && (
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
          {spot.notes}
        </p>
      )}

      <div className="pt-1 mt-auto">
        <button
          onClick={() => onToggleVisited(spot.id)}
          className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
            spot.visited 
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
              : "bg-stone-50 text-stone-500 border border-stone-200 hover:bg-stone-100"
          }`}
        >
          {spot.visited ? "✓ Visited" : "○ Not yet"}
        </button>
      </div>
    </div>
  );
}
