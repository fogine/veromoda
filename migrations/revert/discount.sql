-- Revert restfulness:discount from pg

BEGIN;

    drop table discount;

COMMIT;
