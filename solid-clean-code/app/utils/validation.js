const validateRequest = (data, validator) => {
    const { error } = validator(data)
    if (error) {
        return error.details[0].message
    }
    return null
}

module.exports = { validateRequest }
