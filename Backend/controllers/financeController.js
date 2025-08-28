const yahooFinance = require("yahoo-finance2").default;

const getStockQuote = async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const quote = await yahooFinance.quoteSummary(symbol, {
      modules: ["price", "summaryDetail"],
    });
    res.json(quote);
  } catch (err) {
    console.error("Yahoo Finance error:", err);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
};

module.exports = { getStockQuote };
