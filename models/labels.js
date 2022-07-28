const mongoose      = require('mongoose')
const issueSchema   = new mongoose.Schema({
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
const Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;
