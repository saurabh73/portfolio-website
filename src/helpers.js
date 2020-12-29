import { format, parseISO } from 'date-fns';
const Helpers = {
  // Main wrapper for Fetch API
  httpRequest: (url, method, payload, headers) => {
    // Configuration to accept json as a default
    const config = {
      mode: 'no-cors',
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // method = post and payload, add it to the fetch request
    if (method.toLowerCase() === 'post' && payload && payload.length > 0) {
      config.body = JSON.stringify(payload);
    }
    // if custom headers need to be set for the specific request
    // override them here
    if (headers && typeof headers === 'object' && Object.keys(headers).length > 0) {
      config.headers = headers;
    }
    return fetch(
      url,
      config
    ).then((response) => {

      console.log(response.status);
      // Check if the request is 200
      if (response.ok) {
        let data = response;

        // if the type is json return, interpret it as json
        if (response.headers.get('Content-Type').indexOf('application/json') > -1) {
          data = response.json();
        }
        return data;
      }
      // if an errors, anything but 200 then reject with the actuall response
      return Promise.reject(response);
    });
  },

  parseDate: (dateString, formatPattern) => {
    if (dateString) {
      try {
        const dateValue = parseISO(dateString);
        return format(dateValue, formatPattern);
      } catch (e) {
        return "";
      }
    }
    return "Present";
  }
};
export default Helpers;