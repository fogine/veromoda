-- Deploy restfulness:order_status to pg

BEGIN;

    CREATE TABLE order_status (
        id SERIAL PRIMARY KEY,
        name character varying(32) NOT NULL
    );

    ALTER TABLE ONLY order_status ADD CONSTRAINT order_status__name__key UNIQUE (name);

    INSERT INTO order_status (name) VALUES ('Confirmed'), ('Fraud'), ('Pending'), ('Shipped');

COMMIT;
