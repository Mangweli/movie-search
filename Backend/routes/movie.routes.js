import { Router } from "express";
import MovieController from "../controllers/movie.controller.js";

const movieRouter = Router();

const movieController = new MovieController();

movieRouter.get('/search/:movietitle', movieController.searchMovie);

export default movieRouter;