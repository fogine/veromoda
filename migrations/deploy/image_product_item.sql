-- Deploy restfulness:image_product_item to pg

BEGIN;

    CREATE TABLE image_product_item (
        id SERIAL PRIMARY KEY,
        image_type_id integer NOT NULL,
        image_id integer NOT NULL,
        product_item_id integer NOT NULL
    );

    ALTER TABLE ONLY image_product_item ADD CONSTRAINT image_product_item__image_type_id__fkey
    FOREIGN KEY (image_type_id) REFERENCES image_type(id) ON UPDATE CASCADE ON DELETE RESTRICT;

    ALTER TABLE ONLY image_product_item ADD CONSTRAINT image_product_item__image_id__fkey
    FOREIGN KEY (image_id) REFERENCES image(id) ON UPDATE CASCADE ON DELETE CASCADE;

    ALTER TABLE ONLY image_product_item ADD CONSTRAINT image_product_item__product_item_id__fkey
    FOREIGN KEY (product_item_id) REFERENCES product_item(id) ON UPDATE CASCADE ON DELETE CASCADE;
COMMIT;
