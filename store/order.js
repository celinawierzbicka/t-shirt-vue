import Vue from 'vue';

export const state = () => ({
    print: {
        side: 'front',
        url: ''
    },
    details: {
        name: '',
        surname: '',
        street: '',
        buildingNumber: '',
        flatNumber: '',
        postcode: '',
        city: '',
        phone: '',
        email: ''
    }
})
  
export const actions = {
    async generatePrint({ commit }) {
        const items = await this.$axios.$get('https://picsum.photos/v2/list');
        let randomImage = items[Math.floor(Math.random() * items.length)].download_url;
        let arr = randomImage.split('/')
        arr.pop();
        arr.pop();
        arr.push('100/100');
        commit('setPrintUrl', arr.join('/'));
    },
    flipPrintSide({ commit }) {
        commit('setPrintSide');
    },

}


export const mutations = {
    setPrintUrl(state, url) {
        state.print.url = url;
    },
    setPrintSide(state) {
        state.print.side = state.print.side === 'front' ? 'back' : 'front';
    },
    setAddress(state, { key , value }) {
        state.details[key] = value;
    },

    saveToLocalStorage(state) {  
        localStorage.setItem('order', JSON.stringify(state))
    },

    loadFromLocalStorage(state) {  
        const saved = localStorage.getItem('order');
        if(saved) {
            const parsed = JSON.parse(saved);
            Vue.set(state, 'print', parsed.print)
            Vue.set(state, 'details', parsed.details)       
        }
    },



}