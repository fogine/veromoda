-- Revert restfulness:product from pg

BEGIN;

    drop table product cascade;

COMMIT;
