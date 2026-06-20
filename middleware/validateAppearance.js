console.log("validateAppearance.js loaded");

const validateAppearance = (req, res, next) => {

    console.log("Validation middleware running");
    console.log(req.body);

    const { name, gender, hairStyle, hairColor, outfit } = req.body;

    if (!name || !gender || !hairStyle || !hairColor || !outfit) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    next();
};

module.exports = validateAppearance;