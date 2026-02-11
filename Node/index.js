const http = require("http");
const fs = require("fs");
const os = require("os");
const myserver = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("welcome to home page");
  } else if (req.url == "/products") {
    res.end(`
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Image Example</title>
        </head>
        <body>

        <h2>My Image</h2>
        <img src="https://www.abes.ac.in/assets/HomePage/2%20About%20ABES.jpg" alt="My photo" width="600" height="600">

        </body>
        </html>
        `);
  } else if (req.url == "/about") {
    res.end("welcome to about page");
  } else {
    res.end("404 page not found");
  }
});

myserver.listen(8000, (req, res) => {
  console.log("server is running on port 8000");
});

fs.writeFileSync("./it-a.txt", "we are student of IT department");

fs.readFile("./it-a.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("result", result);
  }
});

fs.appendFileSync(
  "./it-a.txt",
  "and i am happy to be in this department which is going places",
);

fs.writeFileSync("./a1.txt", "this is the content of a1 file.");
fs.cpSync("./a1.txt", "./b1.txt");

fs.unlinkSync("./a1.txt");

fs.readFile("it-a.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }
  console.log("File content :  ", data);
});

// async function readJsonFile() {
//   try {
//     const jsonstring = await fs.promises.readFile("it-a.txt", "utf8");
//     const data = JSON.parse(jsonstring);
//     console.log("Data read", data);
//     console.log("Accessing property ", data.name);

//     return data;
//   } catch (error) {
//     console.error("Error in file", error);
//     throw error;
//   }
// }

// readJsonFile();
const os = require("os");
console.log("platform", os.platform());
console.log("architecture", os.arch());
console.log("total memory", os.totalmem());
console.log("free memory", os.freemem());
console.log("uptime", os.uptime());
console.log("homedir", os.homedir());
console.log("hostname", os.hostname());
console.log("network interfaces", os.networkInterfaces());
console.log("userinfo", os.userInfo());
