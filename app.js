const express = require("express");

const urlRoutes = require("./routes/urlRoutes");

const app = express();

app.use(express.json());

app.use("/api/urls", urlRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
