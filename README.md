# 📊 Bind MongoDB Database to a Syncfusion Pivot Table

> Quick-start samples demonstrating how to retrieve data from a MongoDB database via a Node.js/Express Web API and display it using Syncfusion EJ2 PivotView (Pivot Table) across JavaScript (vanilla), TypeScript, Angular, React, Vue, and .NET sample patterns.

---

## 📚 Table of Contents

- 🔍 Project Overview
- 🚀 Quick Start
- ✨ Key Features
- 🛠️ Supported Platforms & Dependencies
- 🧭 Project Structure
- 🧩 Minimal Example (MongoDB API + PivotView)
- ⚙️ Configuration & Environment
- 🧪 Testing & CI
- 🤝 Contributing
- 📜 License & Support

---

## 🔍 Project Overview

This repository demonstrates how to connect to a MongoDB database from a Node.js/Express Web API (server) and surface query results to client applications using Syncfusion EJ2 PivotView controls. It includes a vanilla JavaScript client sample and patterns that can be adapted to TypeScript, Angular, React, Vue, and server-side frameworks.

Use cases:
- Lightweight analytics and multidimensional reporting
- Sales/finance pivot reporting from MongoDB collections
- Rapid prototyping of PivotView integrations with MongoDB backends

Repository reference sample: https://github.com/SyncfusionExamples/web-how-to-bind-MongoDB-to-pivot-table

---

## 🚀 Quick Start

Prerequisites
- Node.js 16+ (LTS recommended)
- MongoDB server (local MongoDB, MongoDB Atlas, or connection string)
- Optional: npm (comes with Node.js) for front-end dependencies

Run the Web API (server)

```bash
cd server
npm install
# set environment variable MONGODB_URI or edit config
node index.js
# API runs on the configured port (see server/index.js)
```

Run the front-end sample (vanilla JavaScript)

```bash
cd (front-end sample folder) # e.g., src/ or a client sample directory
npm install
npm start
```

First success: Open the front-end sample URL (e.g., http://localhost:3000) and confirm the PivotView loads rows from the running Web API.

---

## ✨ Key Features

- MongoDB Node.js integration (`mongodb` driver) in the Express API ✅
- Simple REST endpoint returning JSON consumable by PivotView ✅
- Vanilla JavaScript client sample binding `ej.pivotview.PivotView` ✅
- Copy-paste-ready patterns for server → client binding to Syncfusion PivotView ✅

Why this helps:
- Quickly exposes MongoDB collections to interactive pivot reporting.
- Reusable patterns across modern front-end frameworks.

---

## 🛠️ Supported Platforms & Dependencies

- Languages: JavaScript/TypeScript (Node.js backend, client)
- Server (`server/package.json`):
	- `express` — lightweight web framework
	- `mongodb` — official MongoDB Node.js driver
	- `cors` — enable cross-origin requests for local testing
	- `dotenv` (optional) — load environment variables from `.env`
- Client: `@syncfusion/ej2` umbrella or per-framework packages (e.g., `@syncfusion/ej2-pivotview` 30.x+)
- System requirements: Node.js, MongoDB (or Atlas), npm for front-end builds

---

## 🧭 Project Structure (high level)

- server — Node.js/Express Web API that queries MongoDB and returns JSON
- src — front-end sample (vanilla JS/TS) using Syncfusion PivotView
- `components/` — reusable client-side components (e.g., `pivotTable.js`)
- `services/` — client-side services (e.g., `elasticsearchService.js` adapted for MongoDB)

Entry points:
- API route: index.js or `server/routes/pivot.js` (or similar)
- Client mount: index.html and main.js or framework equivalents

---

## 🧩 Minimal Example (MongoDB API + PivotView)

Server: basic MongoDB query (Node.js, using `mongodb` driver)

```js
// server/index.js (minimal)
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb';

app.get('/api/pivotdata', async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(); // uses db from URI or default
    const col = db.collection('sales_sample'); // collection with documents
    const cursor = col.find({}, { projection: { Country: 1, Product: 1, Amount: 1, _id: 0 } }).limit(1000);
    const rows = await cursor.toArray();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch pivot data' });
  } finally {
    await client.close();
  }
});

app.listen(port, () => console.log(`API listening on port ${port}`));
```

Client: bind PivotView (vanilla JS)

```html
<!-- include Syncfusion CSS/JS via CDN or bundle -->
<link href="https://cdn.syncfusion.com/ej2/30.1.42/ej2-base/styles/material.css" rel="stylesheet" />
<link href="https://cdn.syncfusion.com/ej2/30.1.42/ej2-pivotview/styles/material.css" rel="stylesheet" />
<script src="https://cdn.syncfusion.com/ej2/30.1.42/ej2-base/dist/global/ej2-base.min.js"></script>
<script src="https://cdn.syncfusion.com/ej2/30.1.42/ej2-pivotview/dist/global/ej2-pivotview.min.js"></script>

<div id="PivotTable" style="height: 400px;"></div>
<script>
fetch('/api/pivotdata')
  .then(r => r.json())
  .then(data => {
    var pivot = new ej.pivotview.PivotView({
      dataSourceSettings: {
        dataSource: data,
        rows: [{ name: 'Country' }],
        columns: [{ name: 'Product' }],
        values: [{ name: 'Amount' }]
      },
      showFieldList: true,
      height: 400
    });
    pivot.appendTo('#PivotTable');
  })
  .catch(err => console.error('Failed to load pivot data', err));
</script>
```

---

## ⚙️ Configuration & Environment

- MongoDB connection: store credentials securely (environment variables or secret manager). Example connection string formats:

Local:
```text
MONGODB_URI=mongodb://localhost:27017/mydb
```

Atlas:
```text
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```

- Configure environment variables in a `.env` file (use `dotenv`) or set them in your hosting environment.
- CORS: enable for local front-end origins in index.js for development.

Troubleshooting:
- Verify MongoDB user permissions for the queried collection.
- Confirm network access to Atlas (whitelist IPs) or local MongoDB instance.
- Increase query limits or add indexes for large collections.

---

## 🧪 Testing & CI

- Add GitHub Actions to run basic checks:
	- `npm ci` / `npm run build` for front-end samples
	- `npm install` / `node server/index.js` smoke test for the API
- Suggested jobs:
	- `install dependencies` / `lint` / `unit tests` (if present)
	- `start server` and `run end-to-end checks` against `/api/pivotdata`

---

## 🤝 Contributing

Contributions welcome. Suggested workflow:
1. Fork and create a branch `feature/<desc>`
2. Run the Web API locally and test sample clients
3. Open a PR with description, screenshots, and testing steps

---

## 📜 License & Support

This is a **commercial product** subject to the Syncfusion End User License Agreement (EULA).

**Free Community License** is available for qualifying users/organizations:  
- Annual gross revenue < $1 million USD  
- 5 or fewer total developers  
- 10 or fewer total employees  

The community license allows free use in both internal and commercial applications under these conditions.  
No registration or approval is required — just comply with the terms.

**Paid Licenses** are required for:  
- Larger organizations  
- Teams exceeding the community license limits  
- Priority support, custom patches, or on-premise deployment options  

Purchase options and pricing: https://www.syncfusion.com/sales/products  
30-day free trial (full features, no credit card required): https://www.syncfusion.com/downloads/essential-js2  
Community License details & FAQ: https://www.syncfusion.com/products/communitylicense  
Full EULA: https://www.syncfusion.com/eula/es/

© 2026 Syncfusion, Inc. All Rights Reserved.