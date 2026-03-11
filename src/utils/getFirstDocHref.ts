import { getCollection } from "astro:content";

export async function getFirstDocHref(sectionId: string): Promise<string> {
  const docs = await getCollection("docs");

  const sectionDocs = docs
    .filter((d) => d.id.startsWith(sectionId + "/"))
    .sort((a, b) => a.id.localeCompare(b.id));

  const firstSubfolder = sectionDocs
    .map((d) => d.id.split("/")[1])
    .find((segment) => segment !== undefined);

  const firstDoc = sectionDocs.find(
    (d) => d.id.split("/")[1] === firstSubfolder
  );

  return firstDoc
    ? `/${firstDoc.id.replace(/\/index$/, "")}`
    : `/${sectionId}`;
}