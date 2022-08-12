const mongoose      = require('mongoose')
const labelSchema   = new mongoose.Schema({
    name: {
        type: String,
        requied: true,
      },
    message: {
        type: String,
        requied: true,
    },
    issue:{
        type    : mongoose.Schema.Types.ObjectId,
        ref     : 'Issue' 
    },
},
{
    timestamps: true
})
const label = mongoose.model("label", labelSchema);
module.exports = label;
