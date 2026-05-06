// models/Entry.js
// ==========================

const EntrySchema = new mongoose.Schema({
  date: String,
  rotation: String,
  category: String,
  procedure: String,
  patientId: String,
  supervisor: String,
  status: { type: String, default: 'Pending' },
  studentId: String,
  approvedAt: Date
});
module.exports = mongoose.model('Entry', EntrySchema);

// ==========================