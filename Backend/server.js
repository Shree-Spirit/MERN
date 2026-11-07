const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

console.log("DNS servers:", dns.getServers());

const app = require("./src/app");
const connectDB = require("./src/db/db");

async function startServer() {
try {
await connectDB();


    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
} catch (error) {
    console.error("Failed to start server:", error);
    process.exitCode = 1;
}


}

startServer();
