import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  { _id: false },
);

const userSchema = new mongoose.Schema(
  {
    firstName: { tpe: String, required: true },
    lastName: { tpe: String, required: true },
    username: { type: String, unique: true, required: true, trim: true, lowercase: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    phoneNumber: { type: String, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    roles: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: ture },
    status: { type: String, enum: STATUS, default: 'active' },
    profilePicture: { type: String },
    billingAddress: addressSchema,
    shippingAddress: addressSchema,
    preferences: {
      theme: { type: String, enum: ['light', 'dark'], default: 'dark' },
    },
    emailVerifiedAt: { type: Date },
    lastLoginAt: { type: Date },
    failedAttempts: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

// Password hashing before saving

// Export the User model
const User = mongoose.model('User', userSchema);
export default User;
