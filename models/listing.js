const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

const listeningSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    img: {
        type: String,
        default:"https://in.images.search.yahoo.com/images/view;_ylt=AwrPrXcfb4RlXvQbQFq9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzNhMDlmNzg3Y2U0MWJkOGQ0Nzc5ZTQ5NDRkY2Q1MWZkBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dtop%2Bhotel%2Bflat%2B4d%2Bimg%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D12&w=1600&h=1060&imgurl=www.sparksflyhospitality.com%2Fwp-content%2Fuploads%2F2018%2F01%2F16.jpg&rurl=https%3A%2F%2Fwww.sparksflyhospitality.com%2Fproject%2Fboutique-hotel-52-delhi%2F&size=288.4KB&p=top+hotel+flat+4d+img&oid=3a09f787ce41bd8d4779e4944dcd51fd&fr2=piv-web&fr=mcafee&tt=Boutique+Hotel+52+Delhi+-+Sparks+Fly+Hospitality&b=0&ni=21&no=12&ts=&tab=organic&sigr=pj9j2v7PaWBI&sigb=o5IrGHco.I.w&sigi=sthLGs.rn6y.&sigt=FEXXqNQ_EmYT&.crumb=qmVOfuvyr0H&fr=mcafee&fr2=piv-web&type=E211IN826G0",
        set: (v) => v===""? "https://in.images.search.yahoo.com/images/view;_ylt=AwrPrXcfb4RlXvQbQFq9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzNhMDlmNzg3Y2U0MWJkOGQ0Nzc5ZTQ5NDRkY2Q1MWZkBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dtop%2Bhotel%2Bflat%2B4d%2Bimg%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D12&w=1600&h=1060&imgurl=www.sparksflyhospitality.com%2Fwp-content%2Fuploads%2F2018%2F01%2F16.jpg&rurl=https%3A%2F%2Fwww.sparksflyhospitality.com%2Fproject%2Fboutique-hotel-52-delhi%2F&size=288.4KB&p=top+hotel+flat+4d+img&oid=3a09f787ce41bd8d4779e4944dcd51fd&fr2=piv-web&fr=mcafee&tt=Boutique+Hotel+52+Delhi+-+Sparks+Fly+Hospitality&b=0&ni=21&no=12&ts=&tab=organic&sigr=pj9j2v7PaWBI&sigb=o5IrGHco.I.w&sigi=sthLGs.rn6y.&sigt=FEXXqNQ_EmYT&.crumb=qmVOfuvyr0H&fr=mcafee&fr2=piv-web&type=E211IN826G0" 
        : v
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    country: {
        type: String
    }
});

const Listing = mongoose.model("Listing", listeningSchema);
module.exports = Listing;