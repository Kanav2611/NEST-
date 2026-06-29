import { Property } from "@/lib/types";

export interface SmartSearchQuery {
  maxRent?: number;
  gender?: "Boys" | "Girls" | "Co-ed";
  keywords: string[];
}

export function parseNaturalSearch(input: string): SmartSearchQuery {
  const normalized = input.toLowerCase();
  const rentMatch = normalized.match(/(?:under|below)\s*₹?\s*(\d{3,6})/);

  let gender: SmartSearchQuery["gender"];
  if (normalized.includes("girls")) {
    gender = "Girls";
  } else if (normalized.includes("boys")) {
    gender = "Boys";
  } else if (normalized.includes("co-ed") || normalized.includes("mixed")) {
    gender = "Co-ed";
  }

  const keywords = ["food", "wifi", "ac", "parking", "laundry", "single", "attached bathroom"].filter((k) =>
    normalized.includes(k)
  );

  return {
    maxRent: rentMatch ? Number(rentMatch[1]) : undefined,
    gender,
    keywords
  };
}

export function filterPropertiesBySmartQuery(properties: Property[], query: SmartSearchQuery): Property[] {
  return properties.filter((property) => {
    const rentOk = query.maxRent ? property.rentInr <= query.maxRent : true;
    const genderOk = query.gender ? property.gender === query.gender || property.gender === "Co-ed" : true;
    const keywordOk =
      query.keywords.length === 0 ||
      query.keywords.every((k) => {
        if (k === "single") {
          return property.sharingType === "Single";
        }
        if (k === "attached bathroom") {
          return property.amenities.some((a) => a.toLowerCase().includes("bathroom"));
        }
        return property.amenities.some((a) => a.toLowerCase().includes(k));
      });

    return rentOk && genderOk && keywordOk;
  });
}
