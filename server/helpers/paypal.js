const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfUIYm8d9ptL_YGf0EvdcUNgYhLdCbxQFiN6oceS4t2PX00zJAOEPZrzdHWGL42_kBCzUpcKbe3hL40X",
  client_secret: "EHp_7ZhPIWZ_DLBSDjNdDZhjFLWs_CLhGIXuxuJeMnV9D8iLtVicC3MC4mtiP2Ah_wuN8zRvPULSljj0",
});

module.exports = paypal;
