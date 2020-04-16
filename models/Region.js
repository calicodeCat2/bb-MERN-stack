const mongoose = require('mongoose');
const { Schema } = mongoose;

const regionSchema = new Schema {
    region: String

}

mongoose.model('regions', regionSchema);