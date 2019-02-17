-- Deploy restfulness:product_color to pg

BEGIN;

    CREATE TABLE product_color (
        id SERIAL PRIMARY KEY,
        color character varying(8) NOT NULL,
        product_id integer
    );

    ALTER TABLE ONLY product_color ADD CONSTRAINT product__color__product_id__key UNIQUE (color,product_id);

    ALTER TABLE ONLY product_color ADD CONSTRAINT product_color__product_id__fkey
    FOREIGN KEY (product_id) REFERENCES product(id) ON UPDATE CASCADE ON DELETE CASCADE;

COMMIT;
