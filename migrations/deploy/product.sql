-- Deploy restfulness:product to pg

BEGIN;

    CREATE TABLE product (
        id SERIAL PRIMARY KEY,
        name character varying(128) NOT NULL,
        description character varying(1024),
        care character varying(1024),
        created_at timestamp with time zone NOT NULL default current_timestamp,
        updated_at timestamp with time zone NOT NULL default current_timestamp,
        deleted_at timestamp with time zone
    );

    ALTER TABLE ONLY product ADD CONSTRAINT product__name__key UNIQUE (name);

COMMIT;
