const db = require(`../config/connection`);

module.exports = {
  findAll(){
    return db.any(`SELECT * FROM students`);
  },

  findById(id) {
    return db.one(`SELECT students.id AS id, name, cohort_id, catches
      FROM students
      JOIN cohorts
      ON students.cohort_id = cohorts.cohorts_id
      WHERE students.cohort_id = $1`, id);
  },

  save(student) {
    return db.one(`INSERT students (name, cohort_id)
    VALUES ($/name/, $/cohort_id/)
    RETURNING *`, student);
  },

  update(student) {
    return db.one(`UPDATE students
      SET
      name = $1
      cohort_name = $2
      WHERE id = $/id/`, student);
  },

  destroy(id) {
    return db.none(`DELETE FROM students WHERE id = $1`, id);
  }
};
