import { Router } from "express";
import { isAuthenticated } from "../../middlewares/Authenticated";
import { noteController } from "./NoteModule";

class NoteRouter {
  public readonly router = Router();
  private readonly noteController = noteController;

  constructor() {
    this.routes();
  }

  private routes(): void {
    this.router.post("/", isAuthenticated, this.noteController.create);
    this.router.get("/", isAuthenticated, this.noteController.index);
    this.router.get("/search", isAuthenticated, this.noteController.search);
    this.router.get(
      "/searchBodies",
      isAuthenticated,
      this.noteController.searchBodies,
    );
    this.router.get("/:id", isAuthenticated, this.noteController.show);
    this.router.patch("/:id", isAuthenticated, this.noteController.update);
    this.router.delete("/:id", isAuthenticated, this.noteController.delete);
  }
}

export const noteRouter = new NoteRouter().router;