# How to bind MongoDB database to a Pivot Table

A quick start project for connecting a MongoDB database to a Syncfusion Pivot Table. This repository includes a Web API Controller (PivotController) for retrieving data from a MongoDB database, as well as a quick start sample for the TypeScript platform that displays the retrieved data in a Pivot Table.

**Documentation:** https://ej2.syncfusion.com/documentation/pivotview/getting-started/

## Project prerequisites

Before beginning work on the server and client projects, ensure the following software to be installed in the machine.

* [git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* Compatible versions of [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/ ) and [.NET Core SDK 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) or later installed on your machine

## How to run this application?

* To run this application, clone the `how-to-bind-MongoDB-database-to-pivot-table` repository and then open **PivotController** in Visual Studio 2022. Simply build and run your project in IIS Express, and it will host and display the URL `https://localhost:7105`.

*  Now open TypeScript sample in Visual Studio Code and and install the necessary npm packages using the following command.

```sh
npm install
```

* Initialize the Pivot Table, map the hosted URL, prepare and add a pivot report, and finally run your project using the following command to achieve the desired result.

```sh
npm run start
```