import type { AstroAssets } from "astro:assets";
import type {Card} from "./CardRepository";

interface ResolvedArt {
    asset: object, // WHAT ARE YOU???
    public: AstroAssets,
}

interface ArtCollection {
    [propName: string]: object;
}

declare type _default = (card: Card, artCollection: ArtCollection) => Promise<ResolvedArt[]>;

export { ResolvedArt, ArtCollection };
export default _default;