const db = require(`../config/connection`);

module.exports = {
  findAll(){
    return db.any(`SELECT * FROM instructors ORDER BY name`);
  },

  findById(id) {
    return db.one(`SELECT instructors.id AS id, name, cohort_name, catches
      FROM instructors
      JOIN cohorts
      ON instructors.cohort_id = cohorts.cohort_id
      WHERE instructors.id = $1`, id);
  },

  save(instructor) {
    return db.one(`INSERT INTO instructors (name, cohort_id)
    VALUES ($/instructor/, $/cohort_id/)
    RETURNING *`, instructor);
  },

  update(instructor) {
    return db.one(`UPDATE instructors
      SET
      name = $/name/ ,
      cohort_id = $/cohort_id/
      WHERE id = $/id/
      RETURNING *`, instructor);
  },

  destroy(id) {
    return db.none(`DELETE FROM instructors WHERE id = $1`, id);
  }
};
