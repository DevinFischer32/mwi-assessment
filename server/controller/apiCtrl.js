module.exports = {
  formSubmit: async (req, res) => {
    const db = req.app.get("db");
    const { firstName, lastName, title, email, message } = req.body;

    await db.new_message([firstName, lastName, title, email, message]);
    res.status(200).send("Success");
  },

  homeContent: async (req, res) => {
    const db = req.app.get("db");
    const [...results] = await db.home_content.find();
    res.status(200).send(results);
  },

  contactContent: async (req, res) => {
    const db = req.app.get("db");
    const [...results] = await db.contact_content.find();
    res.status(200).send(results);
  },
};
