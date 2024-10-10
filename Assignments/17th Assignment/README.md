# BillXpress

**BillXpress** is a React-based application that allows users to input their data, generate a receipt for 10 random products fetched from an API, and store the confirmed bill in local storage for later updates or deletion.

## Features

- **User Input**: Enter details like CNIC, Name, and Bill ID.
- **Random Product Receipt**: Displays a receipt of 10 random products with prices fetched from the API [Dummy JSON](https://dummyjson.com/).
- **Bill Confirmation**: After confirming the bill, it is stored in local storage.
- **Bill Management**: The stored bills can be viewed, deleted, or updated on a separate page.

## How It Works

1. User inputs their **CNIC**, **Name**, and **Bill ID**.
2. Upon submission, a receipt is generated with 10 random products and their total price, which is fetched via an API call to **Dunny JSON**.
3. After the bill is confirmed, it gets saved into **local storage** in an array format.
4. The stored bills are displayed on another page, where they can be **deleted** or **updated**.

## Technologies Used

- **React.js**: Frontend framework for building the UI.
- **Dunny JSON API**: Used to fetch random product data.
- **Local Storage**: To store and manage the bill data.
- **SCSS**: For styling the application.
- **Bootstrap**: For making application responsive.
- **Antd**: For Notification.
- **React Super Reponsive Table**: For Making data responsive.


## Live Demo

Here is the Live Demo to BillXpress

[BillXpress](https://assign16-219441.surge.sh/)