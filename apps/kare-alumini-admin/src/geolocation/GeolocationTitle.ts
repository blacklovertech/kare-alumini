import { Geolocation as TGeolocation } from "../api/geolocation/Geolocation";

export const GEOLOCATION_TITLE_FIELD = "id";

export const GeolocationTitle = (record: TGeolocation): string => {
  return record.id?.toString() || String(record.id);
};
