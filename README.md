# Hello World app

## Authors

-  [@thesatyam05](https://www.github.com/thesatyam05)

## Local Setup

### Backend Local Setup

```bash
  cd server
  npm install
```

-  add Env Variables to .env ( https://www.mongodb.com/atlas/database )

```bash
  MONGODB_URI=mongodb+srv://<username>:<password>@transactionscluster.odqstks.mongodb.net/<dbname>?retryWrites=true&w=majority
```

```bash
  npm run start
```

Api server will start at http://localhost:8000

### Frontend Local Setup

```bash
  cd client
  npm install
```

```bash
  npm run dev
```

React.js Frontend will start at http://localhost:5173
