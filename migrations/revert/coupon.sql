-- Revert restfulness:coupon from pg

BEGIN;

    drop table coupon cascade;

COMMIT;
