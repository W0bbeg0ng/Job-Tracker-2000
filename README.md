# Job-Tracker-2000
Improving job application tracking.


Database table creation:

user:
CREATE TABLE users(
  _id bigint primary key,
  name varchar UNIQUE NOT NULL,
  password varchar NOT NULL,
  date_created date
);


jobListings:
CREATE TYPE status AS ENUM ('started application', 'applied', 'interview scheduled', 'declined');

CREATE TABLE jobListings(
    _id bigint primary key,
    jobTitle varchar NOT NULL,
    url varchar NOT NULL,
    status status,
    starred boolean,
    note varchar,
    dateCreated date,
    company_id bigint references company(_id),
    user_id bigint references users(_id)
);


company:
CREATE TABLE company (
  _id bigint primary key,
  name varchar NOT NULL,
  url varchar NOT NULL,
  linkedin_url varchar,
  date_created date,
  date_last_checked date,
  starred boolean,
  user_id bigint references users(_id)
);


