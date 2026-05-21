import { Spot } from "./types";

export const SAMPLE_SPOTS: Spot[] = [
  {
    id: "1",
    name: "Sightglass Coffee",
    category: "cafe",
    city: "San Francisco",
    visited: true,
    rating: "loved",
    notes:
      "Amazing cold brew. The SOMA location has great vibes and a huge open space.",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Zareen's",
    category: "restaurant",
    city: "Palo Alto",
    visited: true,
    rating: "loved",
    notes:
      "Best Pakistani food in the Bay. Get the chicken karahi and the naan.",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Alum Rock Park",
    category: "park",
    city: "San Jose",
    visited: false,
    rating: "want to go",
    notes:
      "Hiking trails and natural mineral springs. Been meaning to go forever.",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    name: "California Academy of Sciences",
    category: "museum",
    city: "San Francisco",
    visited: false,
    rating: "want to go",
    notes: "Rainforest dome + planetarium. Heard the NightLife events are fun.",
    created_at: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Great America",
    category: "theme park",
    city: "San Jose",
    visited: true,
    rating: "liked",
    notes:
      "Classic Bay Area summer spot. Flight Deck is the best coaster there.",
    created_at: new Date().toISOString(),
  },
  {
    id: "6",
    name: "Twin Peaks",
    category: "view spot",
    city: "San Francisco",
    visited: true,
    rating: "loved",
    notes:
      "Best panoramic view of the city. Go at golden hour or on a clear night.",
    created_at: new Date().toISOString(),
  },
  {
    id: "7",
    name: "Philz Coffee",
    category: "cafe",
    city: "San Jose",
    visited: true,
    rating: "liked",
    notes:
      "Mint Mojito Iced Coffee is iconic. Always a solid spot to work from.",
    created_at: new Date().toISOString(),
  },
  {
    id: "8",
    name: "Santa Cruz Beach Boardwalk",
    category: "theme park",
    city: "Santa Cruz",
    visited: false,
    rating: "want to go",
    notes: "Classic beach amusement park. Want to go on a sunny summer day.",
    created_at: new Date().toISOString(),
  },
  {
    id: "9",
    name: "Chez Panisse",
    category: "restaurant",
    city: "Berkeley",
    visited: false,
    rating: "want to go",
    notes:
      "Alice Waters legendary farm-to-table restaurant. On the bucket list.",
    created_at: new Date().toISOString(),
  },
  {
    id: "10",
    name: "Grizzly Peak",
    category: "view spot",
    city: "Berkeley",
    visited: true,
    rating: "loved",
    notes:
      "Stunning view of the Bay at sunset. Easy drive up and free parking.",
    created_at: new Date().toISOString(),
  },
];
