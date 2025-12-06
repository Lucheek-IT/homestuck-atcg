import { getImage } from "astro:assets";
import CardNotFound from "../images/card-not-found.svg";

export default async (card, artCollection) => {
    // Most cards have 1, but planets have 2, so we're using an array to deal with em.
    let pictureField = card.Pictures ?? card.Picture ?? '';
    if (card['Picture (Destroyed)']) {
        pictureField = pictureField + ' // ' + card['Picture (Destroyed)'];
    }

    let cardArt = pictureField.split('//').map((pic) => artCollection[pic.trim()]);

    return await Promise.all(
        cardArt.map(async (art) => {
            if (!art) {
                art = CardNotFound;
            }

            const publicImage = await getImage({src: art});

            return {
                asset: art,
                public: publicImage,
            };
        })
    );
};
