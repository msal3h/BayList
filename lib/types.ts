export type Category =
  | "cafe"
  | "restaurant"
  | "park"
  | "theme park"
  | "museum"
  | "view spot";

export type City =
  | "San Jose"
  | "San Francisco"
  | "Palo Alto"
  | "Santa Cruz"
  | "Berkeley"
  | "Oakland";

export type Rating = "want to go" | "liked" | "loved";

export interface Spot {
  id: string;
  name: string;
  category: Category;
  city: City;
  visited: boolean;
  rating: Rating;
  notes?: string;
  created_at: string;
} // an object which is why its interface

export const CATEGORIES: Category[] = [
  "cafe",
  "restaurant",
  "park",
  "theme park",
  "museum",
  "view spot",
];

export const CITIES: City[] = [
  "San Jose",
  "San Francisco",
  "Palo Alto",
  "Santa Cruz",
  "Berkeley",
  "Oakland",
];

export const RATINGS: Rating[] = ["want to go", "liked", "loved"];

export const CATEGORY_CONFIG: Record<
  Category,
  { emoji: string; bg: string; text: string; border: string }
> = {
  cafe: {
    emoji: "☕",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  restaurant: {
    emoji: "🍽️",
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
  },
  park: {
    emoji: "🌿",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  "theme park": {
    emoji: "🎢",
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
  },
  museum: {
    emoji: "🏛️",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  "view spot": {
    emoji: "🌁",
    bg: "bg-sky-50",
    text: "text-sky-700",
    border: "border-sky-200",
  },
};

export const RATING_CONFIG: Record<
  Rating,
  { label: string; emoji: string; color: string }
> = {
  "want to go": { label: "Want to go", emoji: "🔖", color: "text-stone-400" },
  liked: { label: "Liked", emoji: "⭐", color: "text-amber-500" },
  loved: { label: "Loved", emoji: "❤️", color: "text-rose-500" },
};
