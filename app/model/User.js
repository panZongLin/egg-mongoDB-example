'use static'

module.exports = (app) => {
    const {mongoose} = app;
    const {Schema} = mongoose;

    const UserSchema = new Schema({
        address: {type: String},
        avatar: {type: String},
        country: {type: String},
        email: {type: String},
        geographic: {
            province: {label: String, key: String}, 
            city: {label: String, key: String}
        },
        group: {type: String},
        name: {type: String},
        phone: {type: String},
        title: {type: String},
        userid: {type: String},
    })
    return mongoose.model('User', UserSchema)
}

// {
//     "address": "西湖区工专路 77 号",

//     "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
//     "country": "China",
//     "email": "antdesign@alipay.com",
//     "geographic": {
//         "province": {
//             "label": "浙江省",
//             "key": "330000"
//         },
//         "city": {
//             "label": "杭州市",
//             "key": "330100"
//         }
//     },
//     "group": "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED",
//     "name": "Serati Ma",
//     "phone": "0752-268888888",
//     "title": "交互专家",
//     "userid": "00000002"
// }