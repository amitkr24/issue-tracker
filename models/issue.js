const mongoose      = require('mongoose')
const issueSchema   = new mongoose.Schema({
    name: {
        type: String,
        requied: true,
      },
    author: {
        type: String,
        requied: true,
    },
    label: [{
        type: String,
        requied: true,
      }],
    description: {
        type: String,
    },
    projects: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }
},
{
    timestamps: true
})
const Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;
