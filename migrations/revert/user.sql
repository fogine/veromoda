-- Revert restfulness:user from pg

BEGIN;

    drop table "user";

COMMIT;
