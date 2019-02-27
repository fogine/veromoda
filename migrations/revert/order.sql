-- Revert restfulness:order from pg

BEGIN;

    drop table "order" cascade;

COMMIT;
