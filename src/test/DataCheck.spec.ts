import RandomDataSET from '../util/dataGenerator'




describe('Data Collection from API', () => {
    test('The return Array must have 9 items ', async () => {
        const RandomDataGenerator = await RandomDataSET.$DataGenerator();
        expect(RandomDataGenerator.length).toBe(9);
    }, 30000);

    test('The return Array must have 1 fox items ', async () => {
        const RandomDataGenerator = await RandomDataSET.$DataGenerator();
        var FilteredArraywithFoxName = RandomDataGenerator?.filter((anAnimal)=>{
            return anAnimal.AnimalType === 'fox';
        })
        expect(FilteredArraywithFoxName.length).toBe(1);
    }, 30000);


    test('The return Array must have 4 cat items ', async () => {
        const RandomDataGenerator = await RandomDataSET.$DataGenerator();
        var FilteredArrayithCatName = RandomDataGenerator?.filter((anAnimal)=>{
            return anAnimal.AnimalType === 'cat';
        })
        expect(FilteredArrayithCatName.length).toBe(4);
    }, 30000);


    
    test('The return Array must have 3 dog items ', async () => {
        const RandomDataGenerator = await RandomDataSET.$DataGenerator();
        var FilteredArraywithDogName = RandomDataGenerator?.filter((anAnimal)=>{
            return anAnimal.AnimalType === 'dog';
        })
        expect(FilteredArraywithDogName.length).toBe(4);
    }, 30000);

    
});