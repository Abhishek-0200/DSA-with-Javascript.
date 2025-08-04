var totalFruit = function(fruits) {
    let leftIndex = 0;
    let maxFruits = 0;
    const basket = new Map(); 
    for (let rightIndex = 0; rightIndex < fruits.length; rightIndex++) {
        const fruit = fruits[rightIndex];
        basket.set(fruit, (basket.get(fruit) || 0) + 1);

        while (basket.size > 2) {
            const leftFruit = fruits[leftIndex];
            basket.set(leftFruit, basket.get(leftFruit) - 1);
            if (basket.get(leftFruit) === 0) {
                basket.delete(leftFruit);
            }
            leftIndex++;
        }

        maxFruits = Math.max(maxFruits, rightIndex - leftIndex + 1);
    }

    return maxFruits;
};
