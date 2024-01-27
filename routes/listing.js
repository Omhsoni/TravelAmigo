const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing, isReviewAuthor} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


router
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing,
wrapAsync( listingController.createListing)
)


//NEW ROUTE:
router.get("/new", isLoggedIn ,listingController.renderNewForm);

router
.route("/:id")
.get( wrapAsync(listingController.showListing ))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,  
 wrapAsync(listingController.updateListing))
 .delete( isLoggedIn,isOwner,isReviewAuthor, 
 wrapAsync(listingController.destroyListing))


//EDIT ROUTE:
router.get("/:id/edit", isLoggedIn,isOwner,  wrapAsync(listingController.renderEditForm));


module.exports = router;


// //INDEX ROUTE:
// router.get("/",  wrapAsync(listingController.index));
// //CREATE ROUTE:
// router.post("/", validateListing,  isLoggedIn, wrapAsync( listingController.createListing)
// );
// //SHOW ROUTE:
// router.get("/:id",  wrapAsync(listingController.showListing ));     
// //UPDATE ROUTE:
// router.put("/:id",
//  isLoggedIn,
//  isOwner,
//  validateListing,  
//  wrapAsync(listingController.updateListing));
// //DELETE ROUTE:
// router.delete("/:id", isLoggedIn,isOwner,isReviewAuthor, 
//  wrapAsync(listingController.destroyListing));

