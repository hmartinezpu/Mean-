import { Mongoose } from 'mongoose';

const moongose = require ('mongoose');
const authSchema = require('./auth.model');

authSchema.statics = {
    create: function (data, cb){
        const user = new this(data);
        user.save(cb)
    },
    login: function (query, cb){
        this.find(query, cb);
    }
}

const authModel = Mongoose.model('Users',authSchema);
module.exports = authModel;