-- Deploy restfulness:product_tag to pg

BEGIN;

    CREATE TABLE product_tag (
        id SERIAL PRIMARY KEY,
        product_id integer NOT NULL,
        tag_id integer NOT NULL,
        created_at timestamp with time zone NOT NULL default current_timestamp
    );

    ALTER TABLE ONLY product_tag ADD CONSTRAINT product_tag__product_id__fkey
    FOREIGN KEY (product_id) REFERENCES product(id) ON UPDATE CASCADE ON DELETE CASCADE;

    ALTER TABLE ONLY product_tag ADD CONSTRAINT product_tag__tag_id__fkey
    FOREIGN KEY (tag_id) REFERENCES tag(id) ON UPDATE CASCADE ON DELETE CASCADE;

COMMIT;
