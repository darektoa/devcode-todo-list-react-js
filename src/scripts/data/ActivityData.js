import CONFIG from '../config';

const ActivityData = {
    endpoint: `${CONFIG.API_BASE_URL}/activity-groups`,

    async get() {
        const options   = {};
        const request   = new Request(this.endpoint, options);
        const response  = await fetch(request);
        const resJson   = await response.json();

        return resJson;
    },
};


export default ActivityData;