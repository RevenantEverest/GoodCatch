const db = require(`../config/connection`);

module.exports = {
  findAll(){
    return db.any(`SELECT * FROM students ORDER BY name`);
  },

  findById(id) {
    return db.one(`SELECT students.id AS id, name, cohort_name, catches
      FROM students
      JOIN cohorts
      ON students.cohort_id = cohorts.cohort_id
      WHERE students.id = $1`, id);
  },

  save(student) {
    return db.one(`INSERT INTO students (name, cohort_id, catches)
    VALUES ($/student/, $/cohort_id/, $/catches/)
    RETURNING *`, student);
  },

  update(student) {
    return db.one(`UPDATE students
      SET
      name = $/name/,
      cohort_id = $/cohort_id/
      WHERE id = $/id/
      RETURNING *`, student);
  },

  destroy(id) {
    return db.none(`DELETE FROM students WHERE id = $1`, id);
  },

  incrementCatch(id) {
    return db.one(`UPDATE students SET catches = catches + 1 WHERE id = $/id/
      RETURNING *`, id);
  },
};
