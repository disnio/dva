const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';
export const LOAD_POST = 'LOAD_POST';

function createRequestTypes(base) {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc
    }, {})
}

export const POSTS = createRequestTypes('POSTS');

function action(type, payload = {}) {
    return {type, ...payload}
}

export const posts = {
    request: () => action(POSTS[REQUEST]),
    success: (response) => action(POSTS[SUCCESS], {response}),
    failure: (error) => action(POSTS[FAILURE], {error}),
};

export const loadPosts = ({page=1, tag="", limit=2})=> action(LOAD_POST, {page, tag, limit});

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);

