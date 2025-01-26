import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  permissions: { type: [String], required: true },
  inherits: { type: [String], default: [] },
  description: { type: String },
  restrictions: {
    timeBound: {
      startTime: { type: String },
      endTime: { type: String },
    },
  },
});

// Create and export the model
module.exports = mongoose.model('Role', RoleSchema);
