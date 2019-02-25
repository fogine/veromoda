-- Deploy restfulness:image_type to pg

BEGIN;

    CREATE TABLE image_type (
        id SERIAL PRIMARY KEY,
        name character varying(32) NOT NULL
    );

    ALTER TABLE ONLY image_type ADD CONSTRAINT image_type__name__key UNIQUE (name);

COMMIT;
