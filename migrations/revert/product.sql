-- Revert restfulness:product from pg

BEGIN;

    drop table product;

COMMIT;
