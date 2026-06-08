export type ShippingZone = "CABA" | "GBA" | "OTHER";

export const SHIPPING_RATES: Record<ShippingZone, number> = {
  CABA: 2500,
  GBA: 3500,
  OTHER: 5000,
};

export const SHIPPING_LABELS: Record<ShippingZone, string> = {
  CABA: "CABA",
  GBA: "GBA",
  OTHER: "Interior del país",
};

export function getShippingZone(zipCode: string): ShippingZone {
  const zip = parseInt(zipCode);
  if (isNaN(zip)) return "OTHER";
  if (zip >= 1000 && zip <= 1499) return "CABA";
  if (zip >= 1500 && zip <= 1999) return "GBA";
  return "OTHER";
}

export function getShippingCost(zipCode: string): number {
  const zone = getShippingZone(zipCode);
  return SHIPPING_RATES[zone];
}
