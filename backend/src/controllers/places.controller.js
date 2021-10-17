const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.placeId;
  const place = DUMMY_PLACES.find((place) => place.id === placeId);
  if (!place) {
    const error = new HttpError("Could not find a place for the provided id");
    return next(error);
  }
  res.send({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.userId;
  const place = DUMMY_PLACES.find((place) => place.creator === userId);
  if (!place) {
    const error = new HttpError(
      "Could not find a place for the provided user id"
    );
    return next(error);
  }
  res.send({ place });
};

module.exports = { getPlaceById, getPlaceByUserId };