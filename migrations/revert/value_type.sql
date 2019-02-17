-- Revert restfulness:value_type from pg

BEGIN;

    drop table value_type;

COMMIT;
