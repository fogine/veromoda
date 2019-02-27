-- Deploy restfulness:payment_method to pg

BEGIN;

    CREATE TABLE payment_method (
        id SERIAL PRIMARY KEY,
        name character varying(32) NOT NULL,
        code character varying(2) NOT NULL,
        published boolean NOT NULL default TRUE
    );

    ALTER TABLE ONLY payment_method ADD CONSTRAINT payment_method__name__key UNIQUE (name);

    INSERT INTO payment_method (name, code) VALUES ('Credit card', 'C'), ('Bank transfer', 'B');

COMMIT;
