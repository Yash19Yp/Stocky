import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9xeUtnVlNTVlZqU3lCMjNzS1BKcTRuajVnZ0pQRGJoSkg3IiwiZXhwIjoxNjkwMzAxNjU5LCJpYXQiOjE2NTg3NjU2NTksImp0aSI6ImFwa19iNDRhMTliMGRhNDc0ZGY2OGNkYWE0NzMyODAzM2ZiZSIsIm1vZGUiOiJtYXJrZXRfZGF0YSJ9.zUuf2_KmvVjEQtgB7eRbn2tkNwZk_XredTgCIpWbP-U",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const get = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://data.lemon.markets/v1/instruments/`,
    method: "get",
    params: { ...params },
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9xeUtnVlNTVlZqU3lCMjNzS1BKcTRuajVnZ0pQRGJoSkg3IiwiZXhwIjoxNjkwMzAxNjU5LCJpYXQiOjE2NTg3NjU2NTksImp0aSI6ImFwa19iNDRhMTliMGRhNDc0ZGY2OGNkYWE0NzMyODAzM2ZiZSIsIm1vZGUiOiJtYXJrZXRfZGF0YSJ9.zUuf2_KmvVjEQtgB7eRbn2tkNwZk_XredTgCIpWbP-U",
      ...headers,
    },
    data,
  });
};

export const getTrade = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://data.lemon.markets/v1/trades/`,
    method: "get",
    params: { isin: "AN8068571086", ...params },
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9xeUtnVlNTVlZqU3lCMjNzS1BKcTRuajVnZ0pQRGJoSkg3IiwiZXhwIjoxNjkwMzAxNjU5LCJpYXQiOjE2NTg3NjU2NTksImp0aSI6ImFwa19iNDRhMTliMGRhNDc0ZGY2OGNkYWE0NzMyODAzM2ZiZSIsIm1vZGUiOiJtYXJrZXRfZGF0YSJ9.zUuf2_KmvVjEQtgB7eRbn2tkNwZk_XredTgCIpWbP-U",
      ...headers,
    },
    data,
  });
};

export const postMessages = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://api.twilio.com/2010-04-01/Accounts/AC729e4c052d96a70db1731f278f3ee9b2/Messages`,
    method: "post",
    params,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic QUM3MjllNGMwNTJkOTZhNzBkYjE3MzFmMjc4ZjNlZTliMjoxY2NiZWE5MDA3ZWI0MTVlNWZlMjk3ZWZmZDdkZTI5YQ==",
      ...headers,
    },
    data,
  });
};
export const post = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://paper-trading.lemon.markets/v1/orders/`,
    method: "post",
    params,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9xeUtnVlNTVlZqU3lCMjNzS1BKcTRuajVnZ0pQRGJoSkg3IiwiZXhwIjoxNjkwMzAxNjU4LCJpYXQiOjE2NTg3NjU2NTgsImp0aSI6ImFwa185YmZkOThmY2MxNzI0M2JiYTE0NzhkODRmZjc3YjU5NyIsIm1vZGUiOiJwYXBlciJ9.SMGA0DqMqolnRGpaRxyKbHvtccjuVyRDlm_BTyclBc8",
      ...headers,
    },
    data: {
      isin: "AT000000STR1",
      expires_at: "2022-08-25",
      side: "buy",
      quantity: 10,
      venue: "XMUN",
      ...data,
    },
  });
};
export const getOrders = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://paper-trading.lemon.markets/v1/orders`,
    method: "get",
    params,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9xeUtnVlNTVlZqU3lCMjNzS1BKcTRuajVnZ0pQRGJoSkg3IiwiZXhwIjoxNjkwMzAxNjU4LCJpYXQiOjE2NTg3NjU2NTgsImp0aSI6ImFwa185YmZkOThmY2MxNzI0M2JiYTE0NzhkODRmZjc3YjU5NyIsIm1vZGUiOiJwYXBlciJ9.SMGA0DqMqolnRGpaRxyKbHvtccjuVyRDlm_BTyclBc8",
      ...headers,
    },
    data,
  });
};
export const get1 = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://paper-trading.lemon.markets/v1/account/`,
    method: "get",
    params,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJsZW1vbi5tYXJrZXRzIiwiaXNzIjoibGVtb24ubWFya2V0cyIsInN1YiI6InVzcl9xeUtnVlNTVlZqU3lCMjNzS1BKcTRuajVnZ0pQRGJoSkg3IiwiZXhwIjoxNjYzOTQ5NzY4LCJpYXQiOjE2NTg3NjU3NjgsImp0aSI6ImFwa19iMzllMTNmNTAyMTk0Zjg1OTlkNzFlOWEyMzEwYjM3NSIsIm1vZGUiOiJwYXBlciJ9.uDxwVJrp1HPC31XQE_ASkMCDKAZOyrwzrOQe5ECBsDw",
      ...headers,
    },
    data,
  });
};
