module.exports = {
  homeController(req, res, next) {
    res.render("home");
  },
  getDetailController(req, res, next) {
    data = req.body;

    res.render("detail", data);
  },
  postDetailController(req, res, next) {
    data = req.body;

    res.render("detail", data);
  },
  async failureController(req, res, next) {
    parms = JSON.stringify(req.query);
    data = JSON.stringify(req.body);
    res.render("failure", { parms, data });
  },
  async successController(req, res, next) {
    parms = JSON.stringify(req.query);
    data = JSON.stringify(req.body);
    res.render("success", { parms, data });
  },
  async pendingController(req, res, next) {
    parms = JSON.stringify(req.query);
    data = JSON.stringify(req.body);
    res.render("pending", { parms, data });
  },
  async getNotificationController(req, res, next) {
    parms = JSON.stringify(req.query);
    data = JSON.stringify(req.body);
    console.log(parms);
    console.log(data);
    res.render("home");
  },
  async postNotificationController(req, res, next) {
    parms = JSON.stringify(req.query);
    data = JSON.stringify(req.body);
    console.log(parms);
    console.log(data);
    res.render("home");
  },
  async payController(req, res, next) {
    const Baseurl = req.protocol + "://" + req.get("host");
    data = req.body;
    //console.log(req.query);
    //console.log(data);
    var mercadopago = require("mercadopago");
    mercadopago.configure({
      access_token: "APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398",
      integrator_id: "dev_24c65fb163bf11ea96500242ac130004",
    });

    let preference = {
      collector_id: 469485398,
      payer: {
        name: "Lalo",
        surname: "Landa",
        email: "test_user_63274575@testuser.com",
        phone: {
          area_code: "11",
          number: 22223333,
        },

        address: {
          street_name: "False",
          street_number: 123,
          zip_code: "1111",
        },
      },
      items: [
        {
          id: 1234,
          title: data.title,
          description: "Dispositivo móvil de Tienda e-commerce",
          picture_url: data.img,
          quantity: 1,
          currency_id: "ARS",
          unit_price: parseFloat(data.price),
        },
      ],
      back_urls: {
        success: `${Baseurl}/success`, //"https://www.tu-sitio/success",
        failure: `${Baseurl}/failure`, //"http://www.tu-sitio/failure",
        pending: `${Baseurl}/pending`, //"http://www.tu-sitio/pending",
      },
      payment_methods: {
        excluded_payment_methods: [
          {
            id: "master",
          },
        ],
        excluded_payment_types: [
          {
            id: "atm",
          },
        ],
        installments: 6,
      },
      notification_url: `${Baseurl}/notification`, //"https://www.your-site.com/ipn",
      auto_return: "approved",
      external_reference: "carlos.ijelchuk@gmail.com",
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // Este valor reemplazará el string "<%= global.id %>" en tu HTML
        global.id = response.body.id;
        //console.log(response.body);
        res.redirect(response.body.init_point);
      })
      .catch(function (error) {
        console.log(error);
      });
    //console.log(preference);
  },
};
