export async function getSolanaMarketData() {
    try {
        const res = await fetch(
            "https://api.dexscreener.com/latest/dex/search?q=SOL"
        );

        const data = await res.json();

        const pair = data?.pairs?.[0];

        if (!pair) {
            return {
                price: 0,
                volume: 0,
                liquidity: 0,
                volatility: 0
            };
        }

        return {
            price: Number(pair.priceUsd || 0),
            volume: Number(pair.volume?.h24 || 0),
            liquidity: Number(pair.liquidity?.usd || 0),
            volatility: Math.random() * 0.2
        };

    } catch (err) {
        console.error("Market fetch error:", err);

        return {
            price: 0,
            volume: 0,
            liquidity: 0,
            volatility: 0
        };
    }
}
