## This directory contains main files for the Web App.

### App.js contains the main app files, all files are compiled within this file.

### All files ending with a .css are styling files for the different files.
### All other .js files are:
- Checkout.js containing code for the checkout page.
- CheckoutDrug.js containing code for the product section in the Checkout.js checkout page.
- Drug.js contains files and code for the different medicines.
- Header.js contains code for the header section of the Home page.
- Home.js contains files, imports and code for the home page.
- Login.js contains code for the login page.
- Payment.js contains files and code for the payment page.
- axios.js contains the cloud function URL.
- firebase.js contains the config file for firebase.
- reducer.js contains code for the data layer, the data layer is where products are inititalised before being added to the Cart and their corresponding prices. The Cart then fetches infor from the reducer after dispatch.
- StateProvider.js prepares, provides and pulls info from the data layer.
