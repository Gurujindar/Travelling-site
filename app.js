const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const  methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listeningSchema} = require("./schema.js");


main().then(()=>{
    console.log("connnected to DB");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.engine('ejs', ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.send("Hi, I am root");
})
//Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});
// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
})
//Create Route
app.post("/listings", wrapAsync(async(req, res, next ) => {
    // let [title, description, img, price, location, country]=req.body;
        // if(!req.body.listing){
        //     throw new ExpressError(400, "Send valid data for listing");
        // }
        let result = listeningSchema.validate(req.body);
        console.log(result);
        if(result.error){
            throw new ExpressError(400, result.error``);
        }
        let listing = req.body.listing;
        let newListing = new Listing(listing);
        // if(!newListing.title){
        //     throw new ExpressError(400, "Title is Missing");
        // }
        // if(!newListing.description){
        //     throw new ExpressError(400, "Description is Missing");
        // }
        // if(!newListing.location){
        //     throw new ExpressError(400, "Location is Missing");
        // } 
        await newListing.save(); 
        res.redirect("/listings");
}))
//Show Route
app.get("/listings/:id" ,wrapAsync(async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
}))
//Edit Route
app.get("/listings/:id/edit" , wrapAsync(async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}))
//Update Route
app.put("/listings/:id", wrapAsync(async(req, res) => {
    let {id} = req.params;
   await Listing.findByIdAndUpdate(id, {...req.body.listing});
   res.redirect("/listings");
}))
//Update Route
app.delete("/listings/:id", wrapAsync(async(req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}))

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not Found!"));
})

// Custom Error Handeling
app.use((err, req, res, next) => {
    let {status = 500, message = "Something went wrong!" } = err;
    res.status(status).render("error.ejs", {err});
    // res.status(status).send(message);
})

app.listen(3000, ()=>{
    console.log(`app is listening on port 3000`);
})