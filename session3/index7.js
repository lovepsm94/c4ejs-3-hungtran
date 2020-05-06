//bai 8: 
const sheepsSizes = [5, 7, 300, 90, 24, 50, 75];
console.log('Hello my name is hung and here is my sheep sizes: ')
console.log(...sheepsSizes);
console.log(`Now my biggest sheep has size ${Math.max(...sheepsSizes)}, let shave it`);
sheepsSizes[sheepsSizes.indexOf(Math.max(...sheepsSizes))] = 8;
console.log('After shearing, here is my flock:');
console.log(...sheepsSizes);
//after 1 mounth
console.log('Mounth 1')
console.log('One mounth has passed, my sheeps have grown, here are their sizes');
let sheepsSizesGrown = sheepsSizes.map(sheepsSize => sheepsSize + 50);
console.log(...sheepsSizesGrown);
console.log(`Now my biggest sheep has size ${Math.max(...sheepsSizesGrown)}, let shave it`);
sheepsSizesGrown[sheepsSizesGrown.indexOf(Math.max(...sheepsSizesGrown))] = 8;
console.log('After shearing, here is my flock:');
console.log(...sheepsSizesGrown);
//after next 4 mounths
for (let i = 1; i < 5; i++){
    console.log(`Mounth ${i+1}`);
    console.log(`${i+1} mounth has passed, my sheeps have grown, here are their sizes`);
    let sheepsSizesGrown = sheepsSizes.map(sheepsSize => sheepsSize + (i + 1)*50);
    console.log(...sheepsSizesGrown);
    if (i === 4) {
        let totalSize = 0;
        for (let i = 0; i < sheepsSizesGrown.length; i++){
            totalSize += sheepsSizesGrown[i];
        }
        console.log(`My flock has size in total: ${totalSize}`);
        console.log(`I would get ${totalSize} * 2$ = ${totalSize*2}`);
        break;
        
    }
    sheepsSizesGrown[sheepsSizesGrown.indexOf(Math.max(...sheepsSizesGrown))] = 8;
    console.log('After shearing, here is my flock:');
    console.log(...sheepsSizesGrown);
}
//I became bored, I want to sell my flock
let totalSize = 0;
