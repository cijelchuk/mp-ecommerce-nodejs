const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchantOrder = new Schema(
  {
    id: Number,
    status: String,
    external_reference: String,
    preference_id: String,
    payments: [
      {
        id: Number,
        transaction_amount: Number,
        total_paid_amount: Number,
        shipping_cost: Number,
        currency_id: String,
        status: String,
        status_detail: String,
        operation_type: String,
        date_approved: Date,
        date_created: Date,
        last_modified: Date,
        amount_refunded: Number,
      },
    ],
    shipments: [
      {
        id: Number,
        shipment_type: String,
        shipping_mode: String,
        picking_type: String,
        status: String,
        substatus: String,
        items: [
          {
            id: String,
            description: String,
            quantity: Number,
            dimensions: String,
            dimensions_source: String,
          },
        ],
        date_created: Date,
        last_modified: Date,
        date_first_printed: Date,
        service_id: Number,
        sender_id: Number,
        receiver_id: Number,
        receiver_address: {
          id: Number,
          address_line: String,
          city: {
            id: String,
            name: String,
          },
          state: {
            id: String,
            name: String,
          },
          country: {
            id: String,
            name: String,
          },
          latitude: String,
          longitude: String,
          comment: String,
          contact: String,
          phone: String,
          zip_code: String,
          street_name: String,
          street_number: String,
          floor: String,
          apartment: String,
        },
        shipping_option: {
          id: Number,
          cost: Number,
          currency_id: String,
          shipping_method_id: Number,
          estimated_delivery: {
            date: Date,
            time_from: String,
            time_to: String,
          },
          name: String,
          list_cost: Number,
          speed: {
            handling: Number,
            shipping: Number,
          },
        },
      },
    ],
    collector: {
      id: Number,
      nickname: String,
    },
    marketplace: String,
    notification_url: String,
    date_created: Date,
    last_updated: Date,
    sponsor_id: String,
    shipping_cost: Number,
    total_amount: Number,
    site_id: String,
    paid_amount: Number,
    refunded_amount: Number,
    payer: {
      id: Number,
      email: String,
    },
    items: [
      {
        id: String,
        category_id: String,
        currency_id: String,
        description: String,
        picture_url: String,
        title: String,
        quantity: Number,
        unit_price: Number,
      },
    ],
    cancelled: Boolean,
    additional_info: String,
    application_id: Number,
    order_status: String,
  },
  { typeKey: "$type" }
);

module.exports = mongoose.model("merchantOrder", merchantOrder);
