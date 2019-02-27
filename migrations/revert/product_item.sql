-- Revert restfulness:product_item from pg

BEGIN;

    drop table product_item cascade;

COMMIT;
