\c ga_db;

DROP TABLE IF EXISTS cohorts;
DROP TABLE IF EXISTS instructors;
DROP TABLE IF EXISTS students;

CREATE TABLE cohorts (
  cohort_id SERIAL PRIMARY KEY,
  cohort_name VARCHAR(255),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE instructors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  cohort_id INTEGER REFERENCES cohorts,
  catches INTEGER,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  cohort_id INTEGER REFERENCES cohorts,
  catches INTEGER,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);
