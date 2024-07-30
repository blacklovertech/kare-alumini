import { ResourceLibrary as TResourceLibrary } from "../api/resourceLibrary/ResourceLibrary";

export const RESOURCELIBRARY_TITLE_FIELD = "id";

export const ResourceLibraryTitle = (record: TResourceLibrary): string => {
  return record.id?.toString() || String(record.id);
};
