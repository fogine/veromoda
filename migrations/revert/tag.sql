-- Revert restfulness:tag from pg

BEGIN;

    drop table tag cascade;

COMMIT;
