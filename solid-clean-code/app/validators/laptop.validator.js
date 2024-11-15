const Joi = require('joi')

const createLaptopValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().max(20).required().messages({
            'string.base': 'Name should be a type of string',
            'string.max': 'Name should have less than 50 characters',
        }),

        brand: Joi.string().required().max(20).messages({
            'string.base': 'Name should be a type of string',
            'string.max': 'Name should have less than 50 characters',
        }),

        cpu: Joi.string().required().max(30).messages({
            'string.base': 'Name should be a type of string',
            'string.max': 'Name should have less than 50 characters',
        }),

        price: Joi.number().required().max(100000).messages({
            'number.base': 'Age should be a type of number',
        }),
    })

    return schema.validate(data)
}

const updateLaptopValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(20).optional().messages({
            'string.base': 'Title should be a type of string',
            'string.min': 'Title should have at least 3 characters',
            'string.max': 'Title should have less than 20 characters',
        }),

        brand: Joi.string().max(20).optional().messages({
            'string.base': 'Brand should be a type of string',
            'string.max': 'Brand should have less than 20 characters',
        }),

        cpu: Joi.string().max(30).optional().messages({
            'string.base': 'CPU should be a type of string',
            'string.max': 'CPU should have less than 30 characters',
        }),

        price: Joi.number().max(10000).optional().messages({
            'number.base': 'Price should be a type of number',
            'number.max': 'Price must be less than or equal to 10000',
        }),
    })

    return schema.validate(data)
}

module.exports = { updateLaptopValidation }

const laptopIdValidation = (id) => {
    const schema = Joi.string().hex().length(24).required().message('Id is important')
    return schema.validate(id)
}

module.exports = {
    createLaptopValidation,
    updateLaptopValidation,
    laptopIdValidation,
}
