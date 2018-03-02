\c ga_db;

INSERT INTO cohorts (cohort_name) VALUES
  ('GOAT'),
  ('Ewok'),
  ('Narwhal');

INSERT INTO students (name, cohort_id, catches) VALUES
  ('Stefan', 1, 0),
  ('Mo', 1, 0),
  ('Jackson', 3, 0);

  INSERT INTO instructors (name, cohort_id, catches) VALUES
    ('John Bell', 1, 0),
    ('John Master', 2, 0);
