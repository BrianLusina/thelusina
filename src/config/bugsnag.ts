const {
  _env_
} = window

const BUGSNAG_API_KEY = _env_ ? _env_.BUGSNAG_API_KEY : process.env.BUGSNAG_API_KEY || ''

export default {
  apiKey: BUGSNAG_API_KEY,
};
