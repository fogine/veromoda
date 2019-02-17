-- Deploy restfulness:value_type to pg

BEGIN;

-- determines whether a numeric value is percentage of original prce or absolute price
CREATE TABLE value_type (
    id SERIAL PRIMARY KEY,
    name character varying(32) NOT NULL
);

ALTER TABLE ONLY value_type ADD CONSTRAINT value_type__name__key UNIQUE (name);

COMMIT;
