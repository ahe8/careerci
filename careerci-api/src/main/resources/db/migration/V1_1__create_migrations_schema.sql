CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users
(
    id           UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    firebase_uid TEXT NOT NULL UNIQUE
);

CREATE TABLE jobs
(
    id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    date_applied DATE                                 NOT NULL,
    company      TEXT                                 NOT NULL,
    position     TEXT                                 NOT NULL,
    status       TEXT                                 NOT NULL,
    user_firebase_uid      TEXT REFERENCES users (firebase_uid) NOT NULL
);

CREATE TABLE certifications
(
    id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    organization TEXT,
    name         TEXT                                 NOT NULL,
    url          TEXT,
    issue_date  DATE                                 NOT NULL,
    expiry_date DATE,
    user_firebase_uid      TEXT REFERENCES users (firebase_uid) NOT NULL
);