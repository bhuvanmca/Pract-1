const https = require("https");

function getFile(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {

            let data = "";

            response.on("data", (chunk) => {
                data += chunk;
            });

            response.on("end", () => {
                resolve(data);
            });

            response.on("error", (error) => {
                reject(error);
            });

        }).on("error", (error) => {
            reject(error);
        });
    });
}

exports.findMostPopularUrl = async (req, res) => {

    try {
        const logfile = req.query.logfile;

        if (!logfile) {
            return res.status(400).json({
                error: "Please provide a logfile URL"
            });
        }

        const fileContent = await getFile(logfile);

        const lines = fileContent
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0);

        const counts = {};

        for (const url of lines) {
            counts[url] = (counts[url] || 0) + 1;
        }

        let mostPopularUrl = "";
        let highestCount = 0;

        for (const url in counts) {
            if (counts[url] > highestCount) {
                mostPopularUrl = url;
                highestCount = counts[url];
            }
        }

        res.json({
            url: mostPopularUrl,
            occurrences: highestCount
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Unable to process the log file"
        });
    }
};
