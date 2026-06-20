const db = require("../config/db");


// GET all appearances
exports.getAppearances = (req, res) => {

    db.query("SELECT * FROM appearances", (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch appearances"
            });
        }

        res.status(200).json({
            success: true,
            data: results
        });
    });
};


// CREATE appearance
exports.createAppearance = (req, res) => {

    const { name, gender, hairStyle, hairColor, outfit } = req.body;

    const sql = `
        INSERT INTO appearances
        (name, gender, hairStyle, hairColor, outfit)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, gender, hairStyle, hairColor, outfit],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to create appearance"
                });
            }

          res.status(201).json({
    success: true,
    message: "NEW CODE WORKING 123"
});
        }
    );
};


// UPDATE appearance
exports.updateAppearance = (req, res) => {

    const id = req.params.id;
    const { name, gender, hairStyle, hairColor, outfit } = req.body;

    const sql = `
        UPDATE appearances
        SET name=?, gender=?, hairStyle=?, hairColor=?, outfit=?
        WHERE id=?
    `;

    db.query(
        sql,
        [name, gender, hairStyle, hairColor, outfit, id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to update appearance"
                });
            }

            res.status(200).json({
                success: true,
                message: "Appearance updated successfully"
            });
        }
    );
};


// DELETE appearance
exports.deleteAppearance = (req, res) => {

    const id = req.params.id;

    db.query(
        "DELETE FROM appearances WHERE id=?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Failed to delete appearance"
                });
            }

            res.status(200).json({
                success: true,
                message: "Appearance deleted successfully"
            });
        }
    );
};