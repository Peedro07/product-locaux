module.exports = mongoose => {
    var schema = mongoose.Schema({
        username: String,
        email: String,
        password: String,
    },{
        timestamp: true,
    });
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    return user = mongoose.model('User', schema)
}
