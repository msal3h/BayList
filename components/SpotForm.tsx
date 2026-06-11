'use client';

import { useState } from 'react';
import { Spot, Category, City, Rating, CATEGORIES, CITIES, RATINGS, CATEGORY_CONFIG } from '@/lib/types';

type NewSpot = Omit<Spot, 'id' | 'created_at'>;

interface SpotFormProps {
  onSubmit: (spot: NewSpot) => void;
  onClose: () => void;
}

const DEFAULT: NewSpot = {
  name: '',
  category: 'cafe',
  city: 'San Francisco',
  visited: false,
  rating: 'want to go',
  notes: '',
};

export default function SpotForm({ onSubmit, onClose }: SpotFormProps) {
  const [form, setForm] = useState<NewSpot>(DEFAULT);
  const [error, setError] = useState('');


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      
      setError('Spot name is required.');
      return;
    }
    onSubmit({ ...form });
    setForm(DEFAULT);
    setError('');
  }

  const inputClass = 'w-full px-3 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-400 transition-colors';
  const labelClass = 'block text-xs font-medium text-stone-600 mb-1.5';


  return (
   
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 flex flex-col gap-5">
       
        <div className="flex items-center justify-between">
          <h2 className="text-stone-900 font-semibold text-lg">Add a spot</h2>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 text-xl leading-none cursor-pointer"
          ></button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
          <div>
            <label className={labelClass}>Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
                setError("");
              }}
              placeholder="e.g. Sightglass Coffee"
              className={inputClass}
              autoFocus // focus on this input when form opens
            />
            {error && <p className="text-rose-500 text-xs mt-1">{error}</p>}
          </div>

          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>Category</label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value as Category })
                }
                className={inputClass}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {CATEGORY_CONFIG[cat].emoji} {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>City</label>
              <select
                value={form.city}
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value as City })
                }
                className={inputClass}
              >
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Rating</label>
            <div className="flex gap-2">
              {RATINGS.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setForm({ ...form, rating: r as Rating })}
                  className={`flex-1 text-xs font-medium py-2 rounded-xl border transition-colors cursor-pointer capitalize ${form.rating === r ? "bg-stone-900 text-white border-stone-900" : "bg-stone-50 text-stone-500 border-stone-200 hover:border-stone-400"}`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-sm text-stone-700 font-medium">
              Already visited?
            </span> 
            
            <button
              type="button"
              onClick={() => setForm({ ...form, visited: !form.visited })}
              className={`w-11 h-6 rounded-full transition-colors cursor-pointer ${form.visited ? "bg-emerald-500" : "bg-stone-200"}`}
            >
              <span
                className={`block w-5 h-5 bg-white rounded-full shadow-sm transition-transform mx-0.5 ${form.visited ? "translate-x-5" : "translate-x-0"}`}
              />
            </button>
          </div>

          <div>
            <label className={labelClass}>
              Notes{" "}
              <span className="text-stone-400 font-normal">(optional)</span>
            </label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="What makes it worth visiting?"
              rows={3}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 text-sm font-medium text-stone-600 bg-stone-100 rounded-xl hover:bg-stone-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-xl hover:bg-stone-700 transition-colors cursor-pointer"
            >
              Add spot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
