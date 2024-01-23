const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileImagePath: {
    type: String,
    default: ""
  },
  tripList: {
    type: Array,
    default: []
    },
    wishList: {
    type: Array,
    default: []
    },
    propertyList: {
      type: Array,
      default: []
    },
    reservtionList: {
      type: Array,
      default: []
    }
},
    {timestamps:true}
);


const user = mongoose.model("User", userSchema);

module.exports = user