export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    const reversed2 = collection_2.slice().reverse();

    const result: number[] = [];
    let i = 0, j = 0, k = 0;

    while (i < collection_1.length || j < reversed2.length || k < collection_3.length) {
        const candidates: {value: number, source: 'c1'|'c2'|'c3'}[] = [];

        if (i < collection_1.length) candidates.push({value: collection_1[i], source: 'c1'});
        if (j < reversed2.length) candidates.push({value: reversed2[j], source: 'c2'});
        if (k < collection_3.length) candidates.push({value: collection_3[k], source: 'c3'});

        let minCandidate = candidates[0];
        for (const c of candidates) {
            if (c.value < minCandidate.value) {
                minCandidate = c;
            }
        }

        result.push(minCandidate.value);
        if (minCandidate.source === 'c1') i++;
        else if (minCandidate.source === 'c2') j++;
        else k++;
    }

    return result;
}