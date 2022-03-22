# Zoe Drug Store

![ZDS Logo with Bkgrnd](https://user-images.githubusercontent.com/65196859/158594785-fb4172a0-876f-429d-8610-32b5a3ec2eb9.png)

## Introduction
This project contains files for an online e-commerce drug store with full functionality,it is part of a software engineering project for demonstration purposes.

To view the full functional web app on your browser, use the link [here](https://drug-store-9dcfb.web.app/).
You can also read the fullproject blog here.
The author of this project is Derrick Ampire,
- [GitHub](https://github.com/am-derrick)
- [LinkedIn](https://www.linkedin.com/in/ampire-derrick-1957b0185/)
- [Twitter](https://www.twitter.com/am_derrick)

## Installation
To run this app without using your web browser, simply fork and download the files on your local machine or server, then install react. User `npx create-react-app` to create the app, and install the react router dom with `npm install react-router-dom`. 
Use `npm start` to view the files on your local host and `npm run build` and `firebase deploy` to deploy, assuming you've installed all the necessary dependencies. Refer to the [react router documentation](https://reactrouter.com/docs/en/v6/api) and [getting started with react](https://reactjs.org/docs/getting-started.html) for more details.

This project was developed using React Javascript.
It uses Firebase that provides:
- Hosting,
- storage of the files including the images,
- future implementation of databases,
- secure authentication and log in.
It uses Stripe API to process its payment.

## Usage
The user is required to sign in into the web app in order to make purchases of available drugs. Firebase handles both the authentication and storage. On signing in/logging in, the user makes a purchase by clicking the 'Add to cart' button and adding desired items. The user can then proceed to the checkout page or navigate using the cart icon on the nav bar.

On the checkout page, the user can remove items or navigate back to the home page using the back option in broweser or by clicking the website's logo. After confirmation of items, the user can confirm items and proceed to the payment page where card details can be entered. Stripe functionality is currently supported at the moment and because this is just an app for demo purposes but not a full fledged website, we discourage users from using real credit or debit card details. The user then makes the payment while Stripe's API handles all the back logic and processing. 


## Contributing
To contribute to the project;
- Simply fork of the project on Github and Clone the fork on your local machine. 
- Implement/fix your feature and remember to comment your code (use the code style of the project), add or change the documentation as needed.
- Push your branch to your fork on Github. From your fork open a pull request and target the project's `develop` branch if there is one, else go for `master`!
- Once the pull request is approved and merged you can pull the changes to your local repo and delete your extra branch(es).

## Related projects

## Licensing
