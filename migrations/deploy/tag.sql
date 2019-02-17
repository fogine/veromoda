-- Deploy restfulness:tag to pg

BEGIN;

    CREATE TABLE tag (
        id SERIAL PRIMARY KEY,
        name character varying(128) NOT NULL
    );

    ALTER TABLE ONLY tag ADD CONSTRAINT tag__name__key UNIQUE (name);


COMMIT;
