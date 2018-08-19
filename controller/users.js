const db = require('../models')

module.exports = {
    create: async (req, res, next) => {
        console.log(req.body);
        try {
            const result = await db.Item.create({
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email
            })

            res.json(result);
        } catch (e) {
            console.log(e)
        }

    },
    all: async (req, res, next) => {
        console.log('sign In');
        res.json({status: 200})
    },
    secret: async (req, res, next) => {
        console.log('secret');
        res.json({status: 200})
    }

}