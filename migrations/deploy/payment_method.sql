-- Deploy restfulness:payment_method to pg

BEGIN;

CREATE TABLE payment_method (
    id SERIAL PRIMARY KEY,
    name character varying(32) NOT NULL
);

ALTER TABLE ONLY payment_method ADD CONSTRAINT payment_method__name__key UNIQUE (name);

COMMIT;
