-- Deploy restfulness:image to pg

BEGIN;

    CREATE TABLE image (
        id SERIAL PRIMARY KEY,
        name character varying(64) NOT NULL,
        media_type  character varying(32) NOT NULL,
        md5  character varying(32) NOT NULL,
        size  integer NOT NULL,
        description character varying(128),
        data bytea NOT NULL,
        created_at timestamp with time zone NOT NULL default current_timestamp,
        updated_at timestamp with time zone NOT NULL default current_timestamp
    );

    ALTER TABLE ONLY image ADD CONSTRAINT image__name__key UNIQUE (name);
COMMIT;
