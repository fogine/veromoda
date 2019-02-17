-- Deploy restfulness:product to pg

BEGIN;

    CREATE TABLE product (
        id SERIAL PRIMARY KEY,
        name character varying(128) NOT NULL,
        price decimal(7,2) not null,
        discount_id integer,
        quantity integer default 0, -- how many goods are available
        description character varying(1024),
        care character varying(512),
        -- material character varying(256),
        created_at timestamp with time zone NOT NULL default current_timestamp,
        updated_at timestamp with time zone NOT NULL default current_timestamp,
        deleted_at timestamp with time zone
    );

    ALTER TABLE ONLY product ADD CONSTRAINT product__name__key UNIQUE (name);

    ALTER TABLE ONLY discount ADD CONSTRAINT product__discount_id__fkey
    FOREIGN KEY (discount_id) REFERENCES discount(id) ON UPDATE CASCADE ON DELETE SET NULL;

COMMIT;
