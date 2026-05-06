// models/Audit.js
// ==========================

const AuditSchema = new mongoose.Schema({
  userId: String,
  action: String,
  entryId: String,
  timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Audit', AuditSchema);

// ==========================