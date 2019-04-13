import stocks from "../../data/stocks";

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCK'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {
        state.stocks.forEach(stock => {
            stock.price = stock.price * (1 + Math.random() - 0.5) >> 0;
        });
    }
}

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order)
    },
    initStock: ({commit}) => {
        commit('SET_STOCK', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS')
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}