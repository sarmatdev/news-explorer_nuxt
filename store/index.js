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
    const country = await this.$axios.get(`https://ipapi.co/country`);
    const { data } = await this.$axios.get(
      `http://newsapi.org/v2/top-headlines?country=${country.data}&apiKey=${process.env.API_KEY}`
    );

    const news = data.articles.map(news => ({
      title: news.title,
      url: news.url,
      description: news.description,
      source: news.source,
      published: moment()
        .utc(news.publishedAt)
        .fromNow(true)
    }));
    commit('setNews', news);
  }
};
export const getters = {
  news(state) {
    return state.news;
  }
};
