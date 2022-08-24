import CONFIG from '../config';

const ActivityData = {
    endpoint: `${CONFIG.API_BASE_URL}/activity-groups`,

    async create(data) {
        const options   = {method: 'POST', body: JSON.stringify(data), headers: {
            'Content-Type': 'application/json'
        }};
        const request   = new Request(this.endpoint, options);
        const response  = await fetch(request);
        const resJson   = await response.json();

        return resJson;
    },

    async delete(id) {
        const options   = {method: 'DELETE'};
        const request   = new Request(`${this.endpoint}/${id}`, options);
        const response  = await fetch(request);
        const resJson   = await response.json();

        return resJson;
    },

    async find(id) {
        const options   = {};
        const request   = new Request(`${this.endpoint}/${id}`, options);
        const response  = await fetch(request);
        const resJson   = await response.json();

        return resJson;
    },

    async get() {
        const options   = {};
        const request   = new Request(this.endpoint, options);
        const response  = await fetch(request);
        const resJson   = await response.json();

        return resJson;
    },
};


export default ActivityData;