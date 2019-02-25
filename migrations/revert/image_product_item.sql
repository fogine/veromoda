-- Revert restfulness:image_product_item from pg

BEGIN;

    drop table image_product_item;

COMMIT;
