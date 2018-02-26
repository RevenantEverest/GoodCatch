const db = require(`../config/connection`);

module.exports = {
  findAll(){
    return db.any(`SELECT * FROM cohorts`);
  },

  findById(id) {
    return db.one(`SELECT cohorts.cohort_id
      AS cohort_id, cohort_name
      FROM cohorts
      WHERE cohorts.cohort_id = $1`, id);
  },

  save(cohort) {
    console.log(cohort)
    return db.one(`INSERT INTO cohorts (cohort_name)
    VALUES ($/cohort/)
    RETURNING *`, cohort);
  },

  update(cohort) {
    return db.one(`UPDATE cohorts
      SET
      cohort_name = $/cohort_name/
      `, cohort);
  },

  destroy(id) {
    return db.none(`DELETE FROM cohort WHERE cohort_id = $1`, id);
  }
};
