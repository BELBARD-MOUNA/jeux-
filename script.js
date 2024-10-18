function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

function sortArray() {
    // Récupérer la valeur entrée par l'utilisateur
    let input = document.getElementById("inputArray").value;
    
    // Convertir l'entrée en un tableau de nombres
    let arr = input.split(',').map(Number);

    // Appliquer le tri par insertion
    let sortedArr = insertionSort(arr);

    // Afficher le tableau trié
    document.getElementById("sortedArray").innerText = sortedArr.join(', ');
}
