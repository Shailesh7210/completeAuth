import mongoose from "mongoose";

const userSchema = new mpngoose.Schema({
    name: {type: String, Required: true},
    email: {type: String, Required: true, unique: true},
    password: {type: String, Required: true},
    verifyOtp: {type: String, default: ''},
    verifyOtpExpiredAt: {type: Number, default: 0},
    isAccountVerified: {type: Boolean, dafault: false},
    resetOtp: {typr: String, dafault: ''},
    resetOtpExpireAt: {type: Number, dafault: 0}

})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel;