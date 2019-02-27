-- Revert restfulness:order_item from pg

BEGIN;

    drop table order_item cascade;

COMMIT;
