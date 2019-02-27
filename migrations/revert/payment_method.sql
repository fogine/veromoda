-- Revert restfulness:payment_method from pg

BEGIN;

    drop table payment_method cascade;

COMMIT;
