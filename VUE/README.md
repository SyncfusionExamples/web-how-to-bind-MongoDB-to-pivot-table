# How to bind MongoDB to a Pivot Table

A quick start project for connecting a MongoDB to a Syncfusion Pivot Table. This repository includes a Web API Controller ([MyWebService](../MyWebService/)) for retrieving data from a MongoDB, as well as a quick start sample in the Vue platform that displays the retrieved data in a Syncfusion Pivot Table.

## Project prerequisites

Before beginning work on the server and client projects, ensure the following software to be installed in the machine.

* [git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [Vue](https://vuejs.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/ ) and [.NET Core SDK 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) or later installed on your machine.

## How to run this application?

* To run this application, clone the [how-to-bind-MongoDB-to-pivot-table](https://github.com/SyncfusionExamples/how-to-bind-MongoDB-database-to-pivot-table.git) repository and then open **MyWebService** project in Visual Studio 2022. Simply build and run your project in IIS Express, and it will host and display the URL `https://localhost:44346`.

*  Now open Vue sample in Visual Studio Code and and install the necessary npm packages using the following command.

```sh
npm install
```

* Initialize the Pivot Table, map the hosted URL, create a pivot report, and finally run your project using the following command to achieve the desired result.

```sh
npm run dev
```