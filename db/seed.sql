\c ga_db;

INSERT INTO cohorts (cohort_name) VALUES
  ('GOAT'),
  ('Ewok'),
  ('Narwhal');

INSERT INTO students (name, cohort_id) VALUES
  ('Stefan', 1),
  ('Mo', 1),
  ('Jackson', 3);

  INSERT INTO instructors (name, cohort_id) VALUES
    ('John Bell', 1),
    ('John Master', 2);
