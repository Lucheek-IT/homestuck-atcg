import { readFileSync } from 'node:fs';
import { parse } from "csv-parse/sync";

const csvLoader = (csvFile) => {
    const cardCsv = readFileSync(csvFile, { encoding: 'utf-8' });
    const cardRecords = parse(cardCsv, {
        columns: true,
        skip_empty_lines: true
    });

    return cardRecords.map((card) => {
        card['Game Text'] = card['Game Text'].replaceAll('//', "\n\n");
        card['Game Text HTML'] = card['Game Text'].replaceAll("\n", "<br>");
        return card;
    });
};

export default {
    allCharacter() {
        return csvLoader('./src/cards/characters.csv');
    },

    allInventory() {
        return csvLoader('./src/cards/inventory.csv');
    },

    allExecutable() {
        return csvLoader('./src/cards/executables.csv');
    },

    allPlanets() {
        return csvLoader('./src/cards/planets.csv');
    },
}