import axios from 'axios'

const basketStore = {
  namespaced: true,
  state() {
    return {
      productsInBasket: []
    };
  },

  getters: {
    getSummuryPrice(state) {
      return state.productsInBasket.reduce((acc, product) => acc + product.price, 0)
    }
  },

  mutations: {
    setProductsInBasket(state, newValue) {
      state.productsInBasket = newValue;
    },

    addProductsToBasket(state, product) {
      state.productsInBasket.push(product);
      localStorage.productsInBasket = state.productsInBasket;
    },

    removeProductsToBasket(state, product) {
      state.productsInBasket = state.productsInBasket.filter(item => item.id !== product.id)
      localStorage.productsInBasket = state.productsInBasket;
    }
  },

  actions: {
     async addProductToAPI({dispatch, commit, rootState }, productId) {
      try {
        await axios.post(`${rootState.API_URL}cart/${productId}`, null, {
          headers: {
            Authorization: `Bearer ${rootState.userToken}`
          }
        })

        await dispatch('updateProductsInBasket')

      }catch (error) {
        console.error(error);
      }
    },

    async removeProductFromAPI({ dispatch, rootState }, productId) {
       try{
         await axios.delete(`${rootState.API_URL}cart/${productId}`, {
           headers: {
             Authorization: `Bearer ${rootState.userToken}`
           }
         })

         await dispatch('updateProductsInBasket')
       }catch (error) {
         console.error(error);
       }

    },
    async updateProductsInBasket({ commit, rootState }) {
      try {
        const response = await axios.get(`${rootState.API_URL}cart`, {
          headers: {
            Authorization: `Bearer ${rootState.userToken}`
          }
        })

        commit('setProductsInBasket', response.data.data);
      }catch (error) {
        console.error(error);
      }
    }

  }
};

export default basketStore;