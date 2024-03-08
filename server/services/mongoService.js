import {MongoClient, ServerApiVersion} from "mongodb";


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const MONGODB_OPTIONS = {useUnifiedTopology: true};
const connectToMongoDB = async () => {
    const client = new MongoClient(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    await client.connect();
    return client;
};

const closeMongoDBConnection = async (client) => {
    await client.close();
};

const find = async (dbName, collectionName, query) => {
    const client = new MongoClient(MONGODB_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        return await collection.find(query).toArray();
    } catch (error) {
        console.log("Error in network while accessing the db: ", error.message);
    } finally {
        await client.close();
    }
};

const updateGuest = async (
    dbName,
    collectionName,
    filter,
    newGuestList,
    comments,
    allergyInfo,
    confirmationSiteDone,
    confirmationRoomBooking,
    roomBooking) => {
    const client = new MongoClient(MONGODB_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const result = await collection.updateOne(
            filter,
            {
                $set: {
                    'guestList': newGuestList,
                    'comments': comments,
                    'allergyInfo': allergyInfo,
                    'confirmationSiteDone': confirmationSiteDone,
                    'confirmationRoomBooking': confirmationRoomBooking,
                    'roomBooking': roomBooking
                }
            }
        );

        console.log('Guest list updated successfully.');

        return result;
    } finally {
        await client.close();
    }
};

export default find;
export {updateGuest};
