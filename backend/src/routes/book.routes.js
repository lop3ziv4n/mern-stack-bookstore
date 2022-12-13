import express from "express";
import {create, getAll, getById, remove, update} from "../controllers/book.controller.js";

export const bookRoutes = (app) => {

    const router = express.Router();

    /**
     * @openapi
     * /api/books:
     *   get:
     *     description: All books
     *     responses:
     *       200:
     *         description: Returns all the books
     */
    router.get("/", getAll);

    /**
     * @openapi
     * /api/books/{id}:
     *   get:
     *     parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        type: string
     *        description: The book Id.
     *     description: Get a book by id
     *     responses:
     *       200:
     *         description: Returns the requested books
     */
    router.get("/:id", getById);

    /**
     * @openapi
     * /api/books:
     *   post:
     *     parameters:
     *      - in: body
     *        name: book
     *        description: New book
     *        schema:
     *          type: object
     *          properties:
     *            title:
     *              type: string
     *            description:
     *              type: string
     *            author:
     *              type: string
     *            ratings:
     *              type: integer
     *            reviews:
     *              type: integer
     *            price:
     *              type: number
     *            front_page:
     *              type: string
     *              format: byte
     *          required:
     *           - title
     *           - author
     *     responses:
     *       201:
     *         description: Created
     */
    router.post("/", create);

    /**
     * @openapi
     * /api/books/{id}:
     *   put:
     *     parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        type: string
     *        description: The book ID.
     *      - in: body
     *        name: book
     *        description: Update book
     *        schema:
     *          type: object
     *          properties:
     *            title:
     *              type: string
     *            description:
     *              type: string
     *            author:
     *              type: string
     *            ratings:
     *              type: integer
     *            reviews:
     *              type: integer
     *            price:
     *              type: number
     *            front_page:
     *              type: string
     *              format: byte
     *          required:
     *           - title
     *           - author
     *     responses:
     *       201:
     *         description: Created
     */
    router.put("/:id", update);

    /**
     * @openapi
     * /api/books/{id}:
     *   delete:
     *     parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        type: string
     *        description: The book ID.
     *     description: Delete a book by id
     *     responses:
     *       200:
     *         description: Returns the requested book
     */
    router.delete("/:id", remove);

    app.use('/api/books', router);
};