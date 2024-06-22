const http = require("http");
const fs = require("fs");

const routes =
{
    "/" : "./pages/home.html",
    "/music&art" : "./pages/music&art.html",
    "/about" : "./pages/about.html"
};

const server = http.createServer((req, res) =>
{
    switch (req.method)
    {
        case "GET":
            res.setHeader("Content-type", "text/html");

            let path = routes[req.url];
            console.log(path);

            fs.readFile(path, null, (error, data) =>
            {
                if (error)
                {
                    console.log(error);
                    res.end();
                }
                else
                {
                    res.end(data);
                }
            });
            break;

        default:
            res.end();
            break;
    }
});

server.listen(3000, () => console.log("Server active"));