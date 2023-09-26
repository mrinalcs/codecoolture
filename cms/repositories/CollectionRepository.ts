import { Collection } from "@/cms/models/Collection";

export class CollectionRepository {
  public async all(): Promise<Collection[]> {
    const { collections } = await import("@/cms/content/collections.json");

    return collections.map((collection) => new Collection(collection.slug, collection.name));
  }

  public async show(slug: string): Promise<Collection> {
    const { collections } = await import("@/cms/content/collections.json");

    const collection = collections.find((collection) => collection.slug === slug);

    if (collection === undefined) {
      throw new Error(`Invalid collection: '${slug}'`);
    }

    return new Collection(collection.slug, collection.name);
  }
}
