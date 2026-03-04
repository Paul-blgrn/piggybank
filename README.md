
# PiggyBank

PiggyBank is a simple web application designed to help track income and expenses.
Its goal is to provide a quick overview of your overall balance based on custom entries.

The application allows users to record financial transactions with the following information:

- Name
- Description
- Amount
- Type (Income or Expense)
- Quantity

Each entry is automatically calculated.

The overall balance is determined by adding:

- Income (positive value)
- Expenses (negative value)
## Authors

- [@h0ldhaven](https://www.github.com/h0ldhaven)


## Demo

[Click-me](https://h0ldhaven.github.io/piggybank/)


## Tech Stack

**Client:** React, Javascript, HTML / CSS


## Features

- Add income entries
- Add expense entries
- Automatic calculation of transaction totals
- Real-time global balance update
- Dynamic refresh after each modification


## Roadmap

- Transaction categories
- Data export (CSV / JSON)
- Graphical data visualization
- Persistent storage
- Multi-currency support


## Run Locally

Clone the project

```bash
  git clone https://github.com/h0ldhaven/piggybank.git
```

Go to the project directory

```bash
  cd piggybank
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
