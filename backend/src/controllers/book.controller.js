import {database} from "../models/database.js";

export const getAll = async (req, res) => {
    try {
        const books = await database.book.findAll();
        res.json(books);
    } catch (err) {
        res.json({message: err.message});
    }
};

export const getById = async (req, res) => {
    try {
        const book = await database.book.findOne({
            where: {id: req.params.id}
        });
        res.json(book);
    } catch (err) {
        res.json({message: err.message});
    }
};

export const create = async (req, res) => {
    try {
        await database.book.create(req.body);
        res.json({message: "Created successfully"});
    } catch (err) {
        res.json({message: err.message});
    }
};

export const update = async (req, res) => {
    try {
        await database.book.update(req.body, {
            where: {id: req.params.id}
        });
        res.json({message: "Updated successfully"});
    } catch (err) {
        res.json({message: err.message});
    }
};

export const remove = async (req, res) => {
    try {
        await database.book.destroy({
            where: {id: req.params.id}
        });
        res.json({message: "Deleted successfully"});
    } catch (err) {
        res.json({message: err.message});
    }
};