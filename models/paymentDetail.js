const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentDetail = new Schema(
  {
    id: String,
    date_created: Date,
    date_approved: Date,
    date_last_updated: Date,
    date_of_expiration: Date,
    money_release_date: Date,
    operation_type: String,
    issuer_id: String,
    payment_method_id: String,
    payment_type_id: String,
    status: String,
    status_detail: String,
    currency_id: String,
    description: String,
    live_mode: Boolean,
    sponsor_id: String,
    authorization_code: String,
    money_release_schema: String,
    counter_currency: String,
    collector_id: String,
    payer: {
      type: String,
      id: String,
      email: String,
      identification: {
        type: String,
        number: String,
      },
      phone: {
        area_code: String,
        number: String,
        extension: String,
      },
      first_name: String,
      last_name: String,
      entity_type: String,
    },
    metadata: Schema.Types.Mixed,
    additional_info: Schema.Types.Mixed,
    order: Schema.Types.Mixed,
    external_reference: String,
    transaction_amount: Number,
    transaction_amount_refunded: Number,
    coupon_amount: Number,
    differential_pricing_id: String,
    deduction_schema: String,
    transaction_details: {
      net_received_amount: Number,
      total_paid_amount: Number,
      overpaid_amount: Number,
      external_resource_url: String,
      installment_amount: Number,
      financial_institution: String,
      payment_method_reference_id: String,
      payable_deferral_period: String,
      acquirer_reference: String,
    },
    fee_details: Array,
    captured: Boolean,
    binary_mode: Boolean,
    call_for_authorize_id: String,
    statement_descriptor: String,
    installments: Number,
    card: Schema.Types.Mixed,
    notification_url: String,
    refunds: Array,
    processing_mode: String,
    merchant_account_id: String,
    acquirer: String,
    merchant_number: String,
    acquirer_reconciliation: Array,
  },
  { typeKey: "$type" }
);

module.exports = mongoose.model("paymentDetail", paymentDetail);
