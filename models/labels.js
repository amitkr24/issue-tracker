const mongoose      = require('mongoose')
const labelSchema   = new mongoose.Schema({
    name: {
        type: String,
        requied: true,
      },
    projects: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    issues: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue'
    }
},
{
    timestamps: true
})
const label = mongoose.model("label", labelSchema);
module.exports = label;
