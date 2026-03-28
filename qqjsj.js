var ddm = JSON.parse($response.body);

ddm.data = {
  ...ddm.data,
  "subscribe_expires_date": "2099-09-09 09:09:09",
  "vip_type": 2,
  "purchase_date": 1738139336,
  "is_vip": 1
};

$done({ body: JSON.stringify(ddm) });
