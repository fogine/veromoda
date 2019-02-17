-- Revert restfulness:order_status from pg

BEGIN;

    drop table order_status;

COMMIT;
