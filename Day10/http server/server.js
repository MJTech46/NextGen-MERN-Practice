import http from "http";

const port = 3333;


const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        h1 {
            color: #333;
            text-align: center;
            font-size: 3rem;
            margin-bottom: 10px;
        }
        p {
            color: #555;
            text-align: center;
            font-size: 1.25rem;
        }
        .container {
            background-color: #fff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 80%;
            max-width: 600px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Homepage</h1>
        <p>This is a simple homepage served by your Node.js server.</p>
        <p>Enjoy browsing!</p>
    </div>
</body>
</html>
`;


const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(htmlContent);
});


server.listen(port, () => {
    console.log(`Server is started at http://localhost:${port}`)
})
