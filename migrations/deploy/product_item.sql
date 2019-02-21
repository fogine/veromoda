-- Deploy restfulness:product_item to pg

BEGIN;

    CREATE TABLE product_item (
        id SERIAL PRIMARY KEY,
        price decimal(7,2) NOT NULL,
        quantity integer default 0, -- how many items of particular color & size are available
        discount_id integer,
        product_id integer NOT NULL,
        size character varying(8) NOT NULL,
        color character varying(8) NOT NULL,
        created_at timestamp with time zone NOT NULL default current_timestamp,
        updated_at timestamp with time zone NOT NULL default current_timestamp
    );

    ALTER TABLE ONLY product_item ADD CONSTRAINT product_item__product_id__size__color__key UNIQUE (product_id, size, color);

    ALTER TABLE ONLY product_item ADD CONSTRAINT product_item__product_id__fkey
    FOREIGN KEY (product_id) REFERENCES product(id) ON UPDATE CASCADE ON DELETE CASCADE;

    ALTER TABLE ONLY product_item ADD CONSTRAINT product_item__discount_id__fkey
    FOREIGN KEY (discount_id) REFERENCES discount(id) ON UPDATE CASCADE ON DELETE SET NULL;

COMMIT;
