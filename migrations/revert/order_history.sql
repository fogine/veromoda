-- Revert restfulness:order_history from pg

BEGIN;

    drop table order_history cascade;

COMMIT;
