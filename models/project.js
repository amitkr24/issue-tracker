const mongoose      = require('mongoose')
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        requied: true,
      },
    author: {
        type: String,
        requied: true,
    },
    description: {
        type: String,
    }
},
{
    timestamps: true
})
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
