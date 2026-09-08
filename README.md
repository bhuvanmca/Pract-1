# Project to find the most popular url in the log file.

**Overall Architecture**
Github --> Aws EC2 --> Express API on port 3000 --> Nginx on port 80 --> Public Internet 

**Tech Stack**
-node.js
-express
-Nginx
-pm2
-Aws EC2

**Folders and files**
-app.js
-Controllers/urlcontroller.js
-node_modules
-package-lock.json
-routes

app.js 
*creates the express app
* the express app helps to communicate b/w the softwares
* Connects the app to the routes
* Starts the server on port 3000
  
Controller/urlController.js 
* Gets the file's web address from the request
* Checks that a URL was actually provided
* Downloads the file
* Breaks the file into lines
* Counts how many times each URL appears
* Finds the most occurred link in the file
* Sends back the answer

routes/urlRoutes.js
*Receives requests coming in from app.js
*Checks the address of the request
*Sends the request to the correct function in urlController.js

package.json
*Lists the project's name and details
*Lists which packages the project needs
*Used by npm to know what to install

node_modules
*auto-created when using the npm insall

routes
*helps to hold the file and direct the incomming requests




