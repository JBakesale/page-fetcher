const http = require("http");
const fs = require("fs");

const url = process.argv[2];
const filePath = process.argv[3];

http.get(url, (response) => {
  let content = "";

  response.on("data", (info) => {
    content += info;
  });

  response.on("end", () => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error("Error saving the file:", err);
        return;
      }

      console.log(
        `Downloaded and saved ${content.length} bytes to ${filePath}`
      );
    });
  });
});
