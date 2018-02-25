const db = require(`../config/connection`);

module.exports = {
  findAll(){
    return db.any(`SELECT * FROM cohorts`);
  },

  findById(id) {
    return db.one(`SELECT cohorts.cohorts_id
      AS cohort_id, cohort_name
      FROM cohorts
      WHERE cohorts.cohort_id = $1`, id);
  },

  save(cohort) {
    return db.one(`INSERT INTO cohorts (cohort_name)
    VALUES ($/cohort_name/
    RETURNING *)`, cohort);
  },

  update(cohort) {
    return db.one(`UPDATE cohorts
      SET
      cohort_name = $1
      `, cohort);
  },

  destroy(id) {
    return db.none(`DELETE FROM cohort WHERE cohort_id = $1`, id);
  }
};
