import moment from 'moment';

export const state = () => {
  news: [];
};
export const mutations = {
  setNews(state, news) {
    state.news = news;
  }
};
export const actions = {
  async getNews({ commit }) {
    const { data } = await this.$axios.get(
      `http://newsapi.org/v2/top-headlines?country=ru&apiKey=${process.env.API_KEY}`
    );
    const news = data.articles.map(news => ({
      title: news.title,
      url: news.url,
      description: news.description,
      source: news.source,
      published: moment()
        .utc(news.publishedAt)
        .format('dddd, Do, h:mm')
    }));
    commit('setNews', news);
  },
  async getNewsByСategory({ commit }, category) {
    const { data } = await this.$axios.get(
      `http://newsapi.org/v2/top-headlines?country=ru&category=${category}&apiKey=${process.env.API_KEY}`
    );

    const news = data.articles.map(news => ({
      title: news.title,
      url: news.url,
      description: news.description,
      source: news.source,
      published: moment()
        .utc(news.publishedAt)
        .format('dddd, Do, h:mm')
    }));
    commit('setNews', news);
  },
  async searchNews({ commit }, query) {
    const { data } = await this.$axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`
    );
    const news = data.articles.map(news => ({
      title: news.title,
      url: news.url,
      description: news.description,
      source: news.source,
      published: moment()
        .utc(news.publishedAt)
        .format('dddd, Do, h:mm')
    }));
    commit('setNews', news);
  }
};
export const getters = {
  news(state) {
    return state.news;
  }
};
