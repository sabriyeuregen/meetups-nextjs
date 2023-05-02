import { MongoClient } from "mongodb";

async function handler(req, res) {
    if(req.method === "POST"){
       const data = req.body;

       const { title, image, address, description} = data;

      const client = await MongoClient.connect("mongodb+srv://sabriyeuregen:jInYjcy1ci3gXgN7@cluster0.bhhwyfy.mongodb.net/meetups?retryWrites=true&w=majority");
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status().json({message: "Meetup inserted!"});
    }
}
export default handler;