const arr = ["mt", "wa", "or", "id", "nv", "ut", "ca", "az"];
const obj = {
    "kone": new Set (["id", "nv", "ut"]),
    "ktwo": new Set (["wa", "id", "mt"]),
    "kthree": new Set(["or", "nv", "ca"]),
    "kfour": new Set(["nv", "ut"]),
    "kfive": new Set(["ca", "az"])
};

const greedy = (arr, obj) => {

    const need = new Set(arr);
    const checked = {};
    let resultRadios = [];

    while (need.size > 0) {
        let maxState = 0;
        let currentRadio;
        
        for (var radio in obj) {
            if (radio.length > maxState && checked.radio !== true) {
                maxState = radio.length;
                currentRadio = radio;
            }
        }

        obj[currentRadio].forEach(element => {
            if (need.has(element)) {
                need.delete(element);
            }
        });

        checked[currentRadio] = true;
        resultRadios.push(currentRadio);
    }

    return resultRadios;
};

console.log(greedy(arr, obj));