import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    paymentMethod: { type: String, enum: ['credit_card', 'paypal', 'cod'], required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    transactionId: { type: String },
    amount: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Payment', paymentSchema);
