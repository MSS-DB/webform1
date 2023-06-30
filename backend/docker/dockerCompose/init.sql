CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL
);

INSERT INTO users (username, password) VALUES
  ('admin', 'Maybank'),
  ('test', 'password1'),
  ('user', 'password');
