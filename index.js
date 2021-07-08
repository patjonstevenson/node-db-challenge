const server = require("./server");

const port = 4001 || process.env.PORT;

server.listen(port, () => {
    console.log(`\nServer listening on port ${port}...\n`);
});