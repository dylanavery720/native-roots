import { createConnection } from 'typeorm'
import * as ormconfig from '../../ormconfig'
const seed = require("../../bay_data.json")



let seedData = []
const init = async () => {
    for (let i = 0; i <= seed.length - 1; i++) {
        seedData.push({ id: seed[i].id, lightCount: seed[i].lightCount, squareFootage: seed[i].squareFootage })
    }
}


export const seedPosts = async () => {
    const dbConnection = await createConnection(ormconfig as any);
    await init()
    const promises = seedData.map(async (item: any) => {
        return await dbConnection.createQueryBuilder().insert().into('Bay').values(item).execute();
    });
    await Promise.all(promises);
};

seedPosts()