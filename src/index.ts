import { getApp } from "./app";
import connectDB from "./connectDB";


const port = process.env.PORT || 3000;
const app = getApp();

app.listen(port, async () => {
  await connectDB();
  console.log(`App is running at http://localhost:${port}`);
});
