-- Revert restfulness:product_tag from pg

BEGIN;

    drop table product_tag cascade;

COMMIT;
